// Get 
var Service = document.querySelector('#service');
var instructor = document.querySelector('#instructor');
var date = document.querySelector('#date');
var memeberName = document.querySelector('#member');
service.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (service.value.length < 1) return;
    // save everything to local storage
	localStorage.setItem('wishlistItems', wishlist.innerHTML);
    
	// Add info to modal

	// Save the list to localStorage

}, false);

// Check for saved items
var saved = localStorage.getItem('service');
var saved = localStorage.getItem('instructor');
var saved = localStorage.getItem('date');
var saved = localStorage.getItem('member');
// If there are any saved items, update our list
if (saved) {
	service.innerHTML = saved;
}