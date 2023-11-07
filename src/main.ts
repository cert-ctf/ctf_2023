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
		WA.room.hideLayer("Bus_Station_roof");		
	})
	
	WA.room.area.onLeave('Bus_Room').subscribe(() => {
		WA.room.showLayer("Bus_Station_roof");		
	}) 
	


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));



export {};
