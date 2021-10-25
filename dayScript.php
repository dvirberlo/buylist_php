<?php
function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
date_default_timezone_set("Israel");
$date = date("Y-m-d h:i:sa");
$filename = "data/dates.txt";
$ip = get_client_ip();
$details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
$text = 'date: '. $date . ' || ip: ' . $ip .' || country: ' . $details->country . ' || region: ' . $details->region . ' || city: '. $details->city . ' || org: ' . $details->org;

file_put_contents($filename, $text . PHP_EOL, FILE_APPEND)

?>