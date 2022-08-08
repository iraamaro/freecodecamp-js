# Algoritmos e estruturas de dados em JavaScript

## 1 - JavaScript Básico

### 1.basic.1.js

> **Comentar seu código JavaScript**

Comentários são linhas de código que JavaScript vai ignorar intencionalmente. Os comentários são uma ótima maneira de deixar anotações para você mesmo e para outras pessoas que mais tarde precisarão descobrir o que esse código faz.

Existem duas maneiras de escrever comentários em JavaScript:

Usar *//* dirá ao JavaScript para ignorar o resto do texto na linha atual.

Isso é um comentário de uma linha:

```js
// This is an in-line comment.
```

```js
/* This is a
multi-line comment */
```

**OBSERVAÇÃO:** à medida que você escreve código, deve adicionar comentários regularmente, para esclarecer a função de partes do seu código. Um bom comentário pode ajudar a comunicar a intenção do seu código — para os outros e para você mesmo no futuro.

### 1.basic.2.js

> **Declarar variáveis JavaScript**

Na ciência da computação, dado é qualquer coisa que tenha significado para o computador. JavaScript fornece oito tipos de dados diferentes que são ```undefined```, ```null```, ```boolean```, ```string```, ```symbol```, ```bigint```, ```number``` e ```object```.

Por exemplo, os computadores distinguem números, como o número ```12```, e ```strings```, como o ```"12"```, ```"dog"```, ou ```"123 cats"```, as quais são coleções de caracteres. Computadores podem realizar operações matemáticas em um número, mas não em uma string.

*Variáveis* permitem aos computadores armazenar e manipular dados de forma dinâmica. Elas fazem isso usando uma "etiqueta" para apontar para o dado ao invés de usar o próprio dado. Qualquer um dos 8 tipos de dados pode ser armazenado em uma variável.

Variáveis são similares às variáveis x e y utilizadas na matemática, o que significa que elas são simples nomes para representar os dados aos quais se referem. Variáveis de computador diferem das variáveis matemáticas porque elas podem armazenar diferentes valores em momentos diferentes.

Dizemos ao JavaScript para criar ou declarar uma variável colocando a palavra-chave ```var``` na frente dela, dessa forma:

```js
var ourName;
```

cria uma variável chamada ourName. Em JavaScript, terminamos uma instrução com ponto e vírgula. Nomes de variáveis podem ser formados por números, letras e $ ou _, mas não podem conter espaços ou começar com um número.

Use a palavra-chave ```var``` para criar uma variável chamada ```myName```.

### 1.basic.3.js

> **Armazenar valores com o operador de atribuição**

Em JavaScript, você pode armazenar um valor em uma variável com o operador de atribuição (```=```).

```js
myVariable = 5;
```

Isso atribui um valor do tipo ```Number``` de ```5``` para ```myVariable```.

Se há qualquer cálculo à direita do operador ```=```, esses cálculos são executados antes do valor ser atribuído à variável na esquerda do operador.

```js
var myVar;
myVar = 5;
```

Primeiro, esse código cria uma variável chamada ```myVar```. Em seguida, o código atribui ```5``` para myVar. Agora, se ```myVar``` aparece novamente no código, o programa vai tratá-la como se fosse ```5```.

Atribua o valor ```7``` para a variável ```a```.
