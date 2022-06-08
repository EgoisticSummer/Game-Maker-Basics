// Create table

hsp=0
vsp=0
spd=3

grav=1
jspd=-12
pulos=2

// Step table

//ANDAR

move = -keyboard_check(vk_left)+keyboard_check(vk_right)

hsp=move*spd

if place_meeting(x+hsp,y,obj_block)
{
	while !place_meeting(x+sign(hsp),y,obj_block)
	{
		x+=sign(hsp)
	}
	
	hsp=0
}

x+=hsp

if place_meeting(x,y+vsp,obj_block)
{
	while !place_meeting(x,y+sign(vsp),obj_block)
	{
		y+=sign(vsp)
	}
	
	vsp=0
}

y+=vsp

//pulo

if place_meeting(x,y+1,obj_block)
{
	pulos=2
}
else
{
	vsp+=grav
}

if keyboard_check_pressed(vk_space) && pulos>0
	{
		vsp=jspd
		pulos-=1
	}

//Draw table

//IMPORTANTISSÍMO QUANDO USA DRAW, SE NÃO VOCÊ NÃO É DESENHADO
draw_self()

draw_text(x,y-64,pulos)
