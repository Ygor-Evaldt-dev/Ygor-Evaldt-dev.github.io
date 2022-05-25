<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

  <!-- bootstrap icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">

  <link rel="stylesheet" href="assets/css/style.css">
  <title>Enviando E-mail</title>
</head>

<body class="corpo-email-php">
  <!-- Cabeçalho -->
  <header class="container-fluid p-0" id="inicio">
    <nav class="header-navegacao navbar navbar-expand-lg bg-dark navbar-dark p-4 align-items-center">
      <div class="container-fluid">
        <a class="header-logo navbar-brand hover" href="index.php">Ygor Evaldt</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- navegação -->
        <div class="collapse navbar-collapse text-end justify-content-end" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="https://api.whatsapp.com/send/?phone=5551983313468&text&app_absent=0" target="_blank"><i class="bi bi-whatsapp text-white hover"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="https://www.linkedin.com/in/ygor-evaldt-6479b2220/" target="_blank"><i class="bi bi-linkedin hover "></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="https://github.com/Ygor-Evaldt-dev" target="_blank"><i class="bi bi-github hover"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
      $mail->Username = 'bc386598f9ac5a';
      $mail->Password = 'ca72beca38284f';
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

      $mail->Body    = "<b>Nome:</b> {$_POST['nome']}<br><br><b>Telefone:</b> {$_POST['telefone']}<br><br><b>E-mail:<b></b> {$_POST['email']}<br>";

      $mail->AltBody = "Nome: {$_POST['nome']}" . PHP_EOL . "Telefone: {$_POST['telefone']}" . PHP_EOL . "E-mail: {$_POST['email']}" . PHP_EOL;

      $mail->send();
      echo '<h3 class="pt-4 text-center">Seus dados foram enviados com sucesso<h3><br>';
    } catch (Exception $e) {
      echo "<h3>A mensagem não pôde ser enviada. Erro de correspondência: {$mail->ErrorInfo}<h3><br>";
    }
    ?>
    <p class="text-center">
      Voltar para a pagina principal: <a href="index.php" class="clique-aqui">Clique aqui</a>
    </p>
</body>

</html>