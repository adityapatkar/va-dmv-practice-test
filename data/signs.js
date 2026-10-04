window.VA = window.VA || {};

/*
 * Road sign art (inline SVG strings) and road sign questions.
 * Source: Virginia Driver's Manual (April 2026), Section 2, printed pages 5–13.
 * Helpers below only build strings; every VA.signArt value is a plain SVG string.
 */
(function (VA) {
  'use strict';

  var FONT = 'font-family="Arial, Helvetica, sans-serif" font-weight="bold"';
  var C = {
    red: '#C8102E',
    yellow: '#FFCC00',
    yg: '#C6E000',
    orange: '#F58220',
    green: '#006B3F',
    blue: '#0B4EA2',
    brown: '#6B3A1E',
    black: '#111111',
    white: '#FFFFFF',
    edge: '#555555'
  };
  var LAMP = { red: '#E8202A', yellow: '#FFC20E', green: '#1DB954', off: '#3A3A3A', lens: '#262626' };

  function r1(n) { return Math.round(n * 10) / 10; }

  function svg(body) {
    return '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img">' + body + '</svg>';
  }

  // Bold sans text; compresses horizontally when the estimated width exceeds maxW.
  function text(x, y, size, str, fill, maxW, anchor) {
    var est = str.length * size * 0.7;
    var fit = maxW && est > maxW ? ' textLength="' + maxW + '" lengthAdjust="spacingAndGlyphs"' : '';
    return '<text x="' + x + '" y="' + y + '" font-size="' + size + '" text-anchor="' + (anchor || 'middle') + '" ' +
      FONT + ' fill="' + (fill || C.black) + '"' + fit + '>' + str + '</text>';
  }

  function stroke(d, w, color, cap) {
    return '<path d="' + d + '" fill="none" stroke="' + (color || C.black) + '" stroke-width="' + w +
      '" stroke-linejoin="round"' + (cap ? ' stroke-linecap="' + cap + '"' : '') + '/>';
  }

  // Triangular arrowhead with its tip at (x, y); ang = 0 points up, 90 right, 180 down, 270 left.
  function head(x, y, ang, L, W, fill) {
    return '<polygon points="0,0 ' + (-W) + ',' + L + ' ' + W + ',' + L + '" fill="' + (fill || C.black) +
      '" transform="translate(' + r1(x) + ' ' + r1(y) + ') rotate(' + r1(ang) + ')"/>';
  }

  // Arrowhead whose base sits at the end (ex, ey) of a path arriving from (px, py).
  function headAt(px, py, ex, ey, L, W, fill) {
    var dx = ex - px, dy = ey - py, d = Math.sqrt(dx * dx + dy * dy);
    dx /= d; dy /= d;
    return head(ex + dx * (L - 2), ey + dy * (L - 2), Math.atan2(dx, -dy) * 180 / Math.PI, L, W, fill);
  }

  function arrow(d, px, py, ex, ey, w, L, W, fill) {
    return stroke(d, w, fill) + headAt(px, py, ex, ey, L, W, fill);
  }

  // ---------- Sign shapes ----------
  function diamondBg(fill) {
    return '<polygon points="100,3 197,100 100,197 3,100" fill="' + fill + '" stroke="' + C.edge +
      '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<polygon points="100,12 188,100 100,188 12,100" fill="none" stroke="' + C.black +
      '" stroke-width="5" stroke-linejoin="round"/>';
  }
  function diamond(body, fill) { return svg(diamondBg(fill || C.yellow) + (body || '')); }

  // Smaller diamond with a supplemental plaque underneath.
  function diamondPlaque(body, plaque) {
    return svg('<g transform="translate(25 0) scale(0.75)">' + diamondBg(C.yellow) + body + '</g>' + plaque);
  }

  function rectSign(x, y, w, h, fill, border, body) {
    return svg('<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="' + fill +
      '" stroke="' + C.edge + '" stroke-width="1.5"/>' +
      '<rect x="' + (x + 5) + '" y="' + (y + 5) + '" width="' + (w - 10) + '" height="' + (h - 10) +
      '" rx="7" fill="none" stroke="' + border + '" stroke-width="4"/>' + (body || ''));
  }
  function whiteVertical(body) { return rectSign(34, 4, 132, 192, C.white, C.black, body); }
  function whiteSquare(body) { return rectSign(8, 8, 184, 184, C.white, C.black, body); }

  function octPts(cx, cy, r) {
    var p = [];
    for (var k = 0; k < 8; k++) {
      var a = (22.5 + 45 * k) * Math.PI / 180;
      p.push(r1(cx + r * Math.cos(a)) + ',' + r1(cy + r * Math.sin(a)));
    }
    return p.join(' ');
  }
  function octagon(cx, cy, r) {
    return '<polygon points="' + octPts(cx, cy, r) + '" fill="' + C.red + '" stroke="' + C.edge + '" stroke-width="1"/>' +
      '<polygon points="' + octPts(cx, cy, r * 0.91) + '" fill="none" stroke="' + C.white + '" stroke-width="' + r1(r * 0.05) + '"/>';
  }

  function yieldShape() {
    return '<polygon points="6,20 194,20 100,184" fill="' + C.red + '" stroke="' + C.edge +
      '" stroke-width="1.5" stroke-linejoin="round"/><polygon points="40,40 160,40 100,145" fill="' + C.white + '"/>';
  }

  function pentagonBg(fill) {
    return '<polygon points="100,4 196,76 196,196 4,196 4,76" fill="' + fill + '" stroke="' + C.edge +
      '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<polygon points="100,14 187,80 187,187 13,187 13,80" fill="none" stroke="' + C.black +
      '" stroke-width="5" stroke-linejoin="round"/>';
  }

  function circleSlash() {
    return '<circle cx="100" cy="100" r="74" fill="none" stroke="' + C.red + '" stroke-width="13"/>' +
      stroke('M47.7,47.7 L152.3,152.3', 13, C.red);
  }

  // ---------- Traffic & lane use signals ----------
  function housing(lamps) {
    var s = '<rect x="62" y="8" width="76" height="184" rx="14" fill="#1B1B1B" stroke="#000" stroke-width="2"/>';
    var ys = [42, 100, 158];
    for (var i = 0; i < 3; i++) s += lamps[i](100, ys[i]);
    return svg(s);
  }
  function lamp(color) { return function (cx, cy) { return '<circle cx="' + cx + '" cy="' + cy + '" r="24" fill="' + color + '"/>'; }; }
  function rays(cx, cy, color) {
    var s = '';
    [-35, 0, 35, 145, 180, 215].forEach(function (deg) {
      var a = deg * Math.PI / 180;
      s += '<line x1="' + r1(cx + 32 * Math.cos(a)) + '" y1="' + r1(cy + 32 * Math.sin(a)) + '" x2="' + r1(cx + 50 * Math.cos(a)) +
        '" y2="' + r1(cy + 50 * Math.sin(a)) + '" stroke="' + color + '" stroke-width="5" stroke-linecap="round"/>';
    });
    return s;
  }
  function flashing(color) { return function (cx, cy) { return lamp(color)(cx, cy) + rays(cx, cy, color); }; }
  // Dark lens showing a lit arrow; ang: 90 right, 270 left.
  function arrowLamp(color, ang, flash) {
    return function (cx, cy) {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="24" fill="' + LAMP.lens + '"/>' +
        '<g transform="rotate(' + (ang - 90) + ' ' + cx + ' ' + cy + ')">' +
        stroke('M' + (cx - 17) + ',' + cy + ' H' + (cx + 4), 9, color) + head(cx + 18, cy, 90, 16, 12, color) + '</g>' +
        (flash ? rays(cx, cy, color) : '');
    };
  }
  var OFF = lamp(LAMP.off);

  function laneSignal(body) {
    return svg('<rect x="14" y="14" width="172" height="172" rx="16" fill="#1B1B1B" stroke="#000" stroke-width="2"/>' + body);
  }
  function xMark(color) { return stroke('M55,55 L145,145 M145,55 L55,145', 22, color); }

  // ---------- Pavement marking diagrams ----------
  var PAINT_Y = '#F2C200';
  function road(x1, x2, body) {
    return svg('<rect width="200" height="200" fill="#7CB342"/>' +
      '<rect x="' + x1 + '" y="0" width="' + (x2 - x1) + '" height="200" fill="#55585C"/>' +
      vline(x1 + 5, '#FFFFFF', null, 4) + vline(x2 - 5, '#FFFFFF', null, 4) + body);
  }
  function vline(x, color, dash, w) {
    return '<line x1="' + x + '" y1="0" x2="' + x + '" y2="200" stroke="' + color + '" stroke-width="' + (w || 5) + '"' +
      (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>';
  }
  function car(cx, cy, color, down) {
    return '<g transform="translate(' + cx + ' ' + cy + ')' + (down ? ' rotate(180)' : '') + '">' +
      '<rect x="-13" y="-23" width="26" height="46" rx="7" fill="' + color + '" stroke="#222" stroke-width="1.5"/>' +
      '<rect x="-10" y="-13" width="20" height="9" rx="2" fill="#CFE8FF"/>' +
      '<rect x="-10" y="11" width="20" height="6" rx="2" fill="#CFE8FF"/></g>';
  }
  var BLUE_CAR = '#1F5FBF', RED_CAR = '#C0392B';

  // ---------- Recurring symbol pieces ----------
  function crossbuck() {
    function board(rot, a, b) {
      return '<g transform="translate(100 100) rotate(' + rot + ')">' +
        '<rect x="-97" y="-19" width="194" height="38" rx="3" fill="#FFFFFF" stroke="#111" stroke-width="3"/>' +
        text(-54, 9, 25, a, C.black, 70) + text(54, 9, 25, b, C.black, 70) + '</g>';
    }
    return board(-45, 'CROS', 'SING') + board(45, 'RAIL', 'ROAD');
  }
  function rrLight(cx, cy, r, flash) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r1(r * 0.65) + '" fill="' + LAMP.red + '"/>' +
      (flash ? '<circle cx="' + cx + '" cy="' + cy + '" r="' + r1(r * 1.35) + '" fill="none" stroke="' + LAMP.red + '" stroke-width="3" stroke-dasharray="6 5"/>' : '');
  }

  var plaque35 = '<rect x="58" y="153" width="84" height="44" rx="5" fill="' + C.yellow + '" stroke="#111" stroke-width="3"/>' +
    text(100, 181, 28, '35') + text(100, 194, 11, 'MPH');

  // Roundabout: three counterclockwise arcs with arrowheads.
  function roundaboutArrows() {
    var cx = 100, cy = 100, r = 40, s = '';
    [20, 140, 260].forEach(function (a0) {
      var a1 = a0 + 78, rad0 = a0 * Math.PI / 180, rad1 = a1 * Math.PI / 180;
      var x0 = cx + r * Math.cos(rad0), y0 = cy - r * Math.sin(rad0);
      var x1 = cx + r * Math.cos(rad1), y1 = cy - r * Math.sin(rad1);
      s += stroke('M' + r1(x0) + ',' + r1(y0) + ' A' + r + ',' + r + ' 0 0 0 ' + r1(x1) + ',' + r1(y1), 13);
      // tangent for counterclockwise travel (screen coords)
      var tx = -Math.sin(rad1), ty = -Math.cos(rad1);
      s += headAt(x1 - tx, y1 - ty, x1, y1, 24, 15);
    });
    return s;
  }

  var art = {};

  // ===== Regulatory =====
  art['stop'] = svg(octagon(100, 100, 96) + text(100, 121, 58, 'STOP', C.white, 148));
  art['all-way-stop'] = svg(octagon(100, 78, 76) + text(100, 95, 46, 'STOP', C.white, 116) +
    '<rect x="48" y="160" width="104" height="36" rx="4" fill="' + C.red + '" stroke="#FFFFFF" stroke-width="3"/>' +
    text(100, 186, 22, 'ALL WAY', C.white, 88));
  art['yield'] = svg(yieldShape() + text(100, 76, 25, 'YIELD', C.red, 74));
  art['do-not-enter'] = svg('<rect x="6" y="6" width="188" height="188" rx="10" fill="#FFFFFF" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<circle cx="100" cy="100" r="84" fill="' + C.red + '"/><rect x="30" y="86" width="140" height="28" fill="#FFFFFF"/>' +
    text(100, 72, 26, 'DO NOT', C.white, 110) + text(100, 148, 26, 'ENTER', C.white, 98));
  art['wrong-way'] = svg('<rect x="4" y="40" width="192" height="120" rx="10" fill="' + C.red + '" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<rect x="10" y="46" width="180" height="108" rx="7" fill="none" stroke="#FFFFFF" stroke-width="4"/>' +
    text(100, 96, 42, 'WRONG', C.white, 160) + text(100, 142, 42, 'WAY', C.white));
  art['speed-limit'] = rectSign(30, 4, 140, 192, C.white, C.black,
    text(100, 50, 32, 'SPEED', C.black, 112) + text(100, 88, 32, 'LIMIT', C.black, 104) + text(100, 170, 86, '55', C.black, 112));
  var rightTurnArrow = arrow('M82,160 V100 Q82,76 106,76 H118', 106, 76, 118, 76, 18, 32, 23);
  art['no-right-turn'] = whiteSquare(rightTurnArrow + circleSlash());
  art['no-left-turn'] = whiteSquare('<g transform="translate(200 0) scale(-1 1)">' + rightTurnArrow + '</g>' + circleSlash());
  art['no-u-turn'] = whiteSquare(stroke('M124,162 V92 A26,26 0 0 0 72,92 V104', 18) + head(72, 136, 180, 34, 23) + circleSlash());
  art['no-turn-on-red'] = whiteVertical(text(100, 54, 42, 'NO') + text(100, 98, 34, 'TURN', C.black, 104) +
    text(100, 140, 34, 'ON') + text(100, 182, 34, 'RED'));
  art['do-not-pass'] = whiteVertical(text(100, 62, 46, 'DO') + text(100, 118, 46, 'NOT') + text(100, 174, 46, 'PASS', C.black, 108));
  art['left-turn-yield-green'] = whiteVertical(text(100, 40, 18, 'LEFT TURN', C.black, 104) + text(100, 84, 34, 'YIELD', C.black, 104) +
    text(100, 118, 18, 'ON GREEN', C.black, 104) + '<circle cx="100" cy="156" r="22" fill="' + LAMP.green + '" stroke="#0B7A35" stroke-width="2"/>');
  art['keep-right'] = whiteVertical('<path d="M54,34 H92 V80 Q92,128 73,152 Q54,128 54,80 Z" fill="#111"/>' +
    arrow('M112,184 V150 C112,118 136,110 136,80 V72', 136, 80, 136, 72, 15, 32, 20));
  art['one-way'] = svg('<rect x="4" y="58" width="192" height="84" rx="6" fill="#111" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<polygon points="14,78 148,78 148,66 190,100 148,134 148,122 14,122" fill="#FFFFFF"/>' +
    text(82, 110, 28, 'ONE WAY', C.black, 120));
  art['one-way-vertical'] = whiteVertical(text(100, 62, 44, 'ONE', C.black, 104) + text(100, 112, 44, 'WAY', C.black, 104) +
    arrow('M150,152 H86', 86, 152, 80, 152, 14, 34, 22));
  art['lane-use-left-only'] = rectSign(30, 4, 140, 192, C.white, C.black,
    arrow('M120,140 V96 Q120,68 92,68 H84', 92, 68, 84, 68, 19, 32, 23) + text(100, 182, 38, 'ONLY', C.black, 112));
  art['hov-lane'] = rectSign(28, 4, 144, 192, C.white, C.black,
    '<rect x="40" y="16" width="40" height="58" rx="3" fill="#111"/>' +
    '<polygon points="60,22 74,45 60,68 46,45" fill="none" stroke="#FFFFFF" stroke-width="4"/>' +
    text(122, 40, 20, 'LEFT', C.black, 64) + text(122, 66, 20, 'LANE', C.black, 64) +
    text(100, 114, 34, 'HOV 2+', C.black, 122) + text(100, 150, 32, 'ONLY', C.black, 100) +
    text(100, 172, 15, '6AM - 9AM', C.black, 100) + text(100, 188, 13, 'MON-FRI', C.black, 76));
  art['disabled-parking'] = rectSign(30, 4, 140, 192, C.white, C.green,
    text(100, 38, 22, 'RESERVED', C.green, 116) + text(100, 66, 22, 'PARKING', C.green, 110) +
    '<rect x="66" y="78" width="68" height="68" rx="5" fill="' + C.blue + '"/>' +
    '<circle cx="96" cy="89" r="6" fill="#FFFFFF"/>' +
    stroke('M94,99 V122 H112 L120,138', 6, '#FFFFFF', 'round') + stroke('M94,110 H109', 5, '#FFFFFF', 'round') +
    stroke('M85,117 A15,15 0 1 0 110,132', 5, '#FFFFFF', 'round') +
    stroke('M70,172 H130', 5, C.green) + head(54, 172, 270, 18, 11, C.green) + head(146, 172, 90, 18, 11, C.green));

  // ===== Warning =====
  art['no-passing-zone'] = svg('<polygon points="6,30 6,170 194,100" fill="' + C.yellow + '" stroke="' + C.edge + '" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<polygon points="14,41 14,159 174,100" fill="none" stroke="#111" stroke-width="4" stroke-linejoin="round"/>' +
    text(22, 78, 22, 'NO', C.black, 0, 'start') + text(22, 107, 22, 'PASSING', C.black, 110, 'start') + text(22, 134, 22, 'ZONE', C.black, 58, 'start'));
  art['advisory-exit-speed'] = svg('<rect x="40" y="6" width="120" height="188" rx="10" fill="' + C.yellow + '" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<rect x="46" y="12" width="108" height="176" rx="7" fill="none" stroke="#111" stroke-width="4"/>' +
    text(100, 60, 40, 'EXIT', C.black, 96) + text(100, 142, 82, '25', C.black, 96) + text(100, 178, 26, 'MPH', C.black, 70));
  art['low-clearance'] = diamond(text(100, 113, 38, '13\'-6"', C.black, 118) +
    stroke('M100,74 V44', 10) + head(100, 24, 0, 22, 17) + stroke('M100,126 V156', 10) + head(100, 176, 180, 22, 17));
  art['reduced-speed-ahead'] = diamond(stroke('M100,64 V44', 10) + head(100, 24, 0, 22, 17) +
    '<rect x="70" y="66" width="60" height="80" rx="4" fill="#FFFFFF" stroke="#111" stroke-width="3"/>' +
    text(100, 84, 14, 'SPEED', C.black, 48) + text(100, 100, 14, 'LIMIT', C.black, 44) + text(100, 138, 38, '45', C.black, 50));
  art['hill'] = diamond('<polygon points="60,138 140,138 140,96" fill="#111"/>' +
    '<g transform="translate(66 134.8) rotate(-27.7)">' +
    '<rect x="24" y="-40" width="50" height="34" rx="2" fill="#111"/>' +
    '<path d="M0,-6 V-16 L6,-26 H22 V-6 Z" fill="#111"/>' +
    '<rect x="8" y="-23" width="8" height="7" fill="' + C.yellow + '"/>' +
    '<circle cx="10" cy="-5" r="6" fill="#111"/><circle cx="38" cy="-5" r="6" fill="#111"/><circle cx="62" cy="-5" r="6" fill="#111"/>' +
    '</g>');
  art['deer-crossing'] = diamond('<g transform="translate(20 22) scale(0.8)">' +
    '<ellipse cx="112" cy="104" rx="32" ry="16" transform="rotate(35 112 104)" fill="#111"/>' +
    stroke('M92,92 L80,64', 13, '#111', 'round') +
    '<ellipse cx="74" cy="60" rx="12" ry="7" transform="rotate(-25 74 60)" fill="#111"/>' +
    '<polygon points="84,54 92,46 88,58" fill="#111"/>' +
    stroke('M80,54 L86,36 L82,24 M86,36 L95,28 M84,44 L74,34 L74,26', 3.5, '#111', 'round') +
    stroke('M94,98 L76,106 L62,98 M100,104 L86,118 L70,116', 6, '#111', 'round') +
    stroke('M130,118 L142,130 L148,146 M124,120 L132,134 L134,150', 6, '#111', 'round') +
    stroke('M136,106 L146,98', 6, '#111', 'round') + '</g>');
  art['stop-ahead'] = diamond(stroke('M100,64 V44', 10) + head(100, 24, 0, 22, 17) + octagon(100, 112, 37));
  art['yield-ahead'] = diamond(stroke('M100,64 V44', 10) + head(100, 24, 0, 22, 17) +
    '<polygon points="60,76 140,76 100,148" fill="' + C.red + '"/><polygon points="77,86 123,86 100,128" fill="#FFFFFF"/>');
  art['horse-buggy'] = diamond(
    '<ellipse cx="72" cy="98" rx="20" ry="9" fill="#111"/>' +
    stroke('M58,96 L47,78', 10, '#111', 'round') +
    '<ellipse cx="42" cy="84" rx="5" ry="10" transform="rotate(35 42 84)" fill="#111"/>' +
    '<polygon points="46,70 50,64 52,73" fill="#111"/>' +
    stroke('M58,104 L52,124 M64,104 L68,116 L62,124 M82,104 L80,124 M88,102 L96,112 L94,124', 4, '#111', 'round') +
    stroke('M91,94 Q101,98 98,114', 4, '#111', 'round') +
    stroke('M66,95 L112,104', 3) +
    '<path d="M108,74 Q130,62 154,74 V106 H108 Z" fill="#111"/>' +
    '<circle cx="118" cy="118" r="11" fill="none" stroke="#111" stroke-width="3"/>' +
    '<circle cx="145" cy="118" r="11" fill="none" stroke="#111" stroke-width="3"/>' +
    stroke('M107,118 H129 M118,107 V129 M134,118 H156 M145,107 V129', 1.5));
  art['signal-ahead'] = diamond('<rect x="76" y="46" width="48" height="108" rx="10" fill="#111"/>' +
    '<circle cx="100" cy="68" r="14" fill="' + LAMP.red + '"/><circle cx="100" cy="100" r="14" fill="' + LAMP.yellow + '"/>' +
    '<circle cx="100" cy="132" r="14" fill="' + LAMP.green + '"/>');
  art['merge'] = diamond(arrow('M92,165 V70', 92, 70, 92, 66, 20, 36, 25) + stroke('M128,146 Q128,122 100,104', 12));
  art['lane-reduction'] = diamond(stroke('M80,150 V50', 14) + stroke('M124,148 V118 L108,94 V52', 14) +
    stroke('M103,104 V148', 6, '#111') .replace('/>', ' stroke-dasharray="9 7"/>'));
  art['divided-highway-begins'] = diamond('<path d="M88,46 H112 V60 Q112,88 100,102 Q88,88 88,60 Z" fill="#111"/>' +
    arrow('M80,58 C80,84 72,92 72,114', 72, 106, 72, 114, 12, 26, 16) +
    arrow('M122,152 V140 C122,118 130,108 130,84', 130, 92, 130, 84, 12, 26, 16));
  art['divided-highway-ends'] = diamond('<path d="M88,154 H112 V140 Q112,112 100,98 Q88,112 88,140 Z" fill="#111"/>' +
    arrow('M90,48 C90,76 72,86 72,112', 72, 104, 72, 112, 12, 26, 16) +
    arrow('M128,150 V132 C128,110 110,102 110,82', 110, 90, 110, 82, 12, 26, 16));
  art['slippery-when-wet'] = diamond('<rect x="70" y="58" width="60" height="24" rx="6" fill="#111"/>' +
    '<polygon points="78,60 85,44 115,44 122,60" fill="#111"/><polygon points="85,57 89,48 111,48 115,57" fill="' + C.yellow + '"/>' +
    '<rect x="73" y="80" width="12" height="10" rx="2" fill="#111"/><rect x="115" y="80" width="12" height="10" rx="2" fill="#111"/>' +
    stroke('M82,96 C68,110 96,122 82,136 S74,150 80,156', 6) + stroke('M118,96 C104,110 132,122 118,136 S110,150 116,156', 6));
  art['tractor'] = diamond('<circle cx="128" cy="120" r="26" fill="#111"/><circle cx="128" cy="120" r="9" fill="' + C.yellow + '"/>' +
    '<circle cx="128" cy="120" r="4" fill="#111"/>' +
    '<circle cx="70" cy="132" r="12" fill="#111"/><circle cx="70" cy="132" r="4" fill="' + C.yellow + '"/>' +
    '<rect x="60" y="100" width="54" height="22" rx="4" fill="#111"/>' + stroke('M80,100 V80', 5) +
    '<path d="M104,100 Q112,86 132,90 L136,100 Z" fill="#111"/>' +
    '<circle cx="122" cy="62" r="7" fill="#111"/><ellipse cx="122" cy="56" rx="11" ry="3" fill="#111"/><rect x="116" y="48" width="12" height="8" rx="2" fill="#111"/>' +
    stroke('M121,70 L118,94', 11, '#111', 'round') + stroke('M118,78 L102,84', 5, '#111', 'round') + stroke('M98,98 L104,82', 4));
  art['pedestrian-crossing'] = diamond('<circle cx="100" cy="48" r="11" fill="#111"/>' +
    stroke('M98,66 L94,104', 18, '#111', 'round') +
    stroke('M95,72 L82,92 L76,106 M98,74 L110,90 L118,100', 8, '#111', 'round') +
    stroke('M94,104 L82,126 L72,148 M95,104 L106,126 L116,148', 11, '#111', 'round'), C.yg);
  art['bicycle-crossing'] = diamond('<circle cx="66" cy="120" r="22" fill="none" stroke="#111" stroke-width="6"/>' +
    '<circle cx="134" cy="120" r="22" fill="none" stroke="#111" stroke-width="6"/>' +
    stroke('M66,120 L96,120 L86,92 L126,92 L96,120 M86,92 L66,120 M126,92 L134,120 M126,92 L122,80 L134,78 M78,88 H94', 5, '#111', 'round'), C.yg);
  art['school-zone'] = svg(pentagonBg(C.yg) +
    '<circle cx="80" cy="72" r="10" fill="#111"/><polygon points="72,86 88,86 96,132 64,132" fill="#111"/>' +
    stroke('M73,132 L66,166 M87,132 L94,166', 8, '#111', 'round') + stroke('M72,90 L60,120', 7, '#111', 'round') +
    '<circle cx="124" cy="84" r="9" fill="#111"/>' + stroke('M124,96 V130', 16, '#111', 'round') +
    stroke('M121,130 L112,166 M127,130 L136,166', 8, '#111', 'round') + stroke('M90,104 L118,104 M128,100 L138,122', 6, '#111', 'round'));
  art['crossroad'] = diamond(stroke('M100,40 V160 M40,100 H160', 22));
  art['side-road'] = diamond(stroke('M100,40 V160 M100,100 H160', 22));
  art['y-intersection'] = diamond(stroke('M64,66 L100,108 L136,66 M100,106 V162', 20));
  art['t-intersection'] = diamond(stroke('M100,165 V80 M50,80 H150', 22));
  art['roundabout'] = diamond(roundaboutArrows());
  art['side-road-curve'] = diamond(arrow('M100,165 V122 Q100,94 122,78', 100, 94, 122, 78, 18, 28, 20) + stroke('M58,98 L100,124', 14));
  art['sharp-right-turn'] = diamond(arrow('M84,160 V80 H130', 120, 80, 130, 80, 20, 32, 22));
  art['sharp-right-left-turns'] = diamond(arrow('M78,150 V115 H122 V66', 122, 76, 122, 66, 18, 28, 20));
  art['right-left-curves'] = diamond(arrow('M80,156 V130 C80,104 122,110 122,82 V70', 122, 78, 122, 70, 18, 28, 20));
  var rightCurve = arrow('M88,160 V118 Q88,92 112,78', 88, 92, 112, 78, 18, 28, 20);
  art['right-curve-speed'] = diamondPlaque(rightCurve, plaque35);
  art['winding-road'] = diamond(arrow('M100,165 Q70,145 100,125 Q130,105 100,85 Q80,72 92,60', 80, 72, 92, 60, 14, 26, 18));
  art['low-ground-railroad'] = diamond('<path d="M62,140 L88,118 H112 L138,140 Z" fill="#111"/>' +
    stroke('M86,122 V112 M100,120 V110 M114,122 V112', 3) +
    '<rect x="54" y="98" width="92" height="10" rx="2" fill="#111"/>' +
    '<path d="M54,98 V80 H76 L82,92 V98 Z" fill="#111"/><rect x="60" y="84" width="10" height="7" fill="' + C.yellow + '"/>' +
    '<circle cx="64" cy="112" r="6" fill="#111"/><circle cx="138" cy="112" r="6" fill="#111"/>');
  art['railroad-advance'] = svg('<circle cx="100" cy="100" r="96" fill="' + C.yellow + '" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<circle cx="100" cy="100" r="89" fill="none" stroke="#111" stroke-width="5"/>' +
    stroke('M39.2,39.2 L160.8,160.8 M160.8,39.2 L39.2,160.8', 18) +
    text(52, 116, 42, 'R') + text(148, 116, 42, 'R'));
  art['railroad-crossbuck'] = svg(crossbuck());
  art['crossbuck-lights'] = svg('<rect x="96" y="60" width="8" height="140" fill="#8A8A8A"/>' +
    '<g transform="translate(35 0) scale(0.65)">' + crossbuck() + '</g>' +
    '<rect x="44" y="146" width="112" height="8" fill="#8A8A8A"/>' + rrLight(50, 150, 20, true) + rrLight(150, 150, 20, false));
  var gateStripes = '';
  for (var gx = 18; gx < 134; gx += 24) gateStripes += '<rect x="' + gx + '" y="170" width="12" height="10" fill="' + C.red + '"/>';
  art['crossbuck-gate'] = svg('<rect x="137" y="56" width="8" height="144" fill="#8A8A8A"/>' +
    '<g transform="translate(86 0) scale(0.55)">' + crossbuck() + '</g>' +
    '<rect x="108" y="122" width="66" height="6" fill="#8A8A8A"/>' + rrLight(112, 125, 14, true) + rrLight(170, 125, 14, false) +
    '<rect x="6" y="170" width="134" height="10" fill="#FFFFFF" stroke="#333" stroke-width="1.5"/>' + gateStripes +
    '<rect x="132" y="162" width="20" height="26" rx="3" fill="#666"/>');
  art['rough-road'] = diamond(text(100, 94, 32, 'ROUGH', C.black, 116) + text(100, 132, 32, 'ROAD', C.black, 100));
  art['bump'] = diamond(text(100, 114, 40, 'BUMP', C.black, 120));

  // ===== Work zone =====
  art['road-work-ahead'] = diamond(text(100, 82, 26, 'ROAD', C.black, 84) + text(100, 112, 26, 'WORK', C.black, 112) +
    text(100, 142, 26, 'AHEAD', C.black, 78), C.orange);
  art['detour'] = svg('<rect x="6" y="40" width="188" height="120" rx="8" fill="' + C.orange + '" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<rect x="12" y="46" width="176" height="108" rx="6" fill="none" stroke="#111" stroke-width="4"/>' +
    text(100, 92, 42, 'DETOUR', C.black, 160) + arrow('M50,124 H132', 124, 124, 132, 124, 14, 28, 18));
  art['flagger-ahead'] = diamond('<circle cx="110" cy="54" r="10" fill="#111"/><path d="M98,50 Q110,36 122,50 Z" fill="#111"/>' +
    stroke('M110,68 V110', 18, '#111', 'round') + stroke('M106,112 L98,150 M114,112 L122,150', 10, '#111', 'round') +
    stroke('M106,76 L80,88', 8, '#111', 'round') + stroke('M80,88 L72,118', 3) +
    '<polygon points="80,88 54,96 76,108" fill="#111"/>' + stroke('M114,78 L124,100', 7, '#111', 'round'), C.orange);
  art['slow-paddle'] = svg('<rect x="94" y="150" width="12" height="50" rx="3" fill="#7A7A7A"/>' +
    '<g transform="translate(20 0) scale(0.8)">' + diamondBg(C.orange) + text(100, 116, 44, 'SLOW', C.black, 124) + '</g>');
  var boardDots = '';
  [[34, 100], [50, 100], [66, 100], [82, 100], [98, 100], [114, 100], [130, 100], [146, 100], [164, 100],
    [150, 86], [136, 72], [122, 58], [150, 114], [136, 128], [122, 142]].forEach(function (p) {
    boardDots += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6" fill="#FFD21F"/>';
  });
  art['arrow-board'] = svg('<rect x="6" y="40" width="188" height="120" rx="6" fill="#151515" stroke="#444" stroke-width="2"/>' + boardDots);
  art['rumble-strips-ahead'] = diamond(text(100, 82, 24, 'RUMBLE', C.black, 84) + text(100, 112, 24, 'STRIPS', C.black, 110) +
    text(100, 142, 24, 'AHEAD', C.black, 76), C.orange);
  art['slow-moving-vehicle'] = svg('<polygon points="100,15 190,172 10,172" fill="' + C.red + '" stroke="' + C.red + '" stroke-width="10" stroke-linejoin="round"/>' +
    '<polygon points="100,48 162,156 38,156" fill="' + C.orange + '"/>');

  // ===== Guide / services / recreation =====
  art['guide-green'] = svg('<rect x="4" y="38" width="192" height="124" rx="10" fill="' + C.green + '" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<rect x="10" y="44" width="180" height="112" rx="7" fill="none" stroke="#FFFFFF" stroke-width="4"/>' +
    text(24, 90, 24, 'Richmond', C.white, 112, 'start') + text(176, 90, 24, '25', C.white, 0, 'end') +
    text(24, 134, 24, 'Norfolk', C.white, 112, 'start') + text(176, 134, 24, '98', C.white, 0, 'end'));
  art['services-blue'] = svg('<rect x="14" y="24" width="172" height="152" rx="10" fill="' + C.blue + '" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<rect x="20" y="30" width="160" height="140" rx="7" fill="none" stroke="#FFFFFF" stroke-width="4"/>' +
    text(100, 72, 34, 'GAS', C.white) + text(100, 116, 34, 'FOOD', C.white) + text(100, 158, 34, 'LODGING', C.white, 140));
  art['recreation-brown'] = svg('<rect x="8" y="34" width="184" height="132" rx="10" fill="' + C.brown + '" stroke="' + C.edge + '" stroke-width="1.5"/>' +
    '<rect x="14" y="40" width="172" height="120" rx="7" fill="none" stroke="#FFFFFF" stroke-width="4"/>' +
    text(100, 82, 30, 'Historic', C.white) + text(100, 116, 30, 'Area', C.white) +
    arrow('M70,140 H122', 116, 140, 122, 140, 9, 20, 13, '#FFFFFF'));

  // ===== Blank shapes =====
  art['shape-diamond'] = diamond('');
  art['shape-octagon'] = svg(octagon(100, 100, 96));
  art['shape-triangle'] = svg(yieldShape());
  art['shape-pentagon'] = svg(pentagonBg(C.yellow));
  art['shape-vertical-rectangle'] = whiteVertical('');

  // ===== Traffic signals =====
  art['signal-yellow'] = housing([OFF, lamp(LAMP.yellow), OFF]);
  art['signal-flashing-red'] = housing([flashing(LAMP.red), OFF, OFF]);
  art['signal-flashing-yellow'] = housing([OFF, flashing(LAMP.yellow), OFF]);
  art['signal-red-arrow'] = housing([arrowLamp(LAMP.red, 90), OFF, OFF]);
  art['signal-flashing-yellow-arrow'] = housing([OFF, arrowLamp(LAMP.yellow, 270, true), OFF]);
  art['signal-green-arrow'] = housing([OFF, OFF, arrowLamp(LAMP.green, 270)]);

  // ===== Lane use signals =====
  art['lane-red-x'] = laneSignal(xMark(LAMP.red));
  art['lane-yellow-x'] = laneSignal(xMark(LAMP.yellow));
  art['lane-green-arrow'] = laneSignal(arrow('M100,40 V120', 100, 110, 100, 120, 24, 44, 34, LAMP.green));
  art['lane-yellow-diagonal'] = laneSignal(arrow('M142,58 L90,110', 98, 102, 90, 110, 22, 42, 32, LAMP.yellow));
  art['lane-left-turn'] = laneSignal(arrow('M122,156 V104 Q122,76 94,76 H86', 94, 76, 86, 76, 18, 32, 23, '#FFFFFF'));

  // ===== Pavement markings =====
  art['mk-broken-yellow'] = road(30, 170, vline(100, PAINT_Y, '22 18') + car(135, 140, BLUE_CAR) + car(65, 60, RED_CAR, true));
  art['mk-double-yellow'] = road(30, 170, vline(96, PAINT_Y) + vline(104, PAINT_Y) + car(135, 140, BLUE_CAR) + car(65, 60, RED_CAR, true));
  art['mk-solid-broken-pass'] = road(30, 170, vline(95, PAINT_Y) + vline(105, PAINT_Y, '22 18') + car(135, 140, BLUE_CAR) + car(135, 50, '#7D7D7D'));
  art['mk-solid-broken-nopass'] = road(30, 170, vline(95, PAINT_Y, '22 18') + vline(105, PAINT_Y) + car(135, 140, BLUE_CAR) + car(135, 50, '#7D7D7D'));
  art['mk-center-turn-lane'] = road(10, 190, vline(68, PAINT_Y) + vline(75, PAINT_Y, '20 16') + vline(125, PAINT_Y, '20 16') + vline(132, PAINT_Y) +
    arrow('M92,22 V44 Q92,56 104,56', 98, 56, 104, 56, 6, 14, 9, '#FFFFFF') +
    arrow('M108,178 V156 Q108,144 96,144', 102, 144, 96, 144, 6, 14, 9, '#FFFFFF') +
    car(158, 150, BLUE_CAR) + car(42, 50, RED_CAR, true));
  art['mk-hov-diamond'] = road(30, 170, vline(100, '#FFFFFF', '22 18', 4) +
    '<polygon points="65,62 79,100 65,138 51,100" fill="none" stroke="#FFFFFF" stroke-width="5"/>' + car(135, 140, BLUE_CAR));
  var yieldTri = '';
  for (var tx = 108; tx <= 160; tx += 17) yieldTri += '<polygon points="' + tx + ',94 ' + (tx + 12) + ',94 ' + (tx + 6) + ',110" fill="#FFFFFF"/>';
  art['mk-yield-line'] = road(20, 180, vline(98, PAINT_Y) + vline(103, PAINT_Y) + yieldTri + car(140, 158, BLUE_CAR) + car(60, 50, RED_CAR, true));

  VA.signArt = art;

  // ================= Questions =================
  var REF = {
    signals5: 'Manual p. 5 – Traffic Signals',
    signals6: 'Manual p. 6 – Traffic Signals',
    lane: 'Manual p. 6 – Lane Use Signals',
    colors: 'Manual p. 6 – Sign Colors',
    shapes6: 'Manual p. 6 – Sign Shapes',
    shapes7: 'Manual p. 7 – Sign Shapes',
    reg: 'Manual p. 7 – Regulatory Signs',
    warn8: 'Manual p. 8 – Warning Signs',
    warn9: 'Manual p. 9 – Warning Signs',
    warn10: 'Manual p. 10 – Warning Signs',
    work10: 'Manual p. 10 – Work Zones',
    work11: 'Manual p. 11 – Work Zones',
    smv: 'Manual p. 11 – Slow Moving Vehicles',
    mark11: 'Manual p. 11 – Pavement Markings',
    mark12: 'Manual p. 12 – Pavement Markings',
    mark13: 'Manual p. 13 – Pavement Markings'
  };
  var T = {
    reg: 'Regulatory Signs',
    warn: 'Warning Signs',
    shape: 'Sign Shapes & Colors',
    rr: 'Railroad Crossings',
    work: 'Work Zone Signs',
    sig: 'Traffic Signals',
    lane: 'Lane Use Signals',
    mark: 'Pavement Markings'
  };
  var MEANS = 'This road sign means:';

  var list = [];
  function Q(art, topic, q, options, answer, explain, ref, fixedOrder) {
    var item = {
      id: 's-' + ('00' + (list.length + 1)).slice(-3),
      topic: topic,
      art: art,
      q: q,
      options: options,
      answer: answer,
      explain: explain,
      ref: ref
    };
    if (fixedOrder) item.fixedOrder = true;
    list.push(item);
  }

  // ----- Shapes & colors -----
  Q('shape-diamond', T.shape, MEANS,
    ['Warning of a hazard.', 'Yield right-of-way.', 'Railroad crossing.', 'Speed limit.'], 0,
    'Diamond-shaped signs warn you of special conditions or hazards ahead. Slow down, drive with caution and be ready to stop.', REF.shapes7);
  Q('shape-octagon', T.shape, 'A sign with this eight-sided shape always means:',
    ['Yield.', 'Stop.', 'Do not enter.', 'Wrong way.'], 1,
    'The octagon always means stop. You must come to a complete stop at the sign, stop line, crosswalk or curb.', REF.shapes6);
  Q('shape-triangle', T.shape, 'When you come to a sign with this shape, you must:',
    ['Come to a complete stop every time.', 'Speed up and merge ahead of traffic.', 'Slow down and be prepared to stop.', 'Stop only if a train is coming.'], 2,
    'The triangle means yield: slow down as you come to the intersection, be prepared to stop, and let vehicles, pedestrians or bicyclists pass.', REF.shapes6);
  Q('shape-pentagon', T.shape, 'A sign with this five-sided shape marks:',
    ['A railroad crossing ahead.', 'The start of a no passing zone.', 'A hospital or clinic entrance.', 'A school zone or crossing.'], 3,
    'The five-sided pentagon marks school zones and warns you about school crossings.', REF.shapes7);
  Q('shape-vertical-rectangle', T.shape, 'Vertical rectangular signs like this one generally:',
    ['Give instructions or tell you the law.', 'Warn you of hazards and road conditions.', 'Mark school zones and school crossings.', 'Show destinations and motorist services.'], 0,
    'Vertical rectangular signs generally give instructions or tell you the law; horizontal ones may give directions or information.', REF.shapes7);
  Q('road-work-ahead', T.shape, 'The orange color of this sign tells you that:',
    ['Motorist services are available ahead.', 'A construction work zone is ahead.', 'A school zone is ahead; watch for children.', 'A historic site is located nearby.'], 1,
    'Orange and black signs advise and warn in construction areas. Orange marks a work zone and means slow down and be alert.', REF.colors);
  Q('pedestrian-crossing', T.shape, 'This strong yellow-green color is used on warning signs for:',
    ['Construction and maintenance work.', 'Highway incidents and crashes.', 'School zones, pedestrians and bicyclists.', 'Motorist services such as gas and food.'], 2,
    'A specialized class of warning signs uses a strong yellow/green color with black to advise of school zone, pedestrian and/or bicyclist activities.', REF.colors);
  Q('guide-green', T.shape, 'A green sign like this one provides:',
    ['Warnings about road hazards.', 'Information about motorist services.', 'Historical or cultural information.', 'Destination information.'], 3,
    'Green and white signs provide helpful information; the green sign is used for destination types of information.', REF.colors);
  Q('services-blue', T.shape, 'Blue signs like this one tell you about:',
    ['Motorist services.', 'Destinations and distances.', 'Historical or cultural interests.', 'Construction areas.'], 0,
    'The blue sign is used to inform drivers about motorist services.', REF.colors);
  Q('recreation-brown', T.shape, 'Brown signs like this one point out:',
    ['Motorist services such as gas and food.', 'Historical or cultural interests.', 'Detours around construction areas.', 'School zones and school crossings.'], 1,
    'The brown sign is used to advise of historical or cultural interests that might exist in the area.', REF.colors);

  // ----- Regulatory -----
  Q('stop', T.reg, MEANS,
    ['Stop ahead; prepare to stop.', 'Yield to traffic on the right.', 'Come to a complete stop.', 'Slow down and stop only if needed.'], 2,
    'This eight-sided sign always means stop. Come to a complete stop at the sign, stop line, crosswalk or curb and wait for the way to clear.', REF.shapes6);
  Q('stop', T.reg, 'If there is no stop line or crosswalk at this sign, where must you stop?',
    ['At the curb or edge of the intersection.', 'Only where cross traffic is coming your way.', 'In the middle of the intersection.', 'Twenty feet past the sign, at the corner.'], 0,
    'At a stop sign you must come to a complete stop at the sign, stop line, pedestrian crosswalk or curb.', REF.shapes6);
  Q('all-way-stop', T.reg, 'At this intersection, if you arrive at the same time as a vehicle on your right:',
    ['The vehicle going straight goes first.', 'You go first because you are on the left.', 'The larger vehicle goes first.', 'You must yield to the driver on your right.'], 3,
    'At an "All Way" or "4 Way" stop, if you arrive at the same time as other vehicles, the driver on the left must yield to the driver on the right.', REF.shapes6);
  Q('all-way-stop', T.reg, 'This sign combination means:',
    ['Only traffic on the smaller side road must stop.', 'All vehicles entering the intersection must stop.', 'Drivers turning right may go without stopping.', 'Only vehicles going straight must come to a stop.'], 1,
    'Where a sign beneath the stop sign reads "All Way" or "4 Way," all vehicles on all roads leading into the intersection must stop.', REF.shapes6);
  Q('yield', T.reg, MEANS,
    ['Yield right-of-way.', 'Stop ahead.', 'Do not enter.', 'Merging traffic.'], 0,
    'The triangle sign means yield: slow down, be prepared to stop, and let vehicles, pedestrians or bicyclists safely pass before you proceed.', REF.shapes6);
  Q('yield', T.reg, 'When you approach this sign, you should:',
    ['Always stop, even if no one is coming.', 'Slow down and let traffic pass before you go.', 'Speed up to merge in front of oncoming traffic.', 'Stop only for pedestrians in the crosswalk.'], 1,
    'At a yield sign you must slow down, be prepared to stop, and let any vehicles, pedestrians or bicyclists safely pass before you proceed.', REF.shapes6);
  Q('do-not-enter', T.reg, MEANS,
    ['The road is closed for construction work.', 'Entry is allowed for buses and taxis only.', 'You cannot drive in that direction.', 'No stopping or standing here.'], 2,
    'Do Not Enter signs mean you cannot drive in that direction; going past them puts you in the wrong direction facing oncoming traffic.', REF.reg);
  Q('wrong-way', T.reg, 'If you pass this sign, you should:',
    ['Speed up to reach the next exit.', 'Stop in your lane and wait for help.', 'Continue carefully with your hazard lights on.', 'Slow down, pull over and cautiously turn around.'], 3,
    'If you drive past Do Not Enter/Wrong Way signs you are going the wrong direction. Immediately slow down, pull over, and cautiously turn around.', REF.reg);
  Q('wrong-way', T.reg, MEANS,
    ['You are driving against the flow of traffic.', 'The road ahead is closed to all traffic.', 'You must make a U-turn at the next exit.', 'Traffic is being detoured to another road.'], 0,
    'Wrong Way signs mean you are going in the wrong direction and could get into a head-on crash with vehicles headed your way.', REF.reg);
  Q('speed-limit', T.reg, MEANS,
    ['The minimum speed required on this road.', 'The maximum legal speed in good weather.', 'The recommended speed for the next curve.', 'The speed limit for trucks and buses only.'], 1,
    'Speed limit signs tell you the maximum legal speed on the road where the sign is posted when weather conditions are good.', REF.reg);
  Q('speed-limit', T.reg, 'During rain, snow or ice on a road with this sign, you:',
    ['May drive up to 60 mph when passing.', 'Cannot be ticketed at 55 mph or below.', 'Can be ticketed even at or below 55 mph.', 'Must drive exactly 55 mph to keep up with traffic.'], 2,
    'During rain, snow and ice, you may receive a ticket for driving too fast for conditions even if you are at or below the posted limit.', REF.reg);
  Q('no-right-turn', T.reg, MEANS,
    ['Right turn only.', 'Right lane ends.', 'No left turn.', 'No right turn.'], 3,
    'A red circle with a slash means NO; the symbol inside shows what is prohibited. Right turns are illegal here.', REF.reg);
  Q('no-left-turn', T.reg, MEANS,
    ['Left turns are not allowed.', 'Left lane ends.', 'Left turn only.', 'Keep left of the divider.'], 0,
    'The red circle and slash over a left-turn arrow means left turns are against the law here.', REF.reg);
  Q('no-left-turn', T.reg, 'In Virginia, where this sign is posted, a U-turn is:',
    ['Legal if you yield to oncoming traffic first.', 'Illegal, since it counts as two left turns.', 'Legal for passenger cars but not for trucks.', 'Legal only when the traffic signal is green.'], 1,
    'In Virginia, U-turns are considered two left turns and are illegal if a No Left Turn sign is posted.', REF.reg);
  Q('no-u-turn', T.reg, MEANS,
    ['No left turn.', 'U-turn permitted.', 'No U-turn.', 'Sharp left turn ahead.'], 2,
    'The red circle and slash over a U-turn arrow means U-turns are illegal where this sign is posted.', REF.reg);
  Q('no-turn-on-red', T.reg, MEANS,
    ['You may turn during the red light.', 'Pass only in the right lane.', 'One way street.', 'Do not turn during the red light.'], 3,
    'No Turn on Red means you may not turn on the red light; wait for the signal to turn green.', REF.reg);
  Q('do-not-pass', T.reg, MEANS,
    ['Passing is not allowed, even when the way is clear.', 'You may pass only on the right side of the road.', 'Do not pass trucks or buses; cars may be passed.', 'Passing is allowed with caution when the way is clear.'], 0,
    'Do Not Pass marks the beginning of a no passing zone; you may not pass cars ahead of you in your lane, even if the way is clear.', REF.reg);
  Q('left-turn-yield-green', T.reg, MEANS,
    ['Left turns have the right-of-way while the light is green.', 'Left turns on green must yield to oncoming traffic.', 'Left turns are allowed only when a green arrow shows.', 'No left turns may be made while the light is green.'], 1,
    'This sign is used with a traffic signal: traffic turning left on a green light does not have the right-of-way and must yield to oncoming traffic.', REF.reg);
  Q('keep-right', T.reg, MEANS,
    ['The right lane ends just ahead.', 'The road curves to the right ahead.', 'Keep to the right of the island or median.', 'Divided highway ends; keep to the right.'], 2,
    'Keep Right means a traffic island, median or barrier is ahead; keep to the side indicated by the arrow.', REF.reg);
  Q('one-way', T.reg, MEANS,
    ['No U-turn.', 'Curve.', 'Turn right or left.', 'Traffic flows only in the direction of the arrow.'], 3,
    'One Way signs mean traffic flows only in the direction of the arrow.', REF.reg);
  Q('one-way-vertical', T.reg, MEANS,
    ['Traffic flows only in the direction of the arrow.', 'Left turns only are allowed from this lane.', 'All traffic must detour to the left at the next street.', 'Two-way traffic ahead; keep to the left.'], 0,
    'One Way signs mean traffic flows only in the direction of the arrow.', REF.reg);
  Q('lane-use-left-only', T.reg, 'If you are in the lane marked by this sign, you:',
    ['May turn left or go straight.', 'Must turn left.', 'May not turn left.', 'Must yield to left-turning traffic.'], 1,
    'Lane use control signs are used where turns are required; traffic in the lane must turn in the direction of the arrow.', REF.reg);
  Q('hov-lane', T.reg, MEANS,
    ['The left lane is for passing only and must be cleared after passing.', 'The left lane is closed for road work from 6 AM to 9 AM on weekdays.', 'The left lane is for vehicles carrying 2 or more people at posted times.', 'The left lane is reserved for trucks and buses during rush hour.'], 2,
    'High Occupancy Vehicle signs indicate lanes reserved for buses and vehicles with a driver and one or more passengers as specified on the sign.', REF.reg);
  Q('disabled-parking', T.reg, MEANS,
    ['Parking is reserved for hospital visitors only.', 'Parking is reserved for emergency vehicles only.', 'Short-term parking for loading and unloading.', 'Parking for people with disabled parking permits.'], 3,
    'Parking spaces marked with these signs are reserved for people with disabled parking permits.', REF.reg);

  // ----- Warning -----
  Q('no-passing-zone', T.warn, MEANS,
    ['Beginning of a no passing zone.', 'End of a no passing zone.', 'Passing is allowed on the right.', 'Pass only when the way is clear.'], 0,
    'The pennant-shaped No Passing Zone sign marks the beginning of a no passing zone; you may not pass even if the way is clear.', REF.warn8);
  Q('no-passing-zone', T.warn, 'When you see this sign, you may pass the car ahead of you in your lane:',
    ['When the way ahead is clear.', 'Only on the right shoulder.', 'Only if it is going under the speed limit.', 'Not at all; this is a no passing zone.'], 3,
    'This sign marks the beginning of a no passing zone. You may not pass cars ahead of you in your lane, even if the way is clear.', REF.warn8);
  Q('advisory-exit-speed', T.warn, MEANS,
    ['Exit number 25 is ahead.', 'The maximum safe speed for the exit is 25 mph.', 'The minimum speed on the exit ramp is 25 mph.', 'The highway speed limit after the exit is 25 mph.'], 1,
    'The advisory speed sign indicates the maximum safe speed for a highway exit.', REF.warn8);
  Q('low-clearance', T.warn, MEANS,
    ['The road narrows to 13 feet 6 inches ahead.', 'The maximum vehicle length is 13 feet 6 inches.', 'The overpass ahead has 13 feet 6 inches of clearance.', 'Trucks must stay at least 13 feet 6 inches apart.'], 2,
    'The low clearance sign warns that the overpass ahead has a low clearance; do not proceed if your vehicle is taller than the height shown.', REF.warn8);
  Q('low-clearance', T.warn, 'If your vehicle is taller than the height shown on this sign, you should:',
    ['Not proceed under the overpass.', 'Drive slowly under the center of the overpass.', 'Let some air out of your tires.', 'Proceed only if no traffic is coming.'], 0,
    'Do not proceed if your vehicle is taller than the height shown on the low clearance sign.', REF.warn8);
  Q('reduced-speed-ahead', T.warn, MEANS,
    ['The minimum speed on the road ahead is 45 mph.', 'Only trucks must slow to 45 mph on the road ahead.', 'Keep at least 45 feet behind the vehicle ahead.', 'The speed limit is changing ahead; prepare to slow.'], 3,
    'Reduced Speed Limit Ahead means prepare to reduce your speed; the speed limit is changing ahead.', REF.warn8);
  Q('hill', T.warn, MEANS,
    ['Steep grade ahead.', 'Truck crossing ahead.', 'Runaway truck ramp.', 'Loose gravel ahead.'], 0,
    'The Hill sign warns that a steep grade is ahead. Check your brakes.', REF.warn8);
  Q('hill', T.warn, 'When you see this sign, you should:',
    ['Speed up to make it up the grade.', 'Check your brakes.', 'Shift into neutral.', 'Turn on your hazard lights.'], 1,
    'The Hill sign warns of a steep grade ahead; the manual tells you to check your brakes.', REF.warn8);
  Q('deer-crossing', T.warn, MEANS,
    ['A wildlife park entrance is ahead.', 'Hunting is allowed in the nearby woods.', 'Deer cross the roadway in this area.', 'Cattle or livestock may cross ahead.'], 2,
    'Deer cross the roadway in this area. Slow down, be alert and be ready to stop.', REF.warn8);
  Q('stop-ahead', T.warn, MEANS,
    ['Stop here, at this sign.', 'The road is closed ahead.', 'A traffic signal is ahead.', 'A stop sign is ahead.'], 3,
    'Stop Ahead means a stop sign is ahead. Slow down and be ready to stop.', REF.warn8);
  Q('yield-ahead', T.warn, MEANS,
    ['Yield sign ahead.', 'Yield to traffic on the right.', 'Lane ends ahead.', 'Do not enter ahead.'], 0,
    'Yield Ahead means a yield sign is ahead. Slow down and be ready to stop.', REF.warn8);
  Q('horse-buggy', T.warn, 'When you see this sign, you should:',
    ['Sound your horn to warn the buggy driver.', 'Slow down and do not use your horn.', 'Never pass a horse-drawn vehicle.', 'Flash your headlights before passing.'], 1,
    'Horse-drawn buggies regularly travel in this area. Slow down and don\'t use the horn.', REF.warn8);
  Q('horse-buggy', T.warn, 'When passing a horse-drawn buggy where this sign is posted, state law requires at least:',
    ['One foot of clearance.', 'Two feet of clearance.', 'Three feet of clearance.', 'Ten feet of clearance.'], 2,
    'State law requires motorists to pass horse-drawn buggies with at least three feet of clearance when the way is clear.', REF.warn8);
  Q('signal-ahead', T.warn, MEANS,
    ['Railroad crossing ahead.', 'Stop sign ahead.', 'Pedestrian signal ahead.', 'Traffic signals ahead.'], 3,
    'Signal Ahead means traffic signals are ahead. Slow down and be ready to stop.', REF.warn8);
  Q('merge', T.warn, MEANS,
    ['Two lanes are about to become one.', 'The right lane ends; merge left.', 'A divided highway begins ahead.', 'A side road enters from the right.'], 0,
    'The Merge sign means two lanes of traffic moving in the same direction are about to become one.', REF.warn8);
  Q('merge', T.warn, 'Where this sign is posted, who is responsible for merging safely?',
    ['Only drivers in the merging lane.', 'Drivers in both lanes.', 'Only drivers on the main road.', 'The driver of the larger vehicle.'], 1,
    'At a merge, drivers in both lanes are responsible for merging safely.', REF.warn8);
  Q('lane-reduction', T.warn, MEANS,
    ['Right lane ends soon, merge left.', 'Soft shoulders.', 'Low place in the road.', 'Lane ends soon, merge right.'], 0,
    'Lane Reduction means the right lane ends soon. Drivers in the right lane must merge left when space opens up.', REF.warn8);
  Q('lane-reduction', T.warn, 'You are in the left lane when you see this sign. You should:',
    ['Speed up so no one can merge in front of you.', 'Move into the right lane.', 'Allow other vehicles to merge smoothly.', 'Stop until the right lane is clear.'], 2,
    'Drivers in the left lane should allow other vehicles to merge smoothly when the right lane ends.', REF.warn8);
  Q('divided-highway-begins', T.warn, MEANS,
    ['Divided highway ends; two-way traffic.', 'Road curves left ahead.', 'Two lanes merge into one.', 'Divided highway begins; keep right.'], 3,
    'Divided Highway Begins: the highway ahead is split into two one-way roadways by a median or divider. Keep right.', REF.warn8);
  Q('divided-highway-ends', T.warn, MEANS,
    ['Divided highway begins; keep to the right.', 'Divided highway ends; traffic goes both ways.', 'Merging traffic enters from the left ahead.', 'Winding road with several curves ahead.'], 1,
    'Divided Highway Ends: the highway ahead no longer has a median or divider and traffic goes in both directions. Keep right.', REF.warn8);
  Q('slippery-when-wet', T.warn, MEANS,
    ['Winding road ahead.', 'Loose gravel ahead.', 'Slippery when wet.', 'Rough road ahead.'], 2,
    'Slippery When Wet warns that the pavement may be slick when wet; reduce your speed.', REF.warn8);
  Q('slippery-when-wet', T.warn, 'On wet pavement where this sign is posted, you should:',
    ['Brake hard if the car starts to slide.', 'Change direction quickly to avoid puddles.', 'Follow closely to see the road ahead.', 'Reduce speed and increase following distance.'], 3,
    'When pavement is wet, reduce your speed, do not brake hard or change direction suddenly, and increase the distance to the car ahead.', REF.warn8);
  Q('tractor', T.warn, MEANS,
    ['Farm equipment travels in this area.', 'A farm market or produce stand is ahead.', 'Construction equipment is working ahead.', 'Trucks enter the road from a quarry ahead.'], 0,
    'Tractors and farm equipment regularly travel in this area. Be ready to slow down or stop, and only pass when the way is clear.', REF.warn8);
  Q('pedestrian-crossing', T.warn, MEANS,
    ['School crossing.', 'Pedestrian crossing.', 'No pedestrians allowed.', 'Hiking trail ahead.'], 1,
    'Pedestrian Crossing: watch for people walking, riding bicycles or other devices entering a crosswalk or crossing your path. Slow down and be prepared to stop.', REF.warn8);
  Q('bicycle-crossing', T.warn, MEANS,
    ['Bicycles are not allowed on this road.', 'A bicycle parking area is ahead.', 'Bicycles often cross or ride beside traffic.', 'A bicycle repair shop is ahead on the right.'], 2,
    'Bicycle Crossing/Bike Path: bicycles regularly cross or ride beside traffic in this area. Drive with caution.', REF.warn8);
  Q('school-zone', T.warn, MEANS,
    ['A pedestrian crosswalk is ahead.', 'A public playground is ahead.', 'A park entrance is just ahead.', 'A school zone or school crossing.'], 3,
    'School Zone/School Crossing: watch out for children crossing the street or playing, and be ready to slow down or stop.', REF.warn8);
  Q('school-zone', T.warn, 'In the area marked by this sign, you should:',
    ['Obey the speed limit and crossing guards.', 'Sound your horn to warn the children.', 'Pass slower vehicles quickly to clear the zone.', 'Stop only if a school bus is present.'], 0,
    'At school zones, be ready to slow down or stop, and obey the speed limit and signals from crossing guards.', REF.warn8);
  Q('crossroad', T.warn, MEANS,
    ['Church.', 'First aid station.', 'Intersection.', 'Railroad crossing.'], 2,
    'This crossroad sign warns that an intersection is ahead. Be alert for vehicles entering the road you are traveling on.', REF.warn9);
  Q('crossroad', T.warn, 'When you see this sign, you should:',
    ['Stop before the intersection.', 'Speed up to get through the intersection.', 'Yield to all traffic from the left.', 'Watch for vehicles entering your road.'], 3,
    'Intersection signs warn that an intersection is ahead; be alert for vehicles entering the road on which you are traveling.', REF.warn9);
  Q('side-road', T.warn, MEANS,
    ['A side road enters from the right.', 'A T intersection is just ahead.', 'The right lane ends just ahead.', 'Right turns only from this lane.'], 0,
    'This intersection sign warns that a side road joins ahead. Be alert for vehicles entering the road you are on.', REF.warn9);
  Q('y-intersection', T.warn, MEANS,
    ['A divided highway begins.', 'Bear either right or left ahead.', 'Two lanes merge into one ahead.', 'The lane ends just ahead.'], 1,
    'The Y Intersection sign means you must bear either right or left ahead.', REF.warn9);
  Q('t-intersection', T.warn, MEANS,
    ['A crossroad is just ahead.', 'A side road enters from the right.', 'The road ends; turn right or left.', 'The road narrows to one lane ahead.'], 2,
    'T Intersection: the road you are on ends ahead at a stop sign; you must turn right or left after yielding to oncoming traffic and pedestrians.', REF.warn9);
  Q('t-intersection', T.warn, 'At the end of the road this sign warns about, you must turn right or left after:',
    ['Sounding your horn at the corner.', 'Waiting for a green arrow to appear.', 'Signaling for at least 500 feet ahead.', 'Yielding to traffic and pedestrians.'], 3,
    'At a T intersection you must turn right or left after yielding to oncoming traffic and pedestrians.', REF.warn9);
  Q('roundabout', T.warn, MEANS,
    ['A circular intersection is ahead.', 'A U-turn area is just ahead.', 'A detour begins just ahead.', 'Merging traffic from the left ahead.'], 0,
    'Roundabout signs indicate a circular intersection with an island in the center is ahead.', REF.warn9);
  Q('roundabout', T.warn, 'When entering the intersection this sign warns about, you must:',
    ['Expect traffic already in the circle to yield to you.', 'Yield to traffic in the circle; travel counterclockwise.', 'Yield to traffic in the circle; travel clockwise.', 'Stop and wait for a green light before entering.'], 1,
    'Entering traffic must yield the right-of-way to traffic already in the circle and travel in a counterclockwise direction.', REF.warn9);
  Q('side-road-curve', T.warn, MEANS,
    ['The road splits ahead; bear right or left at the Y.', 'Merge left; the right lane ends at the curve ahead.', 'Right curve with a side road joining from the left.', 'A sharp right turn ahead with no side roads.'], 2,
    'Right Curve – Side Road: the road curves right and a side road joins from the left within the curve. Watch for entering vehicles.', REF.warn9);
  Q('sharp-right-turn', T.warn, MEANS,
    ['Right turn only.', 'Side road on the right.', 'Gentle curve to the right.', 'Sharp right turn ahead.'], 3,
    'Sharp Right Turn: slow down and be prepared for a sharp right turn in the road ahead.', REF.warn9);
  Q('sharp-right-left-turns', T.warn, MEANS,
    ['The road turns sharply right, then left.', 'The road curves gently right, then left.', 'Winding road ahead.', 'The lane shifts left.'], 0,
    'Sharp Right and Left Turns: slow down and be prepared for the road ahead to turn sharply right, then left.', REF.warn9);
  Q('right-left-curves', T.warn, MEANS,
    ['The road turns sharply right, then left.', 'The road curves right, then left.', 'Winding road ahead.', 'Slippery when wet.'], 1,
    'Right and Left Curves: the road ahead curves right, then left. Slow down.', REF.warn9);
  Q('right-curve-speed', T.warn, MEANS,
    ['The speed limit after the curve rises to 35 mph.', 'The minimum speed allowed in the curve is 35 mph.', 'The road curves right; 35 mph is the safe speed.', 'The exit ramp speed limit is 35 mph.'], 2,
    'Right Curve with Safe Speed Indicator: the road ahead curves right; slow down to the safe speed indicated.', REF.warn9);
  Q('winding-road', T.warn, MEANS,
    ['Slippery road when wet.', 'Right and left curves.', 'Detour route ahead.', 'Winding road ahead.'], 3,
    'Winding Road: the road ahead winds with a series of turns or curves. Slow down for better control.', REF.warn9);
  Q('low-ground-railroad', T.rr, 'This road sign warns that:',
    ['Low vehicles may drag on the raised tracks.', 'Trains cross the road on a bridge overhead.', 'Railroad tracks run alongside the road ahead.', 'A train station and parking lot are ahead.'], 0,
    'Low Ground Railroad Crossing: a steep slope where the tracks cross the road may cause low vehicles to get caught or drag on the tracks.', REF.warn9);
  Q('railroad-advance', T.rr, MEANS,
    ['Warning of a hazard.', 'Yield right-of-way.', 'Railroad crossing ahead.', 'Speed limit.'], 2,
    'This round advance warning sign is placed before a railroad crossing. Look, listen, slow down and be prepared to stop.', REF.warn9);
  Q('railroad-advance', T.rr, 'When you see this sign, you should:',
    ['Speed up to cross before a train comes.', 'Stop immediately, even far from the tracks.', 'Sound your horn and continue at the same speed.', 'Look, listen, slow down and be ready to stop.'], 3,
    'Railroad advance warning signs warn you to look, listen, slow down and be prepared to stop for trains or any vehicles using the rails.', REF.warn9);
  Q('railroad-crossbuck', T.rr, MEANS,
    ['Railroad crossing.', 'Do not enter.', 'Intersection ahead.', 'No parking.'], 0,
    'The crossbuck is a warning of a railroad crossing. Look, listen, slow down and be prepared to stop.', REF.warn9);
  Q('railroad-crossbuck', T.rr, 'At a crossing with this sign and more than one track:',
    ['Trains only use the track nearest to you.', 'Trains may come either way on either track.', 'Trains always approach from the left side.', 'Only one train can be near the crossing at a time.'], 1,
    'If there is more than one track, trains may be approaching from either direction on either track.', REF.warn9);
  Q('crossbuck-lights', T.rr, 'At a railroad crossing with these flashing lights, you must:',
    ['Slow down and cross if you do not see a train coming.', 'Stop only if you can hear a train horn nearby.', 'Stop and wait until the lights stop and tracks are clear.', 'Stop, then go as soon as the first train has passed.'], 2,
    'Always stop when the light begins to flash. Do not proceed until trains have passed, the tracks are clear, and the lights are no longer flashing.', REF.warn9);
  Q('crossbuck-gate', T.rr, 'At this crossing, if the lights are flashing and the gate is down, you must:',
    ['Drive around the gate if no train is in sight.', 'Proceed slowly as soon as the train has passed.', 'Back up and look for another place to cross.', 'Stay stopped until the gate rises and lights stop.'], 3,
    'Remain stopped until the gates are raised and the lights stop flashing. Do not attempt to drive around the lowered gate.', REF.warn9);
  Q('rough-road', T.warn, 'Signs like this warn of road surface conditions that are especially difficult for:',
    ['Motorcyclists.', 'Trucks.', 'Buses.', 'Farm vehicles.'], 0,
    'Rough road, bump or uneven lane signs warn of surface conditions that create difficult conditions for motorists, especially motorcyclists.', REF.warn10);
  Q('bump', T.warn, 'This road sign warns of:',
    ['A speed table where you must stop.', 'A change in the road surface ahead.', 'A school zone ahead.', 'A low overpass ahead.'], 1,
    'Bump signs are used when road conditions such as loose gravel or road construction affect the roadway surface.', REF.warn10);

  // ----- Work zones -----
  Q('road-work-ahead', T.work, 'If you are convicted of speeding in a highway work zone marked by signs like this, you may be fined up to:',
    ['$250.', '$100.', '$500.', '$1,000.'], 2,
    'If you are convicted of exceeding the speed limit in a highway work zone, you may be fined up to $500.', REF.work10);
  Q('road-work-ahead', T.work, 'If you are convicted of using a handheld communications device in a work zone like this, you will be fined:',
    ['$100.', '$500.', '$50.', '$250.'], 3,
    'If you are convicted of using a handheld communications device in a highway work zone, you will be fined $250.', REF.work10);
  Q('detour', T.work, MEANS,
    ['The route changes ahead; follow the detour.', 'An exit-only lane is ahead on the right.', 'Trucks must follow the truck route to the right.', 'A rest area is ahead to the right.'], 0,
    'Road Construction Ahead – Detour signs indicate a change in the traffic pattern or route ahead. Slow down.', REF.work10);
  Q('flagger-ahead', T.work, MEANS,
    ['A pedestrian crossing is ahead.', 'A flagger is ahead; be ready to stop.', 'A parade route is just ahead.', 'A school crossing guard is ahead.'], 1,
    'Flaggers are highway workers who use STOP/SLOW paddles or red flags to stop or direct traffic through the work zone.', REF.work10);
  Q('slow-paddle', T.work, 'A flagger in a work zone holds this paddle toward you. You should:',
    ['Stop and wait for the flagger to wave you on.', 'Speed up to clear the work zone.', 'Slow down and proceed with caution as directed.', 'Change lanes immediately.'], 2,
    'Flaggers use STOP/SLOW paddles to stop or direct traffic through the work zone; the SLOW side directs you to proceed slowly.', REF.work10);
  Q('arrow-board', T.work, 'A large flashing arrow board like this in a work zone tells you:',
    ['The highway is closed; turn around and go back.', 'A police checkpoint is ahead; prepare to stop.', 'Exit to the right for gas, food and lodging.', 'Part of the road ahead is closed; change lanes.'], 3,
    'Flashing arrow boards direct drivers into different traffic lanes and inform them that part of the road ahead is closed.', REF.work10);
  Q('rumble-strips-ahead', T.work, 'When you come to the strips this sign warns about, you should:',
    ['Drive slowly over them.', 'Swerve around them.', 'Speed up to cross quickly.', 'Stop before crossing them.'], 0,
    'Rumble strips are placed across travel lanes before work zones and should be slowly driven over, not swerved around.', REF.work11);
  Q('slow-moving-vehicle', T.work, 'This emblem on the back of a vehicle means the vehicle travels at:',
    ['35 mph or less.', '25 mph or less.', '45 mph or less.', '15 mph or less.'], 1,
    'Slow moving vehicles traveling at 25 mph or less, such as farm equipment, horse-drawn vehicles or highway work vehicles, must display this sign.', REF.smv);
  Q('slow-moving-vehicle', T.work, 'When you see a vehicle displaying this sign, you should:',
    ['Pass immediately, even in a no passing zone.', 'Follow within one car length.', 'Be prepared to adjust your speed or position.', 'Sound your horn to warn the driver.'], 2,
    'Be prepared to adjust your speed or position when you see a vehicle with a slow moving vehicle sign.', REF.smv);

  // ----- Traffic signals -----
  Q('signal-yellow', T.sig, 'This steady yellow light means:',
    ['Speed up to beat the red light.', 'Stop even if you are already in the intersection.', 'Go; the light will stay yellow for a while.', 'The light will change; stop if you safely can.'], 3,
    'A yellow light warns that the light is about to change. If you have not entered the intersection, stop, or if unsafe to stop, go through cautiously.', REF.signals5);
  Q('signal-flashing-red', T.sig, 'At this traffic light, which is flashing red, you must:',
    ['Stop completely, then go when the way is clear.', 'Slow down and go ahead with caution; no need to stop.', 'Stop and wait for the light to turn green.', 'The signal is broken; go through without stopping.'], 0,
    'At a flashing red light, come to a complete stop and yield to oncoming vehicles and pedestrians. You may go when the way is clear.', REF.signals5);
  Q('signal-flashing-yellow', T.sig, 'This traffic light, which is flashing yellow, means:',
    ['Stop, then proceed.', 'Slow down and proceed with caution.', 'The light is about to turn green.', 'Pedestrians must stop.'], 1,
    'A flashing yellow light means slow down and proceed with caution; it is used where conditions are more hazardous than normal.', REF.signals5);
  Q('signal-red-arrow', T.sig, 'In Virginia, when this red arrow is displayed and no other signs are posted, you:',
    ['May turn right after a complete stop.', 'May turn right if no pedestrians are present.', 'May not turn in the direction of the arrow.', 'May turn right without stopping.'], 2,
    'A red arrow means you must stop and may not proceed in the direction of the arrow unless a "Right on Red Arrow After Stop" sign is posted.', REF.signals5);
  Q('signal-flashing-yellow-arrow', T.sig, 'At this flashing yellow left arrow, you:',
    ['Have a protected turn; oncoming traffic must stop.', 'Must stop and wait for a solid green arrow.', 'May not turn left until the arrow turns green.', 'May turn left after yielding to oncoming traffic.'], 3,
    'At a flashing yellow arrow you may turn in the direction of the arrow if the way is clear, yielding to oncoming vehicles and pedestrians.', REF.signals5);
  Q('signal-green-arrow', T.sig, 'This green arrow means:',
    ['You may go in the direction of the arrow if clear.', 'You must turn left, even if traffic is in the way.', 'Oncoming traffic also has a green light now.', 'You must come to a full stop before turning.'], 0,
    'At a green arrow, you may go in the direction of the arrow if the way is clear.', REF.signals6);

  // ----- Lane use signals -----
  Q('lane-red-x', T.lane, 'A lane use signal showing this over your lane means:',
    ['Slow down and use caution.', 'Never drive in this lane.', 'This lane is for turning only.', 'This lane ends in 500 feet.'], 1,
    'Never drive in a lane marked with a red X signal.', REF.lane);
  Q('lane-yellow-x', T.lane, 'A lane use signal showing this over your lane means:',
    ['You may stay in this lane until the next exit.', 'You may use this lane only to turn left.', 'Move out of this lane as soon as safely possible.', 'Stop in this lane and wait for it to clear.'], 2,
    'A yellow X or yellow diagonal downward arrow means you should move out of the lane as soon as safely possible.', REF.lane);
  Q('lane-green-arrow', T.lane, 'A lane use signal showing this over your lane means:',
    ['Move out of this lane right away.', 'This lane is closed to all traffic.', 'This lane is for left turns only.', 'You may drive in this lane.'], 3,
    'You are permitted to drive in a lane marked with a green arrow signal.', REF.lane);
  Q('lane-yellow-diagonal', T.lane, 'A lane use signal showing this over your lane means:',
    ['Move out of this lane when safely possible.', 'You may keep driving in this lane as usual.', 'Never drive in this lane at any time.', 'Exit to the left at the next ramp only.'], 0,
    'A yellow X or yellow diagonal downward arrow means you should move out of the lane as soon as safely possible.', REF.lane);
  Q('lane-left-turn', T.lane, 'A lane use signal showing this over your lane means:',
    ['You may drive straight through in this lane.', 'You may enter this lane only to turn left.', 'Never drive in this lane.', 'Left turns are prohibited.'], 1,
    'You may enter a lane marked with a one-way or two-way left-turn arrow only to turn in the direction of the arrow.', REF.lane);

  // ----- Pavement markings -----
  Q('mk-broken-yellow', T.mark, 'This broken yellow center line means:',
    ['Passing is not allowed in either direction here.', 'Traffic in both lanes flows in the same direction.', 'Passing on the left is allowed when the way is clear.', 'The center lane is reserved for left turns only.'], 2,
    'Broken yellow center lines mean passing on the left is allowed in either direction when the way ahead is clear.', REF.mark11);
  Q('mk-double-yellow', T.mark, 'These double solid yellow lines mean:',
    ['Passing is allowed with caution.', 'Traffic flows in one direction.', 'Passing is allowed for the right lane only.', 'Passing is not allowed in either direction.'], 3,
    'Double solid yellow lines separate traffic traveling in two directions; passing is not allowed in either direction.', REF.mark11);
  Q('mk-double-yellow', T.mark, 'You may cross these double solid yellow lines only to:',
    ['Turn left or pass a bicyclist or pedestrian safely.', 'Pass a slow-moving car when no one is coming toward you.', 'Pass any vehicle when the way ahead is clear.', 'Change lanes when traffic is heavy.'], 0,
    'You may not cross double solid yellow lines unless making a left turn or passing pedestrians, bicyclists, and riders of scooters or skateboards when safe.', REF.mark11);
  Q('mk-solid-broken-pass', T.mark, 'You are driving the blue car. These pavement markings mean:',
    ['You may never cross the center line.', 'You may pass when the way ahead is clear.', 'You may pass only bicycles.', 'The center lane is for left turns.'], 1,
    'Passing is allowed from the side of the broken line, but not from the side of the solid line. The broken line is on your side.', REF.mark11);
  Q('mk-solid-broken-nopass', T.mark, 'You are driving the blue car. These pavement markings mean:',
    ['You may pass when the way ahead is clear.', 'You may pass only within 150 feet of a turn.', 'You may not pass the vehicle ahead.', 'Traffic in both directions may pass.'], 2,
    'Passing is not allowed from the side of the solid line. On the solid line side you may cross only to pass pedestrians, bicyclists, or scooter and skateboard riders when safe.', REF.mark11);
  Q('mk-center-turn-lane', T.mark, 'A center lane marked like this may be used by drivers:',
    ['Traveling in either direction for passing.', 'Traveling in one direction only.', 'Only during rush hour.', 'Traveling in either direction for left turns.'], 3,
    'If both sides of the center lane are marked by a solid yellow line and a broken yellow line, drivers from either direction may use it for left turns.', REF.mark12);
  Q('mk-center-turn-lane', T.mark, 'In a center left-turn lane marked like this, you may not travel further than:',
    ['150 feet.', '100 feet.', '300 feet.', '500 feet.'], 0,
    'Drivers may use this center lane for left turns, but may not travel further than 150 feet in this lane.', REF.mark12);
  Q('mk-hov-diamond', T.mark, 'A white diamond painted in the center of a highway lane marks:',
    ['A railroad crossing is ahead.', 'A High Occupancy Vehicle lane.', 'A lane for bicycles only.', 'A lane that ends just ahead.'], 1,
    'High Occupancy Vehicle (HOV) lanes are marked on highways by a diamond shape in the center of the lane.', REF.mark13);
  Q('mk-yield-line', T.mark, 'The line of triangles painted across this lane is:',
    ['A warning that a speed bump is just ahead.', 'A crosswalk for pedestrians and bicyclists.', 'A yield line, showing where to yield or stop.', 'A zone where parking is not allowed.'], 2,
    'A yield line is a line of triangles across the roadway that may be used with a yield sign to show where you must yield or stop, if necessary.', REF.mark12);

  VA.signQuestions = list;
})(window.VA);
