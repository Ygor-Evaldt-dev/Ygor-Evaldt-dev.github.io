<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enviando E-mail</title>
</head>

<body>
  <?php

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  require 'lib/vendor/autoload.php';

  // Classe PHPMailer
  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = 'smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Username = '3569a4fb2b2c93';
    $mail->Password = '0136d0db726452';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 2525;

    //Envio
    $mail->setFrom('evaldtygor@rede.ulbra.br', 'Ygor Evaldt'); //Remetente
    $mail->addAddress('evaldtygor@rede.ulbra.br', 'Ygor Evaldt'); //destinatário

    //Envio com anexo
    // $mail->addAttachment('/var/tmp/file.tar.gz');
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');

    //Conteudo
    $mail->isHTML(true);
    $mail->Subject = 'Novo contato via formulario portfolio';

    $mail->Body    = "<b>Nome:</b> {$_GET['nome']}<br><br><b>Telefone:</b> {$_GET['telefone']}<br><br><b>E-mail:<b></b> {$_GET['email']}<br>";

    $mail->AltBody = "Nome: {$_GET['nome']}" . PHP_EOL . "Telefone: {$_GET['telefone']}" . PHP_EOL . "E-mail: {$_GET['email']}" . PHP_EOL;

    $mail->send();
    echo 'Seus dados foram enviados com sucesso<br>';
  } catch (Exception $e) {
    echo "A mensagem não pôde ser enviada. Erro de correspondência: {$mail->ErrorInfo}<br>";
  }
  ?>
</body>

</html>