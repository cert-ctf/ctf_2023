/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


async function extendedFeatures() {
    try {
        await bootstrapExtra()
        console.log('Scripting API Extra loaded successfully');

        	// Place the countdown GIF inside of the cinema screen
			try{
				const countdown = await WA.room.website.get('cinemaScreen');
				countdown.x = 2432;
				countdown.y = 128;
				countdown.width = 418;
				countdown.height = 226;
			}catch(err){
				console.error(err);
			}
			
			// Place the countdown GIF inside of the cinema screen
			try{
				const countdown = await WA.room.website.get('tvScreen');
				countdown.x = 387;
				countdown.y = 328;
				countdown.width = 70;
				countdown.height = 40;
			}catch(err){
				console.error(err);
			}
			
		} catch (error) {
			console.error('Scripting API Extra ERROR',error);
		}
	}
    


// Waiting for the API to be ready
WA.onInit().then(() => {
	extendedFeatures();
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
	
	

	
	// Mirror show Duke
	WA.room.area.onEnter('Mirror_Duke').subscribe(() => {
		console.log("HELLO DUKE")
		WA.room.showLayer("decoration/mirror_duke");		
	})
	
	WA.room.area.onLeave('Mirror_Duke').subscribe(() => {
		WA.room.hideLayer("decoration/mirror_duke");		
	}) 

	// HiFi Room
	WA.room.area.onEnter('HiFi_Room').subscribe(() => {
		WA.room.hideLayer("above/Roofs/HiFi_roof");		
	})
	
	WA.room.area.onLeave('HiFi_Room').subscribe(() => {
		WA.room.showLayer("above/Roofs/HiFi_roof");
	}) 
	
	// Praxis_1 Room
	WA.room.area.onEnter('Praxis_1_Room').subscribe(() => {
		WA.room.hideLayer("above/Roofs/Praxis_1_roof");		
	})
	
	WA.room.area.onLeave('Praxis_1_Room').subscribe(() => {
		WA.room.showLayer("above/Roofs/Praxis_1_roof");		
	}) 
	
	// Praxis_2 Room
	WA.room.area.onEnter('Praxis_2_Room').subscribe(() => {
		WA.room.hideLayer("above/Roofs/Praxis_2_roof");		
	})
	
	WA.room.area.onLeave('Praxis_2_Room').subscribe(() => {
		WA.room.showLayer("above/Roofs/Praxis_2_roof");		
	}) 
	
	// Fax Room
	WA.room.area.onEnter('Fax_Room').subscribe(() => {
		WA.room.hideLayer("above/Roofs/Fax_roof");		
		WA.room.hideLayer("above/Roofs/Fax_sign");	
	})
	
	WA.room.area.onLeave('Fax_Room').subscribe(() => {
		WA.room.showLayer("above/Roofs/Fax_roof");		
		WA.room.showLayer("above/Roofs/Fax_sign");	
	}) 
	
	// Bus Room
	WA.room.area.onEnter('Bus_Room').subscribe(() => {
		WA.room.hideLayer("above/Roofs/Bus_Station_roof");		
		WA.room.hideLayer("above/Roofs/Bus_Station_sign");	
	})
	
	WA.room.area.onLeave('Bus_Room').subscribe(() => {
		WA.room.showLayer("above/Roofs/Bus_Station_roof");		
		WA.room.showLayer("above/Roofs/Bus_Station_sign");	
	}) 
	
	
 
 
 
 
 

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


export {};
