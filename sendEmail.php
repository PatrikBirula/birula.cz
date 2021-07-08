<?php

    // Načítá pole z formuláře - name, email a message; odstraňuje bílé znaky; odstraňuje HTML
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $message = trim($_POST["message"]);

    // Kontroluje data popř. přesměruje na chybovou adresu
    if (empty($message)) {
        header("Location: https://www.birula.cz/cv.php?success=-1#form");
        exit;
    }

    // Nastavte si email, nakterý chcete, aby se vyplněný formulář odeslal - jakýkoli váš email
    $recipient = "patrik@birula.cz";

    // Nastavte předmět odeslaného emailu
    $subject = "Feedback ze CV";

    // Obsah emailu, který se vám odešle
    $email_content = "Firma: $name\n";
    $email_content .= "Feedback: $message\n\n";

    // Emailová hlavička
    $email_headers = "From: $name <$email>";

    // Odeslání emailu - dáme vše dohromady
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Přesměrování na stránku, pokud vše proběhlo v pořádku
    header("Location:https://www.birula.cz/cv.php?success=1#form");

?>