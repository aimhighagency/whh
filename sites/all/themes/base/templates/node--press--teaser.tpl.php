<div class="press-teaser press">
	<div class="cover-image"><a href="<?php print $source; ?>" target="_blank"><?php print $teaser_image; ?></a></div>
	<h2><a href="<?php print $source; ?>" target="_blank"><?php print $title; ?></a></h2>
	<div class="body">
		<?php print $body; ?>
		
		<?php if(isset($source)): ?>
			<div class="source"><a href="<?php print $source; ?>" target="_blank">read full article</a></div>
		<?php endif; ?>
		
		<?php if(isset($pdf)): ?>
			<div class="source"><a href="<?php print $pdf; ?>" target="_blank">view PDF</a></div>
		<?php endif; ?>
	</div>
	
</div>
