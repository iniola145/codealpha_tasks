let Time = new Date();
let DateoftheYear = Time.getDate();
let DayoftheYear = Time.getDay();
let MonthoftheYear = Time.getMonth() + 1;
let YearoftheYear = Time.getFullYear();

const DaysoftheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let TodaysDate = document.getElementById('Date');
TodaysDate.innerHTML = DateoftheYear;
let Day = document.getElementById('Day');
Day.innerHTML = DaysoftheWeek[DayoftheYear];
let Month = document.getElementById('Month');
Month.innerHTML = MonthoftheYear;
let Year = document.getElementById('Year');
Year.innerHTML = YearoftheYear;


// Add Note Functionality
let AddButton = document.getElementById('Buttonone');
let NoteTitle = document.getElementById('NoteTitle');
let NoteContent = document.getElementById('NoteContent');

let Note = document.getElementById('AddNote');

AddButton.addEventListener('click', function(){
    Note.style.display = 'flex';
});

let Cancel = document.getElementById('CancelButton');

Cancel.addEventListener('click', function(){
    Note.style.display = 'none';
    NoteTitle.value = '';
    NoteContent.value = '';
});

let Save = document.getElementById('SaveButton');

Save.addEventListener('click', function(){
    let NoteContainer = document.getElementById('NoteContainer');

    if(NoteContent.value == '' || NoteTitle.value == ''){
        alert('Please enter a title and a note');
        
    } else {
        let NoteSubContainer = document.createElement('div');
        NoteSubContainer.className = 'Note';
        NoteContainer.appendChild(NoteSubContainer);
        let Contain = document.createElement('div');
        Contain.className = 'Contain';
        NoteSubContainer.appendChild(Contain);
        Title = document.createElement('h1');
        Title.innerHTML = NoteTitle.value;
        Title.className = 'Title';
        Contain.appendChild(Title);
        Content = document.createElement('p');
        Content.innerHTML = NoteContent.value;
        Contain.appendChild(Content);
        let DeleteIconContainer = document.createElement('div');
        DeleteIconContainer.className = 'DeleteIconContainer';
        NoteSubContainer.appendChild(DeleteIconContainer);
        let DeleteIcon = document.createElement('i');
        DeleteIcon.className = 'bx bx-trash';
        DeleteIconContainer.appendChild(DeleteIcon);
        DeleteIcon.addEventListener('click', function(){
            NoteSubContainer.remove();
        });
        NoteTitle.value = '';
        NoteContent.value = '';
        Note.style.display = 'none';
    }
});