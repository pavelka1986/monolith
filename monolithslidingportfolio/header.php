<!DOCTYPE html>
<html <?php language_attributes(); ?>>  
  <head>         
    <title>      
      <?php wp_title(' | ', true, 'right'); ?>      
      <?php bloginfo('name'); ?>    
    </title>		     
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" type="image/x-icon" />
		<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" type="image/x-icon" />
    <link media="all" rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/style.css"/>    
    <link media="all" rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/js/fancybox/jquery.fancybox.css"/>       
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.8.0.min.js"></script>       
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/fancybox/jquery.fancybox.pack.js"></script>     
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/swing-0.1.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>                    
    <?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>         
    <?php wp_head(); ?>     
  </head>  
  <body <?php body_class(); ?>>    
    <div id="wrapper" class="hfeed">      
      <header>          
        <nav>          
          <div class="headermenu"><ul> <?php wp_list_pages('title_li='); ?> </ul><hr class="cleaner clr" /></div>       
        </nav>      
      </header>      
      <div id="container">
