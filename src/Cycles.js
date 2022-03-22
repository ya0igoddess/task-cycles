import { count } from 'console';
import { start } from 'repl';

/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    var sum = 0;
    while (start <= end) {
        if (start % 2 == 0) sum += start;
        start += 1;
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    var count = 0;
    while (a > 0.1) {
        count++;
        a /= 2;
    }
    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    var start = 1;
    var msg = '';
    do {
        if (start % 3 == 0) msg += '_';
        else msg += message[start - 1];
        start++;
    } while (start <= message.length);
    return msg;
}
