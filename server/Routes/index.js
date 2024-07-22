import { userLogin } from '../Controllers/login.js'
import {userRegister} from '../Controllers/register.js'
import express from 'express'
import { test } from '../Controllers/test.js'
import { JwtVerify, isAdmin } from '../middlewares/Jwtverify.js'
import { getAdmin } from '../Controllers/GetUserorAdmin/getAdmin.js'
import { getUser } from '../Controllers/GetUserorAdmin/getUser.js'
import { createTournament } from '../Controllers/GetUserorAdmin/CreateTournament.js'
import { findAllTournaments } from '../Controllers/GetUserorAdmin/FindAllTournaments.js'
import { JoinTournament } from '../Controllers/GetUserorAdmin/JoinTournament.js'
import { TotalUser } from '../Controllers/GetUserorAdmin/TotalUser.js'
import { getAllTournamentAdmin } from '../Controllers/GetUserorAdmin/getAllTournamentAdmin.js'
import { Mycontest } from '../Controllers/GetUserorAdmin/Mycontst.js'
import { RoomIdPassword } from '../Controllers/GetUserorAdmin/RoomIdPassword.js'
import { getTournamentDetails } from '../Controllers/GetUserorAdmin/getTournament.js'
import { adminRoomId, getRoomIdAndPass } from '../Controllers/GetUserorAdmin/AdminRoomId.js'
import { getMatchStats, matchStats } from '../Controllers/RoomId/MatchStats.js'

const route = express.Router()

route.post("/register",userRegister)
route.get("/test/app",test)
route.post("/login",userLogin)
route.get("/getAdmin",JwtVerify,isAdmin,getAdmin)
route.get("/getUser",JwtVerify,getUser)
route.post("/create-tournament",JwtVerify,isAdmin,createTournament)
route.get("/tourments-find",JwtVerify,findAllTournaments)
route.put("/join-tournament/:tournamentId",JwtVerify,JoinTournament)

route.get("/find-all-user",JwtVerify,isAdmin,TotalUser)
//get-all-tournament-found-admin
route.get("/find-tournament-admin",JwtVerify,isAdmin,getAllTournamentAdmin)
//find-only-users-joined
route.get("/my-contest",JwtVerify,Mycontest)

//room-password-routes
route.post("/room-password",JwtVerify,RoomIdPassword)

route.get('/tournament-details/:tournamentId', JwtVerify,isAdmin, getTournamentDetails);

// createing for user roomId and password
route.post("/create-room-password",JwtVerify,isAdmin,adminRoomId)
route.get("/get-room-password",JwtVerify,getRoomIdAndPass)


//creating match-stats
route.post("/create-matchStats",JwtVerify,isAdmin,matchStats)
route.get("/get-matchStats",JwtVerify,getMatchStats)















export default route