// Exercicio 1 - Preencher e Exibir
function exercicio1() {
    const vetor = [];
    let texto = "";

    for (let i = 0; i < 5; i++) {
        const numero = Number(prompt(`Digite o número da posição ${i}:`));
        vetor.push(numero);
    }

    for (let i = 0; i < vetor.length; i++) {
        texto += vetor[i] + "\n";
    }

    alert("Números digitados:\n" + texto);
}

exercicio1();
// Exercicio 2 - Soma dos Elementos
function exercicio2() {
    const vetor = [];
    let soma = 0;

    for (let i = 0; i < 6; i++) {
        const numero = Number(prompt(`Digite o número ${i + 1}:`));
        vetor.push(numero);
        soma += numero;
    }

    alert("Soma total: " + soma);
}

exercicio2();
// Exercicio 3 - Apenas os Pares
function exercicio3() {
    const vetor = [];
    let texto = "";

    for (let i = 0; i < 8; i++) {
        vetor.push(Number(prompt(`Digite o número ${i + 1}:`)));
    }

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            texto += vetor[i] + "\n";
        }
    }

    alert("Números pares:\n" + texto);
}

exercicio3();
// Exercicio 4 - Encontrando o Maior Valor
function exercicio4() {
    const vetor = [];

    for (let i = 0; i < 7; i++) {
        vetor.push(Number(prompt(`Digite o número ${i + 1}:`)));
    }

    let maior = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    alert("Maior valor: " + maior);
}

exercicio4();
// Exercicio 5 - Média da Turma
function exercicio5() {
    const notas = [];
    let soma = 0;

    for (let i = 0; i < 5; i++) {
        const nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`));
        notas.push(nota);
        soma += nota;
    }

    const media = soma / notas.length;

    alert("Média da turma: " + media.toFixed(2));
}

exercicio5();
// Exercicio 6 - Contando Ímpares
function exercicio6() {
    const vetor = [];
    let contador = 0;

    for (let i = 0; i < 10; i++) {
        const numero = Number(prompt(`Digite o número ${i + 1}:`));
        vetor.push(numero);

        if (numero % 2 !== 0) {
            contador++;
        }
    }

    alert("Quantidade de ímpares: " + contador);
}

exercicio6();
// Exercicio 7 - Procurando um Número
function exercicio7() {
    const vetor = [];
    let encontrado = false;

    for (let i = 0; i < 10; i++) {
        vetor.push(Number(prompt(`Digite o número ${i + 1}:`)));
    }

    const buscar = Number(prompt("Digite o número para buscar:"));

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === buscar) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert("Número encontrado!");
    } else {
        alert("Número não encontrado.");
    }
}

exercicio7();
// Exercicio 8 - Nomes com a Letra 'A'
function exercicio8() {
    const nomes = [];
    let texto = "";

    for (let i = 0; i < 5; i++) {
        nomes.push(prompt(`Digite o nome ${i + 1}:`));
    }

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].toUpperCase().startsWith("A")) {
            texto += nomes[i] + "\n";
        }
    }

    alert("Nomes que começam com A:\n" + texto);
}

exercicio8();
// Exercicio 9 - Vetor Invertido
function exercicio9() {
    const vetor = [];
    let texto = "";

    for (let i = 0; i < 6; i++) {
        vetor.push(Number(prompt(`Digite o número ${i + 1}:`)));
    }
    for (let i = vetor.length - 1; i >= 0; i--) {
        texto += vetor[i] + "\n";
    }
    alert("Ordem inversa:\n" + texto);
}

exercicio9();
// Exercicio 10 - Alunos Aprovados
function exercicio10() {
    const notas = [];
    let aprovados = 0;

    for (let i = 0; i < 8; i++) {
        const nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`));
        notas.push(nota);
        if (nota >= 7) {
            aprovados++;
        }
    }

    alert("Quantidade de aprovados: " + aprovados);
}

exercicio10();