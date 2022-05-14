<?php
/* Para exibir as contas */
function exibeContas(array $conta) {
  ['titular' => $titular, 'saldo' => $saldo] = $conta;
  echo "<li> Titular: $titular. Saldo: $saldo </li>"; 
}

/* função para saque */
function saque(array $conta, float $valor): array 
{
  if ($conta['saldo'] < $valor) {
    exibeMensagem(" {$conta['titular']} - Você não pode sacar este valor");
  }
  else {
    $conta['saldo'] -= $valor;
  }
  return $conta;
}

/* função para depósitos */
function deposito(array $conta, float $valor): array 
{
  if ($valor <= 0) {
    exibeMensagem("{$conta['titular']} - Valor de depósito inválido");
  }
  else {
    $conta['saldo'] += $valor;
  }
  return $conta;
}

/* nome com letra maiuscula */
function nomeMaiusculo (array $conta): array
{
  $conta['titular'] = mb_strtoupper($conta['titular']);
  return $conta;
}