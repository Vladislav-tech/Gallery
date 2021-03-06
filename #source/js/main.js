  import Photo from './modules/Photo.js';
  import PhotoStorage from './modules/PhotoStorage.js';
  import data from './data.js';

  const photoStorage = new PhotoStorage({data: data, container: '.gallery-items'});

  photoStorage.addSort('likes+', (photoA, photoB) => {
    return photoA.likes - photoB.likes;
  });

  photoStorage.addSort('likes-', (photoA, photoB) => {
    return photoB.likes - photoA.likes;
  });

  photoStorage.addSort('date+', (photoA, photoB) => {
    return photoA.date.getTime() - photoB.date.getTime();
  });

  photoStorage.addSort('date-', (photoA, photoB) => {
    return photoB.date.getTime() - photoA.date.getTime();
  });

  photoStorage.addFilter('group', (photo, groups) => {

    let isSelectedGroup = false;

    if(groups.others && !(photo.group in groups)) {
      isSelectedGroup = true;
    } else {
      isSelectedGroup = groups[photo.group];
    }

    return isSelectedGroup;
  });

  /* USING */
  ;(() => {
    const groups = JSON.parse( localStorage.getItem('selectedGroups') || '{}');
    const sortCategories = document.querySelector('#sortCategories');
    const checkboxContainer = document.querySelector('.checkboxes');

    changeSelectGroups();
    startSystem();

    for(let child of sortCategories.children) {
       if(child.value === localStorage.getItem('typeSorting')) {
         child.selected = true;
         break;
       }
    }

    checkboxContainer.querySelectorAll('.custom-checkbox').forEach((checkbox) => {
        checkbox.checked = groups[checkbox.dataset.group];
    });

    sortCategories.addEventListener('change', startSystem);

    checkboxContainer.addEventListener('click', (event) => {
      if(!event.target.classList.contains('custom-checkbox')) {
        return;
      }

      changeSelectGroups();
      startSystem();
    });

    function changeSelectGroups() {
      let checkboxes = checkboxContainer.querySelectorAll('.custom-checkbox');

      checkboxes.forEach((checkbox) => {
        groups[checkbox.dataset.group] = checkbox.checked;
      });
    }

    function startSystem() {
      localStorage.setItem('typeSorting', sortCategories.value);
      localStorage.setItem('selectedGroups', JSON.stringify(groups, null, 4));

      photoStorage.useFilter('group', groups);
      photoStorage.useSort(sortCategories.value);
      photoStorage.render();
    }

  })();