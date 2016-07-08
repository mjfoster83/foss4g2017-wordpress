<?php

echo '<h3>Sponsors</h3>';
add_filter('posts_orderby', 'weighted_sponsor' );
add_filter('posts_join', 'weighted_sponsor_join' );
add_filter('posts_where' , 'sponsors_where' );

// 5 random sponsors
$args=array(
  'post_type' => 'sponsor',
  'post_status' => 'publish',
  'posts_per_page' => 7,
  'orderby' => 'rand'
);
?>
<ul class="subsponsors">
<?php
$my_query = null;
$my_query = new WP_Query($args);
if( $my_query->have_posts() ) {
  while ($my_query->have_posts()) : $my_query->the_post(); 
    $url = get_post_meta( $post->ID, "_URL", true ); ?>
        <li><a href="<?php echo $url; ?>" target="_blank"><?php the_post_thumbnail(); ?></a></li>
  <?php endwhile; ?>
</ul>
<?php }
wp_reset_query();
remove_filter('posts_orderby', 'weighted_sponsor' );
remove_filter('posts_join', 'weighted_sponsor_join' );
remove_filter('posts_where' , 'sponsors_where' );