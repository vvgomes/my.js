describe('times', function () {
	
	it('should call the argument function five times', function() {
		var count = 0;
		(5).times(function(i) {
      count++;
    });	
		expect(count).toBe(5);
	});
	
});

describe('has', function () {

	it('should know when an array has a given element', function() {
		expect([1, 2, 3].has(3)).toBeTruthy();
	});
	
	it('should know when an array does not have a given element', function() {
		expect([1, 2, 3].has(4)).toBeFalsy();
	});

	it('should know when an array has a given element by equality', function() {
		var one = createSillyHash("pirate");
		var another =	createSillyHash("pirate");
		expect([0, one, "foo"].has(another)).toBeTruthy();
	});
	
	it('should know when an array does not have a given element by equality', function() {
		var one = createSillyHash("pirate");
		var another =	createSillyHash("dinossaur");
		expect([0, one, "foo"].has(another)).toBeFalsy();
	});

});

describe('each', function() {
	var numbers = [1, 2, 3, 4];
	
	it('should apply a predicate for each array element', function() {
		var result = '';
		numbers.each(function(e) {
			result += e;
		});
		expect(result).toBe('1234');
	});
	
	it('should apply a predicate for each array index', function() {
		var result = '';
		numbers.each(function(e, i) {
			result += e+i;
		});
		expect(result).toBe('1357');
	});
	
});


describe('filter', function() {
	
	it('should filter array elements based on a boolean expression', function() {
		var filtered = [1, 2, 3, 4].filter(function(e, i) {
			return e % 2 === 0;
		});
		expect(filtered[0]).toBe(2);
		expect(filtered[1]).toBe(4);
	});
	
});

describe('without', function() {
	
	it('should remove all the common elements', function() {
		var result = [1, 2, 3, 4].without([2, 4]);
		expect(result[0]).toBe(1);
		expect(result[1]).toBe(3);
	});
	
});

describe('random', function() {
	
	it('should choose a random element from an array', function() {
		var numbers = [1, 2, 3, 4];
		(4).times(function(i) {
			var some = numbers.random();
			expect(numbers.has(some)).toBeTruthy();
		});
	});
	
});

function createSillyHash(v) {
	var h = {};
	h.value = v;
	h.equals = function(o) {
		return o.value === v;
	};
	return h;
};
