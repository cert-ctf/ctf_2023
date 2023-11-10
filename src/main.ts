/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');



// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    //console.log('Player tags: ',WA.player.tags)
	
	// Mirror show Duke
	WA.room.area.onEnter('Mirror_Duke').subscribe(() => {		
		WA.room.showLayer("decoration/mirror_duke");		
	})
	
	WA.room.area.onLeave('Mirror_Duke').subscribe(() => {
		WA.room.hideLayer("decoration/mirror_duke");		
	}) 
	
	
	//Roofs------------------------------------------------------------------------

	// HiFi Room
	WA.room.area.onEnter('HiFi_Room').subscribe(() => {
		WA.room.hideLayer("HiFi_roof");		
	})
	
	WA.room.area.onLeave('HiFi_Room').subscribe(() => {
		WA.room.showLayer("HiFi_roof");
	}) 
	
	// Praxis_1 Room
	WA.room.area.onEnter('Praxis_1_Room').subscribe(() => {
		WA.room.hideLayer("Praxis_1_roof");		
	})
	
	WA.room.area.onLeave('Praxis_1_Room').subscribe(() => {
		WA.room.showLayer("Praxis_1_roof");		
	}) 
	
	// Praxis_2 Room
	WA.room.area.onEnter('Praxis_2_Room').subscribe(() => {
		WA.room.hideLayer("Praxis_2_roof");		
	})
	
	WA.room.area.onLeave('Praxis_2_Room').subscribe(() => {
		WA.room.showLayer("Praxis_2_roof");		
	}) 
	
	// Fax Room
	WA.room.area.onEnter('Fax_Room').subscribe(() => {
		WA.room.hideLayer("Fax_roof");		
	})
	
	WA.room.area.onLeave('Fax_Room').subscribe(() => {
		WA.room.showLayer("Fax_roof");		
	}) 
	
	// Bus Room
	WA.room.area.onEnter('Bus_Room').subscribe(() => {
		WA.room.hideLayer("Bus_Station_Roof");		
	})
	
	WA.room.area.onLeave('Bus_Room').subscribe(() => {
		WA.room.showLayer("Bus_Station_Roof");		
	}) 
	
	
	//SPAWN TIM------------------------------------------------------------------------
	// Tim CarCinema
	WA.room.area.onEnter('tim_01').subscribe(() => {	
		WA.room.setTiles([		
		  { x: 76, y: 12, tile: "tim", layer: "Stuff_6" },
		  { x: 76, y: 11, tile: "tim_info_01a", layer: "Above_1" },
		  { x: 76, y: 12, tile: "tim_info_01b", layer: "Above_1" },		  
		]);	
	})
	
	WA.room.area.onLeave('tim_01').subscribe(() => {
		WA.room.setTiles([		
		  { x: 76, y: 12, tile: null, layer: "Stuff_6" },
		  { x: 76, y: 11, tile: null, layer: "Above_1" },
		  { x: 76, y: 12, tile: null, layer: "Above_1" },		  
		]);	
	}) 
	
	// Tim Bridge
	WA.room.area.onEnter('tim_02').subscribe(() => {
		WA.room.setTiles([		
		  { x: 70, y: 60, tile: "tim", layer: "Stuff_6" },
		  { x: 70, y: 59, tile: "tim_info_01a", layer: "Above_1" },
		  { x: 70, y: 60, tile: "tim_info_01b", layer: "Above_1" },		  
		]);	
	})
	
	WA.room.area.onLeave('tim_02').subscribe(() => {
		WA.room.setTiles([		
		  { x: 70, y: 60, tile: null, layer: "Stuff_6" },
		  { x: 70, y: 60, tile: null, layer: "Above_1" },
		  { x: 70, y: 59, tile: null, layer: "Above_1" },		 	  
		]);	
	}) 
	
	
	//POPUPS---------------------------------------------------------------------------
	let currentPopup: any = undefined;
	
	//Popup Tim Hifi
	WA.room.area.onEnter('tim_cinema').subscribe(() => {
        currentPopup = WA.ui.openPopup("Popup_tim_cinema","⚠️📠🐶🖥️⚠️",[{
			label: "Next",
			className: "primary",
			callback: () => {
				// Close the popup when the "Close" button is pressed.
				closePopup();
				currentPopup = WA.ui.openPopup("Popup_tim_cinema","Der Hund möchte mir irgendetwas mitteilen, aber seine Sprache scheint chiffriert oder kryptiert zu sein...",[{
					label: "Close",
					className: "primary",
					callback: () => {
						// Close the popup when the "Close" button is pressed.
						closePopup();
						
					}
				}]);						
			}
		}]);
    })
    WA.room.area.onLeave('tim_hifi').subscribe(closePopup)
	
	//Popup Tim Hifi
	WA.room.area.onEnter('tim_hifi').subscribe(() => {
        currentPopup = WA.ui.openPopup("Popup_tim_hifi","🐶💬📲",[{
			label: "Next",
			className: "primary",
			callback: () => {
				// Close the popup when the "Close" button is pressed.
				closePopup();
				currentPopup = WA.ui.openPopup("Popup_tim_hifi","Ich verstehe Ihn einfach nicht, aber ich habe das Gefühl, als ob er mir den TI-Messenger zeigen möchte...",[{
					label: "Close",
					className: "primary",
					callback: () => {
						// Close the popup when the "Close" button is pressed.
						closePopup();
						
					}
				}]);						
			}
		}]);
    })
    WA.room.area.onLeave('tim_hifi').subscribe(closePopup)
	


	function closePopup(){
		if (currentPopup !== undefined) {
			currentPopup.close();
			currentPopup = undefined;
		}
	}

	


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));



export {};
