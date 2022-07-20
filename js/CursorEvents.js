AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvent();
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "black",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "white",
            opacity: 1,
          });
        }
      }
    });
  },
  handleClickEvent:function() {
    this.el.addEventListener('click',(e)=>{
      const placesContainer= document.querySelector('#places-container')
      const {state}=placesContainer.getAttribute('tour')
      if (state==='places-list'){
        const id=this.el.getAttribute('id')
        const placesId=["taj-mahal", "budapest", "new-york-city", "eiffel-tower"]
        if(placesId.includes(id)){
          placesContainer.setAttribute('tour', {
            state:'view',
            selectedCard:id
          })
        }
      }
    })
  }
});
