<?php
/**
 * The loop that displays posts.
 * FOR the homepage
*/  
 ?>   
<?php query_posts($query_string . 'post_type=acme_portfolio'); ?>     
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>     		  
<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>> 			      
  <?php if ( has_post_thumbnail()) {
       $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'large');
       
      } ?>
  <div class="portfolios" style="background:url('<?php echo $large_image_url[0]; ?>') no-repeat center top /*fixed*/;background-size: cover;-moz-background-size: cover;-o-background-size: cover;">         
    <div class="portfolioimg">
    </div>         
    <div class="portfoliocontent">  			            
      <h2 class="entry-title">               
        <a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'twentyten' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark">                    
          <?php the_title(); ?></a></h2>                            
      <div class="entry-content">				            
        <a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'twentyten' ), the_title_attribute( 'echo=0' ) ); ?>"><?php dynamic_excerpt("250"); ?>
        <div class="detail">Show details</div></a>
          			        
      </div>         
    </div>    
  </div>     
  <!-- .entry-summary -->   			        
  <hr class="cleaner" />		  
</div>
<!-- #post-## -->       
<?php endwhile; else: ?>      
<p>Sorry, no posts matched your criteria.  
</p>   
<?php endif; ?>     
