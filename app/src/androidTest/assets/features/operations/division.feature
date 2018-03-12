#language: ko

기능: 나눗셈
  하나 이상의 숫자로 구성된 두 자리의 몫을 계산합니다.

  시나리오 개요: 한자리 숫자를 두개를 입력하고 =을 누른다.
    먼저 CalculatorActivity를 실행한다
    그리고 <num1>를 누른다
    그리고 /를 누른다
    그리고 <num2>를 누른다
    그리고 =를 누른다
    그러면 <quotient>가 화면에 표시된다
    예:
      | num1 | num2 | quotient |
      | 0    | 0    | NaN      |
      | 1    | 0    | Infinity |
      | 1    | 2    | 0.5      |

  시나리오 개요: 두자리 숫자를 두개 입력하고 =를 누릅니다.
    먼저 CalculatorActivity를 실행한다
    그리고 <num1>를 누른다
    그리고 <num2>를 누른다
    그리고 /를 누른다
    그리고 <num3>를 누른다
    그리고 <num4>를 누른다
    그리고 =를 누른다
    그러면 <quotient>가 화면에 표시된다
  예:
  | num1 | num2 | num3 | num4 | quotient |
  | 2    | 2    | 2    | 2    | 1.0      |
  | 2    | 0    | 1    | 0    | 2.0      |
