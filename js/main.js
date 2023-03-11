const badge = document.querySelectorAll('.badge')
const badgeWrapper = document.querySelector('.badge-wrapper')
const contentContainer = document.querySelector('.badge-info')
 
const handleContentToggle = (e) => {

    badge.forEach(badge => badge.classList.remove('active'))

    if (!contentContainer.classList.contains('show')) {
        contentContainer.classList.add('show')
    } else {
        contentContainer.classList.remove('show')
    }

    e.target.closest('.badge').classList.add('active')
}

badgeWrapper.addEventListener('click', handleContentToggle)

