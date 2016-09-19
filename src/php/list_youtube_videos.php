<?php

$API_key = 'AIzaSyAGnvXLx0dyqNlWzLmbI9hPnPmu8uXn2vo';
$playlistId = 'PL8T_kI1HrvoHE7QpyMKfWLd5_B15SYw6c';
$channelId = 'UC779-tEQQ8FWG3aA5oTWYCA';
$maxResults = 9;


$video_list = json_decode(file_get_contents('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='.$playlistId.'&maxResults='.$maxResults.'&key='.$API_key));

// https://www.youtube.com/playlist?list=PL8T_kI1HrvoHE7QpyMKfWLd5_B15SYw6c

if($video_list){
  // Stock data in variables
  foreach($video_list->items as $item){
    //Embed video
    if(isset($item->snippet->resourceId->videoId) && isset($item->snippet->title)){
        
			echo '
				<div class="video-thumbnail active" id="'.$item->snippet->resourceId->videoId.'">
				  <img src="https://i.ytimg.com/vi/'.$item->snippet->resourceId->videoId.'/mqdefault.jpg">
				  <div class="video-title">'.$item->snippet->title.'</div>
				</div>
			';

    }
	}

}else{
  echo 'Error in calling API';
}

?>