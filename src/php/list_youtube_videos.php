<?php

$API_key = 'AIzaSyAGnvXLx0dyqNlWzLmbI9hPnPmu8uXn2vo';
$channelId = 'UC779-tEQQ8FWG3aA5oTWYCA';
$maxResults = 9;


$video_list = json_decode(file_get_contents('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId='.$channelId.'&maxResults='.$maxResults.'&key='.$API_key.''));


if($video_list){
  // Stock data in variables
  foreach($video_list->items as $item){
    //Embed video
    if(isset($item->id->videoId)){
        
			echo '
				<div class="video-thumbnail active" id="'.$item->id->videoId.'">
				  <img src="https://i.ytimg.com/vi/'.$item->id->videoId.'/mqdefault.jpg">
				  <div class="video-title">'.$item->snippet->title.'</div>
				</div>
			';

    }
	}

}else{
  echo 'Error in calling API';
}

?>