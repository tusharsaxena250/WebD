var obj = { //object 'obj' with three properties : 'prop1', 'prop2'& 'prop3', with values "Property 1", "Property 2" & "Property 3" respectively.
	prop1 : "Property 1",
	prop2 : "Property 2",
	prop3 : "Property 3" 
};

console.log(obj);
delete obj.prop2; //deleting the property 'prop2'
console.log(obj);