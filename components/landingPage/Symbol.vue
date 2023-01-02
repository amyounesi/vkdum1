<script setup>

function mousemove (e) {
			parallaxIt(e, ".layer1-1", -25);
			parallaxIt(e, ".layer1-2", -15);
			parallaxIt(e, ".layer2-1", -5);
			parallaxIt(e, ".layer2-1", -15);
			parallaxIt(e, ".layer3-1", -150);
			parallaxIt(e, ".layer3-2", -80);

		};
		function parallaxIt(e, target, movement) {
			var $this = document.getElementById('banner');
			var relX = e.pageX - $this.offsetLeft;
			var relY = e.pageY - $this.offsetTop;

			TweenMax.to(target, 1, {
				x: (relX - $this.offsetWidth / 2) / $this.offsetWidth * movement,
				y: (relY - $this.offsetHeight / 2) / $this.offsetHeight * movement
			});
		}
    
</script>

<template>
  <section class="home-banner d-flex align-items-center" id="banner" @mousemove="mousemove">
		<div class="container mx-auto">
			<div class=" layer3 pt-20">
				
				<div class="flex justify-center">
					<div class="layer3-1 col-6 md:mt-20" style="transform: matrix(1, 0, 0, 1, -3.61379, -80.7434);">
						<img src="/images/headL.png">
					</div>
					<div class="layer3-2 col-6 md:-mt-10" style="transform: matrix(1, 0, 0, 1, -1.92735, -43.0631);">
						<img src="/images/headR.png">
					</div>
					
			
				</div>
			
				<div class="text-center">
					<img class="mx-auto mb-4" src="/images/logo.png">
					<h1 class="text-3xl font-bold text-indigo-700">Play, Psychoanalysis &amp; Earn
						in the Metaverse Powered by GPT-3</h1>
					<p class="text-xl text-center text-slate-500">AI &amp; BSC &amp; IOT</p>
				</div>
			</div>

			
		</div>

	</section>
</template>

