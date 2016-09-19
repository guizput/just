<?php

$ytKey = 'AIzaSyDyycQt_ifg9dDYOvhECfd8XvpXg60oVYI';
$channelId = 'UC779-tEQQ8FWG3aA5oTWYCA';

// Calling the API
$videos = file_get_contents('https://www.googleapis.com/youtube/v3/search?key='.$ytKey.'&channelId='.$channelId.'&part=snippet,id&order=date');

'https://www.googleapis.com/youtube/v3/search?key='.$ytKey.'&channelId='.$channelId.'&part=snippet,id&order=date'


// if($video){
//   // Stock data in variables
//   $json = json_decode($video, true);
//   $title = $json['items'][0]['snippet']['localized']['title'];
//   $desc = $json['items'][0]['snippet']['localized']['description'];
// }else{
//   echo 'Error in calling API';
// }

echo $videos;