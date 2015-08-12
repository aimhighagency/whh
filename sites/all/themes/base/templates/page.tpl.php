<div id="wrapper">
	<div id="header">
		<div id="header-inner">
			<div id="logo"><a href="/"><span>West</span><span>Haddon</span><span>Hall</span></a></div>		
			<div id="nav"><?php print render($page['nav_main']); ?></div>
		</div>
	</div>
	
	<div id="main-content">
		
		<div id="main">
			<div id="main-inner">
				<div id="content">
					<?php if(isset($title)): ?>
						<h1 class="page-title"><?php print $title; ?></h1>
					<?php endif; ?>
					<?php if ($tabs): ?>
			        <div class="tabs">
			          <?php print render($tabs); ?>
			        </div>
			      <?php endif; ?>
					<?php echo render($page['content']); ?>
				</div>
			</div>
		</div>

	</div>

</div>

<div id="footer">
	<h2>Connect</h2>
	<div id="footer-main">

		<?php echo render($page['footer_main']); ?>
	</div>
	<div id="footer-bottom">
		<div id="copy">&copy; <?php echo date('Y'); ?> West Haddon Hall. Don't steal. It's not nice.</div>
	</div>
</div>
