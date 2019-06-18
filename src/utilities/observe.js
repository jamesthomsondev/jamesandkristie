export function observe (target, callback, threshold = 1) {
	const fn = (entries) => entries.forEach(el => {
    if (el.isIntersecting && el.intersectionRatio > 1) {      
      observer.unobserve(target);

      if (callback && typeof callback === 'function') return callback();
    }
  });

	const observer = new IntersectionObserver(fn, {
		threshold: threshold
	});

  observer.observe(target);

	return observer;
}