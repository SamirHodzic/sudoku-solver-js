var test = require('tape');
var SudokuSolver = require('./');

var solver = new SudokuSolver();

test('Valid puzzle', function (t) {
  t.plan(1)
  var result = solver.solve('001700509573024106800501002700295018009400305652800007465080071000159004908007053')
  t.equal(result, '241768539573924186896531742734295618189476325652813497465382971327159864918647253')
})

test('Valid puzzle with different empty separator', function (t) {
  t.plan(1)
  var result = solver.solve('..17..5.9573.241.68..5.1..27..295.18..94..3.56528....7465.8..71...159..49.8..7.53')
  t.equal(result, '241768539573924186896531742734295618189476325652813497465382971327159864918647253')
})

test('Valid puzzle with different empty separator', function (t) {
  t.plan(1)
  var result = solver.solve('__17__5_9573_241_68__5_1__27__295_18__94__3_56528____7465_8__71___159__49_8__7_53')
  t.equal(result, '241768539573924186896531742734295618189476325652813497465382971327159864918647253')
})

test('Valid puzzle with array as result option', function (t) {
  t.plan(1)
  var result = solver.solve('001700509573024106800501002700295018009400305652800007465080071000159004908007053', { result: 'array' })
  t.same(result, [2, 4, 1, 7, 6, 8, 5, 3, 9, 5, 7, 3, 9, 2, 4, 1, 8, 6, 8, 9, 6, 5, 3, 1, 7, 4, 2, 7, 3, 4, 2, 9, 5, 6, 1, 8, 1, 8, 9, 4, 7, 6, 3, 2, 5, 6, 5, 2, 8, 1, 3, 4, 9, 7, 4, 6, 5, 3, 8, 2, 9, 7, 1, 3, 2, 7, 1, 5, 9, 8, 6, 4, 9, 1, 8, 6, 4, 7, 2, 5, 3])
})

test('Valid puzzle with chunks as result option', function (t) {
  t.plan(1)
  var result = solver.solve('001700509573024106800501002700295018009400305652800007465080071000159004908007053', { result: 'chunks' })
  t.same(result, [[2, 4, 1, 7, 6, 8, 5, 3, 9], [5, 7, 3, 9, 2, 4, 1, 8, 6], [8, 9, 6, 5, 3, 1, 7, 4, 2], [7, 3, 4, 2, 9, 5, 6, 1, 8], [1, 8, 9, 4, 7, 6, 3, 2, 5], [6, 5, 2, 8, 1, 3, 4, 9, 7], [4, 6, 5, 3, 8, 2, 9, 7, 1], [3, 2, 7, 1, 5, 9, 8, 6, 4], [9, 1, 8, 6, 4, 7, 2, 5, 3]])
})

test('Invalid puzzle', function (t) {
  t.plan(1)
  var result = solver.solve('1234asdf')
  t.equal(result, 'Puzzle is not valid.')
})

test('No solution puzzle', function (t) {
  t.plan(1)
  var result = solver.solve('171700509573024106800501002700295018009400305652800007465080071000159004908007053')
  t.equal(result, 'No solution found.')
})
