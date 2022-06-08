// Create table

//GUARDAR VARIÁVEL
spd=3
pulos=2

// Step table

//ANDAR

//X DO PLANO CARTESIANO
if keyboard_check(vk_left)
{
	x -= spd
}

if keyboard_check(vk_right)
{
	x += spd
}

//colisão e pulo
if place_meeting(x,y+1,obj_block)
{
	vspeed+=0
	pulos=2
}
else
{
	vspeed=0.3
}

if keyboard_check_pressed(vk_space) && pulos>0
{
	vspeed=-3
	pulos-=1
}

// Draw table

//IMPORTANTISSÍMO QUANDO USA DRAW, SE NÃO VOCÊ NÃO É DESENHADO
draw_self()

//COR DO TEXTO
draw_set_color(c_white)

//ATIVAR MODO DE DEBUG
if keyboard_check(vk_control)
{ //TEXTO
draw_text(x,y-64,"X: "+string(x))
}
