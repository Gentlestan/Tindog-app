// Create the Dog class here
class Dog{
    constructor(data){
        Object.assign(this,data)
             
    }

      takeLike() {
        this.hasBeenLiked = true
        this.hasBeenSwiped = true
    }
    
    takeNope() {
        this.hasBeenSwiped = true
    }


    getDogHtml(){
        const{name, avatar,age,bio}=this
        return ` 
            <img src="${avatar}" class="dog-avatar">
            <h4 class="avatar-info">${name} <span>${age}</span></h4>
            <h4 class="avatar-bio">${bio}</h4>
            `
    }
     
}


export default Dog


