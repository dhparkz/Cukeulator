$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/extra/calculate.feature");
formatter.feature({
  "name": "여러가지 산술계산",
  "description": "  산술 연산자를 사용하여 두 숫자에 대한 산술 연산을 수행합니다.\n  \"\"\"이 기능의 목적은 이미 정의된 step-definitions이 어떻게 효율적으로 재사용되는지 설명하는 것입니다.\"\"\"",
  "keyword": "기능"
});
formatter.scenarioOutline({
  "name": "숫자하나를 입력하고 산술연산자와 다른숫자를 입력합니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cop\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cresult\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "op",
        "result"
      ]
    },
    {
      "cells": [
        "9",
        "8",
        "+",
        "17.0"
      ]
    },
    {
      "cells": [
        "7",
        "6",
        "–",
        "1.0"
      ]
    },
    {
      "cells": [
        "5",
        "4",
        "x",
        "20.0"
      ]
    },
    {
      "cells": [
        "3",
        "2",
        "/",
        "1.5"
      ]
    },
    {
      "cells": [
        "1",
        "0",
        "/",
        "Infinity"
      ]
    }
  ]
});
formatter.scenario({
  "name": "숫자하나를 입력하고 산술연산자와 다른숫자를 입력합니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "9를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "+를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "8를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "17.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "숫자하나를 입력하고 산술연산자와 다른숫자를 입력합니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "7를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "–를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "6를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "숫자하나를 입력하고 산술연산자와 다른숫자를 입력합니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "5를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "x를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "4를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "20.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "숫자하나를 입력하고 산술연산자와 다른숫자를 입력합니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "3를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1.5가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "숫자하나를 입력하고 산술연산자와 다른숫자를 입력합니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Infinity가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/operations/addition.feature");
formatter.feature({
  "name": "덧셈",
  "description": "  하나 이상의 자리로 구성된 두 숫자의 합계를 계산합니다.",
  "keyword": "기능"
});
formatter.scenarioOutline({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "+를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003csum\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "sum"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "0.0"
      ]
    },
    {
      "cells": [
        "0",
        "1",
        "1.0"
      ]
    },
    {
      "cells": [
        "1",
        "1",
        "2.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "+를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "+를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "+를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "+를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum3\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum4\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003csum\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "num3",
        "num4",
        "sum"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "2",
        "0",
        "20.0"
      ]
    },
    {
      "cells": [
        "9",
        "8",
        "7",
        "6",
        "174.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "+를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "20.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "9를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "8를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "+를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "7를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "6를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "174.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/operations/division.feature");
formatter.feature({
  "name": "나눗셈",
  "description": "  하나 이상의 숫자로 구성된 두 자리의 몫을 계산합니다.",
  "keyword": "기능"
});
formatter.scenarioOutline({
  "name": "한자리 숫자를 두개를 입력하고 \u003d을 누른다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cquotient\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "quotient"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "NaN"
      ]
    },
    {
      "cells": [
        "1",
        "0",
        "Infinity"
      ]
    },
    {
      "cells": [
        "1",
        "2",
        "0.5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "한자리 숫자를 두개를 입력하고 \u003d을 누른다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NaN가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "한자리 숫자를 두개를 입력하고 \u003d을 누른다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Infinity가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "한자리 숫자를 두개를 입력하고 \u003d을 누른다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0.5가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum3\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum4\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cquotient\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "num3",
        "num4",
        "quotient"
      ]
    },
    {
      "cells": [
        "2",
        "2",
        "2",
        "2",
        "1.0"
      ]
    },
    {
      "cells": [
        "2",
        "0",
        "1",
        "0",
        "2.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "/를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/operations/multiplication.feature");
formatter.feature({
  "name": "곱셈",
  "description": "  하나 이상의 숫자로 구성된 두 숫자의 곱셈을 계산합니다.",
  "keyword": "기능"
});
formatter.scenarioOutline({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "x를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cproduct\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "product"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "0.0"
      ]
    },
    {
      "cells": [
        "0",
        "1",
        "0.0"
      ]
    },
    {
      "cells": [
        "1",
        "2",
        "2.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "x를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "x를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "x를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "x를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum3\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum4\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cproduct\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "num3",
        "num4",
        "product"
      ]
    },
    {
      "cells": [
        "2",
        "2",
        "2",
        "2",
        "484.0"
      ]
    },
    {
      "cells": [
        "2",
        "0",
        "1",
        "0",
        "200.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "x를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "484.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "x를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "200.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/operations/subtraction.feature");
formatter.feature({
  "name": "뺄셈",
  "description": "  하나 이상의 자리로 구성된 두 숫자의 뺄셈를 계산합니다.",
  "keyword": "기능"
});
formatter.scenarioOutline({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "–를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cdelta\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "delta"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "0.0"
      ]
    },
    {
      "cells": [
        "0",
        "1",
        "-1.0"
      ]
    },
    {
      "cells": [
        "1",
        "2",
        "-1.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "–를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "–를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "-1.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "한자리 숫자를 두개 입력하고 \u003d를 누릅니다",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "–를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "-1.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.step({
  "name": "\u003cnum1\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum2\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "–를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum3\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cnum4\u003e를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.step({
  "name": "\u003cdelta\u003e가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "예",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "num3",
        "num4",
        "delta"
      ]
    },
    {
      "cells": [
        "2",
        "2",
        "2",
        "2",
        "0.0"
      ]
    },
    {
      "cells": [
        "2",
        "0",
        "1",
        "0",
        "10.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "–를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "두자리 숫자를 두개 입력하고 \u003d를 누릅니다.",
  "description": "",
  "keyword": "시나리오 개요"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "CalculatorActivity를 실행한다",
  "keyword": "먼저"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_have_a_CalculatorActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "–를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_d(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u003d를 누른다",
  "keyword": "그리고"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_press_op(char)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "10.0가 화면에 표시된다",
  "keyword": "그러면"
});
formatter.match({
  "location": "CalculatorActivitySteps.I_should_see_s_on_the_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});