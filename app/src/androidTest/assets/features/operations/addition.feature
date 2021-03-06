# language: ko

기능: 덧셈
  하나 이상의 자리로 구성된 두 숫자의 합계를 계산합니다.
  시나리오 개요: 한자리 숫자를 두개 입력하고 =를 누릅니다
    먼저 CalculatorActivity를 실행한다
    그리고 <num1>를 누른다
    그리고 +를 누른다
    그리고 <num2>를 누른다
    그리고 =를 누른다
    그러면 <sum>가 화면에 표시된다
  예:
    | num1 | num2 | sum |
    | 0    | 0    | 0.0 |
    | 0    | 1    | 1.0 |
    | 1    | 1    | 2.0 |

  시나리오 개요: 두자리 숫자를 두개 입력하고 =를 누릅니다.
    먼저 CalculatorActivity를 실행한다
    그리고 <num1>를 누른다
    그리고 <num2>를 누른다
    그리고 +를 누른다
    그리고 <num3>를 누른다
    그리고 <num4>를 누른다
    그리고 =를 누른다
    그러면 <sum>가 화면에 표시된다
  예:
    | num1 | num2 | num3 | num4 | sum   |
    | 0    | 0    | 2    | 0    | 20.0  |
    | 9    | 8    | 7    | 6    | 174.0 |
