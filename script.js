const numAlunos = Number(prompt('Digite a quantidade de alunos na turma: '))
let notas = []
let total = 0

for(let i = 0; i < numAlunos; i++){
  const nota = Number(prompt(`Digite a nota do aluno ${i +1 }`))
  notas.push(nota)
}

for(let i = 0; i < numAlunos; i++ ){
  total += notas[i]
}

let media = total/numAlunos

let maior = notas[0]

for(let i = 1; i < numAlunos; i++ ){
  if(notas[i] > maior){
    maior = notas[i]
  }
}


let menor = notas[0]

for(let i = 1; i < numAlunos; i++ ){
  if(notas[i] < menor){
    menor = notas[i]
  }
}

alert(`Media: ${media.toFixed(2)} \nMaior nota: ${maior} \nMenor nota: ${menor}`)