var app = new Vue({
    el: "#app",
    data:{
        title:'Notemaster',
        note:{
            title:'',
            text:''
        },
        notes:[
            {
                title:'This is Demo note by Goutam Reddy',
                text:'I love programming ',
                date: new  Date(Date.now()).toLocaleString()
            }
        ]
    },
    methods:{
        addNote(){
            let { text , title} = this.note 

            this.notes.push({
                text,
                title,
                date: new Date(Date.now()).toLocaleString() 
            })
        },
        removeNote(index){
            this.notes.splice(index,1)
        }
    }
})