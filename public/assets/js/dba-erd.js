(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function roundRect(ctx, x, y, width, height, radius) {
    var r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function wrapTextLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var lines = [];
    var current = "";
    words.forEach(function (word) {
      var next = current ? current + " " + word : word;
      if (ctx.measureText(next).width <= maxWidth) {
        current = next;
      } else {
        if (current) {
          lines.push(current);
        }
        current = word;
      }
    });
    if (current) {
      lines.push(current);
    }
    return lines.length ? lines : [text];
  }

  ready(function () {
    var canvas = document.getElementById("erdCanvas");
    if (!canvas) {
      return;
    }

    var ctx = canvas.getContext("2d");
    var dpr = window.devicePixelRatio || 1;
    var dragging = null;
    var dragStart = null;
    var dragged = false;
    var hoverTable = null;
    var pulseStart = null;
    var lastSize = { width: 0, height: 0 };
    var positions = null;
    var tableRects = [];

    var schema = {
      tables: [
        {
          name: "expertise",
          fields: [
            { name: "database performance", pk: true },
            { name: "backup & recovery", fk: true },
            { name: "replication & ha" },
            { name: "security & access" }
          ]
        },
        {
          name: "skills",
          fields: [
            { name: "sql performance tuning", pk: true },
            { name: "data modeling", fk: true },
            { name: "normalization" },
            { name: "indexing strategy" },
            { name: "monitoring & alerting" },
            { name: "data migrations" }
          ]
        },
        {
          name: "experience",
          fields: [
            { name: "Jeeglo | Database Administrator", pk: true },
            { name: "Microverse | Data Systems Mentor", fk: true },
            { name: "Microverse | Database Support Intern" }
          ]
        },
        {
          name: "background",
          fields: [
            { name: "Microverse | Database Systems Training", pk: true },
            { name: "Aptech | School of IT", fk: true },
            { name: "Intermediate | Pre-Engineering" },
            { name: "Bachelors | International Relations" }
          ]
        },
        {
          name: "tools",
          fields: [
            { name: "PostgreSQL", pk: true },
            { name: "MySQL", fk: true },
            { name: "SQL Server" },
            { name: "Indexing Strategy" },
            { name: "Data Modeling" }
          ]
        },
        {
          name: "certifications",
          fields: [
            { name: "PostgreSQL Administration", pk: true },
            { name: "Data Security & Compliance", fk: true },
            { name: "Database Foundations" },
            { name: "SQL Programming" },
            { name: "Backup & Recovery" }
          ]
        },
        {
          name: "services",
          fields: [
            { name: "DB health checks", pk: true },
            { name: "replication setup", fk: true },
            { name: "migration planning" },
            { name: "backup strategy" },
            { name: "performance tuning" }
          ]
        },
        {
          name: "about me",
          fields: [
            { name: "Saifullah | Database Administrator", pk: true },
            { name: "Explore more about me. You'll also love to know how I design data systems that stay fast, clean, and reliable." }
          ]
        },
        {
          name: "knowledge base",
          fields: [
            { name: "Schema-driven documentation", pk: true },
            { name: "Runbooks & recovery notes" },
            { name: "Query patterns & indexes" },
            { name: "Operational checklists" }
          ]
        }
      ],
      relations: [
        { from: "expertise.database performance", to: "about me.Saifullah | Database Administrator" },
        { from: "skills.sql performance tuning", to: "about me.Saifullah | Database Administrator" },
        { from: "experience.Jeeglo | Database Administrator", to: "about me.Saifullah | Database Administrator" },
        { from: "background.Microverse | Database Systems Training", to: "about me.Saifullah | Database Administrator" },
        { from: "tools.PostgreSQL", to: "about me.Saifullah | Database Administrator" },
        { from: "certifications.PostgreSQL Administration", to: "about me.Saifullah | Database Administrator" },
        { from: "services.DB health checks", to: "about me.Saifullah | Database Administrator" }
      ]
    };

    function measureTables() {
      return {
        width: 350,
        headerHeight: 28,
        rowHeight: 22,
        padding: 12,
        lineHeight: 16
      };
    }

    function getLayout(width, height, metrics) {
      var gutter = 40;
      var colLeft = gutter;
      var colMid = Math.max((width - metrics.width) / 2, gutter);
      var colRight = Math.max(width - metrics.width - gutter, colMid + metrics.width + gutter);
      var rowTop = 30;
      var rowMid = Math.max(height * 0.42, 220);
      var rowLower = Math.max(height * 0.7, 420);

      return {
        expertise: { x: colLeft, y: rowTop },
        skills: { x: colLeft, y: rowMid },
        experience: { x: colLeft, y: rowLower },
        services: { x: colLeft - 40, y: rowLower + 50 },
        "about me": { x: colMid + 30, y: rowMid },
        "knowledge base": { x: colMid + 30, y: rowLower + 160 },
        background: { x: colRight, y: rowTop },
        tools: { x: colRight, y: rowMid },
        certifications: { x: colRight, y: rowLower }
      };
    }

    function resizeCanvas() {
      var rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastSize = { width: rect.width, height: rect.height };
      render(rect.width, rect.height, 0);
    }

    function drawGrid(width, height) {
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      var step = 32;
      for (var x = 0; x <= width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (var y = 0; y <= height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
    }

    function render(width, height, time) {
      ctx.clearRect(0, 0, width, height);
      drawGrid(width, height);

      var metrics = measureTables();
      var layout = positions || getLayout(width, height, metrics);
      var anchors = {};
      tableRects = [];

      schema.tables.forEach(function (table) {
        var pos = layout[table.name];
        ctx.font = "12px 'IBM Plex Mono', ui-monospace, sans-serif";
        var fieldLayouts = table.fields.map(function (field) {
          var lines = wrapTextLines(ctx, field.name, metrics.width - 34);
          var height = Math.max(metrics.rowHeight, lines.length * metrics.lineHeight + 6);
          return { field: field, lines: lines, height: height };
        });
        var tableHeight = metrics.headerHeight + metrics.padding + fieldLayouts.reduce(function (sum, item) {
          return sum + item.height;
        }, 0);
        tableRects.push({
          name: table.name,
          x: pos.x,
          y: pos.y,
          w: metrics.width,
          h: tableHeight
        });
        anchors[table.name] = { x: pos.x, y: pos.y, h: tableHeight };

        var isKnowledge = table.name === "knowledge base";
        var isHover = hoverTable === table.name;
        var pulse = 0;
        if (isKnowledge) {
          if (pulseStart === null) {
            pulseStart = time || 0;
          }
          var elapsed = ((time || 0) - pulseStart) / 1000;
          pulse = (Math.sin(elapsed * 3) + 1) / 2;
        }

        ctx.save();
        roundRect(ctx, pos.x, pos.y, metrics.width, tableHeight, 10);
        if (isKnowledge) {
          ctx.fillStyle = "rgba(15, 21, 26, 0.95)";
          ctx.shadowColor = "rgba(43, 181, 168, 0.35)";
          ctx.shadowBlur = 18 + pulse * 10;
        } else {
          ctx.fillStyle = "#0f151a";
        }
        ctx.fill();
        if (isKnowledge) {
          ctx.strokeStyle = "rgba(43, 181, 168, " + (0.35 + pulse * 0.45) + ")";
        } else if (isHover) {
          ctx.strokeStyle = "rgba(90, 200, 250, 0.7)";
        } else {
          ctx.strokeStyle = "rgba(43, 181, 168, 0.22)";
        }
        ctx.lineWidth = isHover ? 2 : 1;
        ctx.stroke();
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;

        ctx.fillStyle = "#1a2329";
        ctx.fillRect(pos.x, pos.y, metrics.width, metrics.headerHeight);
        ctx.fillStyle = "#d7e2ea";
        ctx.font = "600 14px 'IBM Plex Mono', ui-monospace, sans-serif";
        ctx.fillText(table.name, pos.x + 12, pos.y + 19);

        if (isKnowledge) {
          ctx.fillStyle = "rgba(90, 200, 250, 0.9)";
          ctx.beginPath();
          ctx.arc(pos.x + metrics.width - 14, pos.y + 14, 4 + pulse * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        var cursorY = pos.y + metrics.headerHeight + metrics.padding;
        fieldLayouts.forEach(function (item) {
          var field = item.field;
          var rowY = cursorY;
          var dotX = pos.x + 12;
          var dotY = rowY + 6;
          if (field.pk) {
            ctx.fillStyle = "#ffb04a";
          } else if (field.fk) {
            ctx.fillStyle = "#5ac8fa";
          } else {
            ctx.fillStyle = "#2bb5a8";
          }
          ctx.beginPath();
          ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#c7d4df";
          ctx.font = "12px 'IBM Plex Mono', ui-monospace, sans-serif";
          item.lines.forEach(function (line, idx) {
            ctx.fillText(line, pos.x + 22, rowY + idx * metrics.lineHeight + 6);
          });

          anchors[table.name][field.name] = {
            x: pos.x + metrics.width,
            y: dotY,
            xLeft: pos.x,
            yLeft: dotY
          };
          cursorY += item.height;
        });
        ctx.restore();
      });

      ctx.save();
      ctx.strokeStyle = "rgba(90, 200, 250, 0.7)";
      ctx.lineWidth = 1.5;

      schema.relations.forEach(function (rel) {
        var fromParts = rel.from.split(".");
        var toParts = rel.to.split(".");
        var fromTable = fromParts[0];
        var fromField = fromParts[1];
        var toTable = toParts[0];
        var toField = toParts[1];

        var fromAnchor = anchors[fromTable] && anchors[fromTable][fromField];
        var toAnchor = anchors[toTable] && anchors[toTable][toField];
        if (!fromAnchor || !toAnchor) {
          return;
        }

        var startX = fromAnchor.x;
        var startY = fromAnchor.y;
        var endX = toAnchor.xLeft;
        var endY = toAnchor.yLeft;
        var midX = (startX + endX) / 2;

        if (startX > endX) {
          startX = fromAnchor.xLeft;
          endX = toAnchor.x;
          midX = (startX + endX) / 2;
        }

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(midX, startY);
        ctx.lineTo(midX, endY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });

      ctx.restore();
    }

    window.addEventListener("resize", function () {
      resizeCanvas();
    });

    function pickTable(point) {
      for (var i = tableRects.length - 1; i >= 0; i -= 1) {
        var rect = tableRects[i];
        if (
          point.x >= rect.x &&
          point.x <= rect.x + rect.w &&
          point.y >= rect.y &&
          point.y <= rect.y + rect.h
        ) {
          return rect;
        }
      }
      return null;
    }

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function pointerPosition(event) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        width: rect.width,
        height: rect.height
      };
    }

    canvas.addEventListener("pointerdown", function (event) {
      var pos = pointerPosition(event);
      var hit = pickTable(pos);
      if (!hit) {
        return;
      }
      canvas.setPointerCapture(event.pointerId);
      dragging = {
        name: hit.name,
        offsetX: pos.x - hit.x,
        offsetY: pos.y - hit.y
      };
      dragStart = { x: pos.x, y: pos.y };
      dragged = false;
      event.preventDefault();
    });

    canvas.addEventListener("pointermove", function (event) {
      var pos = pointerPosition(event);
      var hit = pickTable(pos);
      hoverTable = hit ? hit.name : null;
      canvas.style.cursor = hoverTable === "knowledge base" ? "pointer" : (dragging ? "grabbing" : "grab");
      if (!dragging) {
        return;
      }
      if (dragStart && !dragged) {
        var dx = Math.abs(pos.x - dragStart.x);
        var dy = Math.abs(pos.y - dragStart.y);
        if (dx > 4 || dy > 4) {
          dragged = true;
        }
      }
      var metrics = measureTables();
      var table = schema.tables.find(function (item) {
        return item.name === dragging.name;
      });
      if (!table) {
        return;
      }
      ctx.font = "12px 'IBM Plex Mono', ui-monospace, sans-serif";
      var tableHeight = metrics.headerHeight + metrics.padding + table.fields.reduce(function (sum, field) {
        var lines = wrapTextLines(ctx, field.name, metrics.width - 34);
        var height = Math.max(metrics.rowHeight, lines.length * metrics.lineHeight + 6);
        return sum + height;
      }, 0);
      positions = positions || getLayout(pos.width, pos.height, metrics);
      positions[dragging.name] = {
        x: clamp(pos.x - dragging.offsetX, 10, pos.width - metrics.width - 10),
        y: clamp(pos.y - dragging.offsetY, 10, pos.height - tableHeight - 10)
      };
      render(pos.width, pos.height, performance.now());
    });

    canvas.addEventListener("pointerup", function (event) {
      if (dragging) {
        canvas.releasePointerCapture(event.pointerId);
      }
      if (dragging && !dragged && dragging.name === "knowledge base") {
        if (window.jQuery && window.jQuery.fn && window.jQuery.fn.modal) {
          window.jQuery("#exampleModalCenter").modal("show");
        }
      }
      dragging = null;
      dragStart = null;
      dragged = false;
      hoverTable = null;
      canvas.style.cursor = "grab";
    });

    canvas.addEventListener("pointerleave", function () {
      dragging = null;
      dragStart = null;
      dragged = false;
      hoverTable = null;
      canvas.style.cursor = "grab";
    });

    function animate(time) {
      render(lastSize.width, lastSize.height, time);
      window.requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.requestAnimationFrame(animate);
  });
})();
