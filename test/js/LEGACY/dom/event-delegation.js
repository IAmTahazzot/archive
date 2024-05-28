/**
 * 
 * @EventDelegation
 * 
 * Process:
 * Attach event to a common parent element, Process the matches for targeted
 * elements...
 * 
 * WHY need it?
 * To prevent hundrend of event attachment for performance.
 */

'use strict';

const list = document.querySelector('.ul');

list.addEventListener('click', function (e) {
  // Process matching...
  if ( !e.target.nodeName === 'LI') {
    return;
  }

  // Action
  const target = e.target;
  target.innerHTML = 'Just changing HTML content inside list item';
});