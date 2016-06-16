<?
if((isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'nadia.kovaleva2010@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка'; //Загаловок сообщения
        $message = 
		'Тема: '.$subject.'
		Заявка с блока "Получите консультацию бесплатно".                  
        Номер телефона: '.$_POST['phone']; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Sender <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>