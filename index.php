<?php

define('CAN_IMPORT', 'yes');

require_once('header.php');
?>

    <div class="container">
        <section>
            <div class="title">
                <h1>Estacionamento JS por: HállanSC</h1>
            </div>

            <form id="form">

                <p>Modelo do veículo:</p>
                <input type="text" name="model">

                <p>Placa do veículo:</p>
                <input type="text" name="board">

                <button type="submit">Adicionar</button>
            </form>

            <div class="cars" id="cars"></div>
        </section>
    </div>

    <script type="text/javascript">
        $$page = 'home';
    </script>
<?php

require_once('footer.php');
