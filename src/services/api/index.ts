import { WarriorsData, WarriorDTO, GroupDTO, MoveDTO, WarriorEntity, GroupEntity, MoveEntity } from 'src/types';
import { Util } from 'src/services/util';

const warriorsJSON = `
  [
    {
      "warriorid": 1,
      "warriorname": "Scorpion"
    },
    {
      "warriorid": 2,
      "warriorname": "Liu Kang"
    },
    {
      "warriorid": 3,
      "warriorname": "Kung Lao"
    },
    {
      "warriorid": 4,
      "warriorname": "Sub-Zero"
    },
    {
      "warriorid": 5,
      "warriorname": "Sindel"
    },
    {
      "warriorid": 6,
      "warriorname": "Ermac"
    },
    {
      "warriorid": 7,
      "warriorname": "Reptile"
    },
    {
      "warriorid": 8,
      "warriorname": "Kitana"
    },
    {
      "warriorid": 9,
      "warriorname": "Johnny Cage"
    },
    {
      "warriorid": 10,
      "warriorname": "Jade"
    },
    {
      "warriorid": 11,
      "warriorname": "Mileena"
    },
    {
      "warriorid": 12,
      "warriorname": "Nightwolf"
    },
    {
      "warriorid": 13,
      "warriorname": "Cyrax"
    },
    {
      "warriorid": 14,
      "warriorname": "Noob"
    },
    {
      "warriorid": 15,
      "warriorname": "Smoke"
    },
    {
      "warriorid": 16,
      "warriorname": "Sektor"
    },
    {
      "warriorid": 17,
      "warriorname": "Sonya Blade"
    },
    {
      "warriorid": 18,
      "warriorname": "Jax"
    },
    {
      "warriorid": 19,
      "warriorname": "Kano"
    },
    {
      "warriorid": 20,
      "warriorname": "Stryker"
    },
    {
      "warriorid": 21,
      "warriorname": "Shang Tsung"
    },
    {
      "warriorid": 22,
      "warriorname": "Baraka"
    },
    {
      "warriorid": 23,
      "warriorname": "Kabal"
    },
    {
      "warriorid": 24,
      "warriorname": "Raiden"
    },
    {
      "warriorid": 25,
      "warriorname": "Kratos"
    },
    {
      "warriorid": 26,
      "warriorname": "Sheeva"
    },
    {
      "warriorid": 27,
      "warriorname": "Quan Chi"
    },
    {
      "warriorid": 28,
      "warriorname": "Cyber Sub-Zero"
    },
    {
      "warriorid": 29,
      "warriorname": "Freddy Krueger"
    },
    {
      "warriorid": 30,
      "warriorname": "Rain"
    },
    {
      "warriorid": 31,
      "warriorname": "Kenshi"
    },
    {
      "warriorid": 32,
      "warriorname": "Skarlet"
    }
  ]
`;

const groupsJSON = `
  [
    {
      "groupid": 1,
      "sort": 1,
      "grouptitle": "Basic attacks",
      "sequence": ""
    },
    {
      "groupid": 2,
      "sort": 3,
      "grouptitle": "Kombo attacks",
      "sequence": ""
    },
    {
      "groupid": 3,
      "sort": 4,
      "grouptitle": "Fast tags",
      "sequence": ""
    },
    {
      "groupid": 4,
      "sort": 5,
      "grouptitle": "Tag kombos",
      "sequence": ""
    },
    {
      "groupid": 5,
      "sort": 6,
      "grouptitle": "Special attacks",
      "sequence": ""
    },
    {
      "groupid": 6,
      "sort": 7,
      "grouptitle": "Enhanced attacks",
      "sequence": ""
    },
    {
      "groupid": 7,
      "sort": 8,
      "grouptitle": "X-ray attack",
      "sequence": ""
    },
    {
      "groupid": 8,
      "sort": 9,
      "grouptitle": "Finishing moves",
      "sequence": ""
    },
    {
      "groupid": 9,
      "sort": 2,
      "grouptitle": "Dragon stance",
      "sequence": "[down][backward][bp]"
    },
    {
      "groupid": 10,
      "sort": 2,
      "grouptitle": "Leg Lift",
      "sequence": "[up][plus][fk]"
    },
    {
      "groupid": 11,
      "sort": 2,
      "grouptitle": "Military Stance",
      "sequence": "[down][backward][bp]"
    },
    {
      "groupid": 12,
      "sort": 2,
      "grouptitle": "Nightmare Stance",
      "sequence": "[down][comma][backward][comma][bp]"
    }
  ]
`;

const movesJSON = `
  [
    {
      "moveid": 1,
      "warriorid": 1,
      "groupid": 1,
      "movename": "Doom Slice",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 2,
      "warriorid": 1,
      "groupid": 1,
      "movename": "Blade Overhead",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 3,
      "warriorid": 1,
      "groupid": 1,
      "movename": "Heel Kicks",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 4,
      "warriorid": 1,
      "groupid": 1,
      "movename": "Shin Blast",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 5,
      "warriorid": 1,
      "groupid": 2,
      "movename": "Torment",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 6,
      "warriorid": 1,
      "groupid": 2,
      "movename": "Damnation",
      "movesequence": "[fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 7,
      "warriorid": 1,
      "groupid": 2,
      "movename": "Brimstone",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 8,
      "warriorid": 1,
      "groupid": 2,
      "movename": "Gravedigger",
      "movesequence": "[bp][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 9,
      "warriorid": 1,
      "groupid": 2,
      "movename": "Doom Blade",
      "movesequence": "[forward][plus][bp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 10,
      "warriorid": 1,
      "groupid": 2,
      "movename": "Dead End",
      "movesequence": "[fk][comma][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 11,
      "warriorid": 1,
      "groupid": 2,
      "movename": "Grievance",
      "movesequence": "[forward][plus][bk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 12,
      "warriorid": 1,
      "groupid": 3,
      "movename": "Underworld",
      "movesequence": "[bp][comma][fp][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 13,
      "warriorid": 1,
      "groupid": 3,
      "movename": "Soulless",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 14,
      "warriorid": 1,
      "groupid": 4,
      "movename": "Eternal Vengeance",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 15,
      "warriorid": 1,
      "groupid": 4,
      "movename": "Punishment",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 16,
      "warriorid": 1,
      "groupid": 4,
      "movename": "Affiction",
      "movesequence": "[forward][plus][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 17,
      "warriorid": 1,
      "groupid": 4,
      "movename": "Revenge",
      "movesequence": "[fk][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 18,
      "warriorid": 1,
      "groupid": 5,
      "movename": "Spear",
      "movesequence": "[backward][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 19,
      "warriorid": 1,
      "groupid": 5,
      "movename": "Demon Fire",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 20,
      "warriorid": 1,
      "groupid": 5,
      "movename": "Teleport",
      "movesequence": "[down][backward][fk]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 21,
      "warriorid": 1,
      "groupid": 5,
      "movename": "Takedown",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 22,
      "warriorid": 1,
      "groupid": 5,
      "movename": "Air Throw",
      "movesequence": "[throw]",
      "comment": "While in the air"
    },
    {
      "moveid": 23,
      "warriorid": 1,
      "groupid": 6,
      "movename": "Flame Spear",
      "movesequence": "[backward][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 24,
      "warriorid": 1,
      "groupid": 6,
      "movename": "Hell Fire",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 25,
      "warriorid": 1,
      "groupid": 6,
      "movename": "Flameport",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 26,
      "warriorid": 1,
      "groupid": 6,
      "movename": "Takeout",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 27,
      "warriorid": 1,
      "groupid": 7,
      "movename": "Scorpion Sting",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 28,
      "warriorid": 1,
      "groupid": 8,
      "movename": "Split Decision",
      "movesequence": "[forward][down][forward][bp]",
      "comment": "Touching"
    },
    {
      "moveid": 29,
      "warriorid": 1,
      "groupid": 8,
      "movename": "Nether-Gate",
      "movesequence": "[backward][forward][backward][fk]",
      "comment": "Touching"
    },
    {
      "moveid": 30,
      "warriorid": 1,
      "groupid": 8,
      "movename": "Klassic Fatality",
      "movesequence": "[down][up][up][bp]",
      "comment": "DLC"
    },
    {
      "moveid": 31,
      "warriorid": 1,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][up][up][fp]",
      "comment": "Varies"
    },
    {
      "moveid": 32,
      "warriorid": 1,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][backward][forward][down][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 33,
      "warriorid": 2,
      "groupid": 1,
      "movename": "Strong Fist",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 34,
      "warriorid": 2,
      "groupid": 1,
      "movename": "Face Jab",
      "movesequence": "[forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 35,
      "warriorid": 2,
      "groupid": 1,
      "movename": "Gut Strike",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 36,
      "warriorid": 2,
      "groupid": 1,
      "movename": "Knee Bash",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 37,
      "warriorid": 2,
      "groupid": 1,
      "movename": "Shaolin Heel",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 38,
      "warriorid": 2,
      "groupid": 1,
      "movename": "Knee Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 39,
      "warriorid": 2,
      "groupid": 1,
      "movename": "Shin Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 40,
      "warriorid": 2,
      "groupid": 9,
      "movename": "Final Act",
      "movesequence": "[fp]",
      "comment": ""
    },
    {
      "moveid": 41,
      "warriorid": 2,
      "groupid": 9,
      "movename": "Fist Of Death",
      "movesequence": "[bp]",
      "comment": ""
    },
    {
      "moveid": 42,
      "warriorid": 2,
      "groupid": 9,
      "movename": "Shaolin Flip",
      "movesequence": "[fk]",
      "comment": ""
    },
    {
      "moveid": 43,
      "warriorid": 2,
      "groupid": 9,
      "movename": "Moon Sweep",
      "movesequence": "[bk]",
      "comment": ""
    },
    {
      "moveid": 44,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Three Fists",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 45,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Death Fist",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 46,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Immortal Dragon",
      "movesequence": "[fp][comma][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 47,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Blazing Blasts",
      "movesequence": "[forward][plus][fp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 48,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Fierce Tiger",
      "movesequence": "[bp][comma][fp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 49,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Showdown",
      "movesequence": "[forward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 50,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Launching Fury",
      "movesequence": "[backward][plus][bp][comma][backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 51,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Backdown",
      "movesequence": "[backward][plus][bp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 52,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Lotus Flurry",
      "movesequence": "[fk][comma][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 53,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Final Act",
      "movesequence": "[backward][plus][fk][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 54,
      "warriorid": 2,
      "groupid": 2,
      "movename": "Krushing Kombo",
      "movesequence": "[forward][plus][bk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 55,
      "warriorid": 2,
      "groupid": 3,
      "movename": "Shaolin Spirit",
      "movesequence": "[fp][comma][bp][comma][backward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 56,
      "warriorid": 2,
      "groupid": 3,
      "movename": "Dragon's Bite",
      "movesequence": "[backward][plus][fk][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 57,
      "warriorid": 2,
      "groupid": 3,
      "movename": "Next Time",
      "movesequence": "[fp][comma][tag]",
      "comment": "From Dragon Stance"
    },
    {
      "moveid": 58,
      "warriorid": 2,
      "groupid": 3,
      "movename": "Shaolin Step",
      "movesequence": "[bp][comma][fp][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 59,
      "warriorid": 2,
      "groupid": 4,
      "movename": "Fist Swaps",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 60,
      "warriorid": 2,
      "groupid": 4,
      "movename": "Step In",
      "movesequence": "[fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 61,
      "warriorid": 2,
      "groupid": 4,
      "movename": "Friendly",
      "movesequence": "[forward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 62,
      "warriorid": 2,
      "groupid": 4,
      "movename": "Dragon Dance",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 63,
      "warriorid": 2,
      "groupid": 4,
      "movename": "Twin Lotus",
      "movesequence": "[fk][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 64,
      "warriorid": 2,
      "groupid": 4,
      "movename": "Harm-Onionus",
      "movesequence": "[backward][plus][fk][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 65,
      "warriorid": 2,
      "groupid": 5,
      "movename": "High Fireball",
      "movesequence": "[backward][forward][fp]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 66,
      "warriorid": 2,
      "groupid": 5,
      "movename": "Low Fireball",
      "movesequence": "[backward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 67,
      "warriorid": 2,
      "groupid": 5,
      "movename": "Flying Dragon Kick",
      "movesequence": "[backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 68,
      "warriorid": 2,
      "groupid": 5,
      "movename": "Bicycle Kick",
      "movesequence": "[backward][backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 69,
      "warriorid": 2,
      "groupid": 5,
      "movename": "Parry",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 70,
      "warriorid": 2,
      "groupid": 6,
      "movename": "High Dragon Fire",
      "movesequence": "[backward][forward][fp][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 71,
      "warriorid": 2,
      "groupid": 6,
      "movename": "Low Dragon Fire",
      "movesequence": "[backward][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 72,
      "warriorid": 2,
      "groupid": 6,
      "movename": "Flame Dragon Kick",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 73,
      "warriorid": 2,
      "groupid": 6,
      "movename": "Bicycle Steps",
      "movesequence": "[backward][backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 74,
      "warriorid": 2,
      "groupid": 6,
      "movename": "Burning Parry",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 75,
      "warriorid": 2,
      "groupid": 7,
      "movename": "Chin Up",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 76,
      "warriorid": 2,
      "groupid": 8,
      "movename": "Fist Of Flame",
      "movesequence": "[forward][backward][down][down][fk]",
      "comment": "Sweep"
    },
    {
      "moveid": 77,
      "warriorid": 2,
      "groupid": 8,
      "movename": "The Beast Within",
      "movesequence": "[down][down][forward][down][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 78,
      "warriorid": 2,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][forward][backward][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 79,
      "warriorid": 2,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][down][down][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 80,
      "warriorid": 3,
      "groupid": 1,
      "movename": "Chops",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 81,
      "warriorid": 3,
      "groupid": 1,
      "movename": "Hat Swipe",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 82,
      "warriorid": 3,
      "groupid": 1,
      "movename": "Rolling Thunder",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 83,
      "warriorid": 3,
      "groupid": 1,
      "movename": "Point Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 84,
      "warriorid": 3,
      "groupid": 1,
      "movename": "Hop Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 85,
      "warriorid": 3,
      "groupid": 2,
      "movename": "Windy Palm",
      "movesequence": "[fp][comma][fp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 86,
      "warriorid": 3,
      "groupid": 2,
      "movename": "Healing Wind",
      "movesequence": "[backward][plus][fp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 87,
      "warriorid": 3,
      "groupid": 2,
      "movename": "Chained Fist",
      "movesequence": "[bp][comma][fp][comma][bp][comma][fp][comma][bp]",
      "comment": "Must be pressed rapidly"
    },
    {
      "moveid": 88,
      "warriorid": 3,
      "groupid": 2,
      "movename": "Iron Broom",
      "movesequence": "[bp][comma][bk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 89,
      "warriorid": 3,
      "groupid": 2,
      "movename": "Leg Bar",
      "movesequence": "[bp][comma][bk][comma][fp][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 90,
      "warriorid": 3,
      "groupid": 2,
      "movename": "Uprooting Step",
      "movesequence": "[bp][comma][bk][comma][fp][plus][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 91,
      "warriorid": 3,
      "groupid": 2,
      "movename": "Plum Flower",
      "movesequence": "[bp][comma][bk][comma][fp][plus][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 92,
      "warriorid": 3,
      "groupid": 2,
      "movename": "Lead The Way",
      "movesequence": "[backward][plus][fk][comma][fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 93,
      "warriorid": 3,
      "groupid": 3,
      "movename": "Spinout",
      "movesequence": "[down][forward][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 94,
      "warriorid": 3,
      "groupid": 4,
      "movename": "Yin Yang",
      "movesequence": "[fp][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 95,
      "warriorid": 3,
      "groupid": 4,
      "movename": "Swirling Dragon",
      "movesequence": "[bp][comma][fp][comma][bp][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 96,
      "warriorid": 3,
      "groupid": 4,
      "movename": "Double Yang",
      "movesequence": "[bp][comma][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 97,
      "warriorid": 3,
      "groupid": 5,
      "movename": "Hat Toss",
      "movesequence": "[backward][forward][bp]",
      "comment": "[up] and [down] Controls"
    },
    {
      "moveid": 98,
      "warriorid": 3,
      "groupid": 5,
      "movename": "Ground Hat",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 99,
      "warriorid": 3,
      "groupid": 5,
      "movename": "Spin",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 100,
      "warriorid": 3,
      "groupid": 5,
      "movename": "Dive Kick",
      "movesequence": "[down][plus][bk]",
      "comment": "While in the air"
    },
    {
      "moveid": 101,
      "warriorid": 3,
      "groupid": 5,
      "movename": "Teleport",
      "movesequence": "[down][up]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 102,
      "warriorid": 3,
      "groupid": 5,
      "movename": "(While Teleporting)",
      "movesequence": "[fp] Throws [bp] Punches [fk] Kicks",
      "comment": ""
    },
    {
      "moveid": 103,
      "warriorid": 3,
      "groupid": 6,
      "movename": "Ultimate Hat",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 104,
      "warriorid": 3,
      "groupid": 6,
      "movename": "Grinding Hat",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": "Hold [bp] To delay"
    },
    {
      "moveid": 105,
      "warriorid": 3,
      "groupid": 6,
      "movename": "Cyclone",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 106,
      "warriorid": 3,
      "groupid": 6,
      "movename": "Multi Kick",
      "movesequence": "[down][plus][bk][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 107,
      "warriorid": 3,
      "groupid": 7,
      "movename": "Fist Of Shaolin",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 108,
      "warriorid": 3,
      "groupid": 8,
      "movename": "Hat Trick",
      "movesequence": "[backward][forward][forward][backward][bp]",
      "comment": "Sweep"
    },
    {
      "moveid": 109,
      "warriorid": 3,
      "groupid": 8,
      "movename": "Razor's Edge",
      "movesequence": "[down][down][forward][backward][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 110,
      "warriorid": 3,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][forward][down][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 111,
      "warriorid": 3,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][forward][down][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 112,
      "warriorid": 4,
      "groupid": 1,
      "movename": "Swipe",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 113,
      "warriorid": 4,
      "groupid": 1,
      "movename": "Force Claws (Hold)",
      "movesequence": "[backward][plus][bp]",
      "comment": "Can be dash canceled"
    },
    {
      "moveid": 114,
      "warriorid": 4,
      "groupid": 1,
      "movename": "Big Leg",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 115,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Frosty",
      "movesequence": "[fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 116,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Cold Feet",
      "movesequence": "[fp][comma][fk][comma][forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 117,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Artic Blast",
      "movesequence": "[fp][comma][fk][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 118,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Ice Pick",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 119,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Ice Cold",
      "movesequence": "[backward][plus][fp][comma][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 120,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Frost Bitten",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 121,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Ices Up",
      "movesequence": "[bp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 122,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Tundra Slice",
      "movesequence": "[forward][plus][bk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 123,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Winter Blade",
      "movesequence": "[bp][comma][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 124,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Cold Steel",
      "movesequence": "[bp][comma][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 125,
      "warriorid": 4,
      "groupid": 2,
      "movename": "Chill Out",
      "movesequence": "[fk][comma][forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 126,
      "warriorid": 4,
      "groupid": 3,
      "movename": "Absolute Zero",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 127,
      "warriorid": 4,
      "groupid": 4,
      "movename": "Freezer Burn",
      "movesequence": "[fp][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 128,
      "warriorid": 4,
      "groupid": 4,
      "movename": "Arctic Assault",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 129,
      "warriorid": 4,
      "groupid": 4,
      "movename": "Ability To Freeze",
      "movesequence": "[bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 130,
      "warriorid": 4,
      "groupid": 5,
      "movename": "Iceball",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 131,
      "warriorid": 4,
      "groupid": 5,
      "movename": "Slide",
      "movesequence": "[backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 132,
      "warriorid": 4,
      "groupid": 5,
      "movename": "Ice Clone",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 133,
      "warriorid": 4,
      "groupid": 5,
      "movename": "Ice Puddle",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 134,
      "warriorid": 4,
      "groupid": 6,
      "movename": "Icebeam",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 135,
      "warriorid": 4,
      "groupid": 6,
      "movename": "Power Slide",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 136,
      "warriorid": 4,
      "groupid": 6,
      "movename": "Ice Statue",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 137,
      "warriorid": 4,
      "groupid": 6,
      "movename": "Ground Freeze",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 138,
      "warriorid": 4,
      "groupid": 7,
      "movename": "Deep Freeze",
      "movesequence": "[stance][plus][block]",
      "comment": "Hold To charge"
    },
    {
      "moveid": 139,
      "warriorid": 4,
      "groupid": 8,
      "movename": "Have an Ice Day",
      "movesequence": "[backward][forward][down][forward][bk]",
      "comment": "Sweep"
    },
    {
      "moveid": 140,
      "warriorid": 4,
      "groupid": 8,
      "movename": "Spinal Smash",
      "movesequence": "[down][backward][down][forward][bp]",
      "comment": "Sweep"
    },
    {
      "moveid": 141,
      "warriorid": 4,
      "groupid": 8,
      "movename": "Klassic Fatality",
      "movesequence": "[forward][down][forward][bp]",
      "comment": "DLC"
    },
    {
      "moveid": 142,
      "warriorid": 4,
      "groupid": 8,
      "movename": "Stage fatality",
      "movesequence": "[forward][down][backward][bp]",
      "comment": "Varies"
    },
    {
      "moveid": 143,
      "warriorid": 4,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][backward][down][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 144,
      "warriorid": 5,
      "groupid": 1,
      "movename": "Hand Sweep",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 145,
      "warriorid": 5,
      "groupid": 1,
      "movename": "Face Chop",
      "movesequence": "[forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 146,
      "warriorid": 5,
      "groupid": 1,
      "movename": "Rising Fist",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 147,
      "warriorid": 5,
      "groupid": 1,
      "movename": "Front Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 148,
      "warriorid": 5,
      "groupid": 1,
      "movename": "Hand Plant Heel",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 149,
      "warriorid": 5,
      "groupid": 1,
      "movename": "Split Kick",
      "movesequence": "[up][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 150,
      "warriorid": 5,
      "groupid": 1,
      "movename": "Arise",
      "movesequence": "[up][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 151,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Undead Bride",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 152,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Royal Pain",
      "movesequence": "[fp][comma][fp][comma][backward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 153,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Rebirth",
      "movesequence": "[backward][plus][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 154,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Confronted",
      "movesequence": "[forward][plus][fp][comma][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 155,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Anguish",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 156,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Sadness",
      "movesequence": "[bp][comma][fp][comma][backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 157,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Conqueror",
      "movesequence": "[backward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 158,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Queen's Anger",
      "movesequence": "[fk][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 159,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Rise To Power",
      "movesequence": "[fk][comma][fp][comma][backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 160,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Unforgettable",
      "movesequence": "[backward][plus][fk][comma][forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 161,
      "warriorid": 5,
      "groupid": 2,
      "movename": "Child's Play",
      "movesequence": "[bk][comma][bk][comma][up][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 162,
      "warriorid": 5,
      "groupid": 3,
      "movename": "Royal Flush",
      "movesequence": "[fp][comma][fp][comma][backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 163,
      "warriorid": 5,
      "groupid": 3,
      "movename": "Regal Ruin",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 164,
      "warriorid": 5,
      "groupid": 3,
      "movename": "Cataclysm",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 165,
      "warriorid": 5,
      "groupid": 3,
      "movename": "Graceful Dead",
      "movesequence": "[backward][plus][fk][comma][forward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 166,
      "warriorid": 5,
      "groupid": 4,
      "movename": "Bow To Me",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 167,
      "warriorid": 5,
      "groupid": 4,
      "movename": "Worthless",
      "movesequence": "[forward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 168,
      "warriorid": 5,
      "groupid": 4,
      "movename": "Majestic Mash",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 169,
      "warriorid": 5,
      "groupid": 4,
      "movename": "Queen's Sorrow",
      "movesequence": "[fk][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 170,
      "warriorid": 5,
      "groupid": 4,
      "movename": "That Was Fun!",
      "movesequence": "[bk][comma][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 171,
      "warriorid": 5,
      "groupid": 5,
      "movename": "Fireball",
      "movesequence": "[down][forward][fp]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 172,
      "warriorid": 5,
      "groupid": 5,
      "movename": "Low Fireball",
      "movesequence": "[down][forward][fk]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 173,
      "warriorid": 5,
      "groupid": 5,
      "movename": "Yell",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 174,
      "warriorid": 5,
      "groupid": 5,
      "movename": "Levitate",
      "movesequence": "[down][down][up]",
      "comment": ""
    },
    {
      "moveid": 175,
      "warriorid": 5,
      "groupid": 5,
      "movename": "Hair Whip",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 176,
      "warriorid": 5,
      "groupid": 5,
      "movename": "Step Up",
      "movesequence": "[down][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 177,
      "warriorid": 5,
      "groupid": 6,
      "movename": "Power Fireball",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 178,
      "warriorid": 5,
      "groupid": 6,
      "movename": "Low Fire",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 179,
      "warriorid": 5,
      "groupid": 6,
      "movename": "Scream",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 180,
      "warriorid": 5,
      "groupid": 6,
      "movename": "Hair Toss",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 181,
      "warriorid": 5,
      "groupid": 6,
      "movename": "Step Over",
      "movesequence": "[down][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 182,
      "warriorid": 5,
      "groupid": 7,
      "movename": "Queen B",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 183,
      "warriorid": 5,
      "groupid": 8,
      "movename": "Migraine",
      "movesequence": "[backward][forward][down][forward][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 184,
      "warriorid": 5,
      "groupid": 8,
      "movename": "Mouthful",
      "movesequence": "[backward][forward][up][bp]",
      "comment": "Sweep"
    },
    {
      "moveid": 185,
      "warriorid": 5,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][down][down][fp]",
      "comment": "Varies"
    },
    {
      "moveid": 186,
      "warriorid": 5,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][down][down][up]",
      "comment": "Jump"
    },
    {
      "moveid": 187,
      "warriorid": 6,
      "groupid": 1,
      "movename": "Back Fist",
      "movesequence": "[forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 188,
      "warriorid": 6,
      "groupid": 1,
      "movename": "Wind Strikes",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 189,
      "warriorid": 6,
      "groupid": 1,
      "movename": "Fist Smash",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 190,
      "warriorid": 6,
      "groupid": 1,
      "movename": "Psychic Palm",
      "movesequence": "[backward][plus][bp]",
      "comment": "Hold [bp] To charge"
    },
    {
      "moveid": 191,
      "warriorid": 6,
      "groupid": 1,
      "movename": "Quick Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 192,
      "warriorid": 6,
      "groupid": 1,
      "movename": "2-hit Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 193,
      "warriorid": 6,
      "groupid": 1,
      "movename": "Low Leg",
      "movesequence": "[up][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 194,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Ermac Rush",
      "movesequence": "[fp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 195,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Mysterious Mash",
      "movesequence": "[forward][plus][fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 196,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Fusion",
      "movesequence": "[backward][plus][fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 197,
      "warriorid": 6,
      "groupid": 2,
      "movename": "We Win",
      "movesequence": "[backward][plus][fp][comma][bp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 198,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Nether Pain",
      "movesequence": "[bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 199,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Psychic Strikes",
      "movesequence": "[backward][plus][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 200,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Lost Souls",
      "movesequence": "[backward][plus][bp][comma][fp][comma][forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 201,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Relinquish",
      "movesequence": "[fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 202,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Surrender",
      "movesequence": "[fk][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 203,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Disoriented",
      "movesequence": "[backward][plus][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 204,
      "warriorid": 6,
      "groupid": 2,
      "movename": "Controlled Chaos",
      "movesequence": "[forward][plus][bk][comma][backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 205,
      "warriorid": 6,
      "groupid": 3,
      "movename": "Breakdown",
      "movesequence": "[forward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 206,
      "warriorid": 6,
      "groupid": 3,
      "movename": "Brain Freeze",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 207,
      "warriorid": 6,
      "groupid": 3,
      "movename": "Mind-Blowing",
      "movesequence": "[backward][plus][fp][comma][bp][comma][forward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 208,
      "warriorid": 6,
      "groupid": 4,
      "movename": "Clear Your Mind",
      "movesequence": "[forward][plus][fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 209,
      "warriorid": 6,
      "groupid": 4,
      "movename": "Subconscious",
      "movesequence": "[backward][plus][fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 210,
      "warriorid": 6,
      "groupid": 4,
      "movename": "Lucidity",
      "movesequence": "[fk][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 211,
      "warriorid": 6,
      "groupid": 5,
      "movename": "Force Ball",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 212,
      "warriorid": 6,
      "groupid": 5,
      "movename": "Airblast",
      "movesequence": "[down][backward][bp]",
      "comment": "While in the air"
    },
    {
      "moveid": 213,
      "warriorid": 6,
      "groupid": 5,
      "movename": "Force Port",
      "movesequence": "[down][backward][bk]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 214,
      "warriorid": 6,
      "groupid": 5,
      "movename": "Force Lift",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 215,
      "warriorid": 6,
      "groupid": 5,
      "movename": "Hover Slam",
      "movesequence": "[down][down][up]",
      "comment": "Hold [block] To delay"
    },
    {
      "moveid": 216,
      "warriorid": 6,
      "groupid": 5,
      "movename": "Force Push",
      "movesequence": "[backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 217,
      "warriorid": 6,
      "groupid": 6,
      "movename": "Focus Ball",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 218,
      "warriorid": 6,
      "groupid": 6,
      "movename": "Force Blast",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 219,
      "warriorid": 6,
      "groupid": 6,
      "movename": "Teleport",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 220,
      "warriorid": 6,
      "groupid": 6,
      "movename": "Telelift",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 221,
      "warriorid": 6,
      "groupid": 6,
      "movename": "Levitate Smash",
      "movesequence": "[down][down][up][plus][block]",
      "comment": "Hold [block] To delay"
    },
    {
      "moveid": 222,
      "warriorid": 6,
      "groupid": 6,
      "movename": "Telepush",
      "movesequence": "[backward][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 223,
      "warriorid": 6,
      "groupid": 7,
      "movename": "Cannonball Slam",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 224,
      "warriorid": 6,
      "groupid": 8,
      "movename": "Mind Over Splatter",
      "movesequence": "[down][up][down][down][block]",
      "comment": "Jump"
    },
    {
      "moveid": 225,
      "warriorid": 6,
      "groupid": 8,
      "movename": "Pest Control",
      "movesequence": "[forward][backward][forward][down][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 226,
      "warriorid": 6,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][up][down][down][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 227,
      "warriorid": 6,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][down][backward][down][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 228,
      "warriorid": 7,
      "groupid": 1,
      "movename": "Reptile Smash",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 229,
      "warriorid": 7,
      "groupid": 1,
      "movename": "Low Swipe",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 230,
      "warriorid": 7,
      "groupid": 1,
      "movename": "Hop Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 231,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Cold Blooded",
      "movesequence": "[fp][comma][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 232,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Carnivore Bash",
      "movesequence": "[fp][comma][bp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 233,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Deadly Venom",
      "movesequence": "[fp][comma][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 234,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Just Hatched",
      "movesequence": "[bp][comma][forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 235,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Hybrid Blast",
      "movesequence": "[bp][comma][fk][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 236,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Hybrid Crush",
      "movesequence": "[bp][comma][forward][plus][fk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 237,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Evolution",
      "movesequence": "[forward][plus][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 238,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Amphibian Charge",
      "movesequence": "[fk][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 239,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Slithered",
      "movesequence": "[fk][comma][bp][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 240,
      "warriorid": 7,
      "groupid": 2,
      "movename": "Swamp Strikes",
      "movesequence": "[forward][plus][fk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 241,
      "warriorid": 7,
      "groupid": 3,
      "movename": "Carnivorous",
      "movesequence": "[fp][comma][bp][comma][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 242,
      "warriorid": 7,
      "groupid": 3,
      "movename": "Nocturnal",
      "movesequence": "[forward][plus][bp][comma][backward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 243,
      "warriorid": 7,
      "groupid": 3,
      "movename": "Aquatic",
      "movesequence": "[fk][comma][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 244,
      "warriorid": 7,
      "groupid": 3,
      "movename": "Shedding Skin",
      "movesequence": "[backward][forward][bp][plus][block][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 245,
      "warriorid": 7,
      "groupid": 4,
      "movename": "Toxic",
      "movesequence": "[fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 246,
      "warriorid": 7,
      "groupid": 4,
      "movename": "Ravenous",
      "movesequence": "[fp][comma][bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 247,
      "warriorid": 7,
      "groupid": 4,
      "movename": "Scaly Serpent",
      "movesequence": "[bp][comma][forward][plus][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 248,
      "warriorid": 7,
      "groupid": 4,
      "movename": "Bad Blood",
      "movesequence": "[forward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 249,
      "warriorid": 7,
      "groupid": 4,
      "movename": "Anguish",
      "movesequence": "[fk][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 250,
      "warriorid": 7,
      "groupid": 5,
      "movename": "Slow Force Ball",
      "movesequence": "[backward][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 251,
      "warriorid": 7,
      "groupid": 5,
      "movename": "Fast Force Ball",
      "movesequence": "[backward][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 252,
      "warriorid": 7,
      "groupid": 5,
      "movename": "Slide",
      "movesequence": "[backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 253,
      "warriorid": 7,
      "groupid": 5,
      "movename": "Acid Hand",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 254,
      "warriorid": 7,
      "groupid": 5,
      "movename": "Invisibility",
      "movesequence": "[down][up][bk]",
      "comment": ""
    },
    {
      "moveid": 255,
      "warriorid": 7,
      "groupid": 5,
      "movename": "Acid Spit",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 256,
      "warriorid": 7,
      "groupid": 5,
      "movename": "Elbow Dash",
      "movesequence": "[backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 257,
      "warriorid": 7,
      "groupid": 6,
      "movename": "Slow Mega Ball",
      "movesequence": "[backward][backward][fp][plus][block]",
      "comment": "Hold [fp] To charge"
    },
    {
      "moveid": 258,
      "warriorid": 7,
      "groupid": 6,
      "movename": "Fast Mega Ball",
      "movesequence": "[backward][backward][fk][plus][block]",
      "comment": "Hold [fk] To charge"
    },
    {
      "moveid": 259,
      "warriorid": 7,
      "groupid": 6,
      "movename": "Slime Trail",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 260,
      "warriorid": 7,
      "groupid": 6,
      "movename": "Reptilian Hand",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 261,
      "warriorid": 7,
      "groupid": 6,
      "movename": "Vanish",
      "movesequence": "[down][up][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 262,
      "warriorid": 7,
      "groupid": 6,
      "movename": "Acid Stream",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 263,
      "warriorid": 7,
      "groupid": 6,
      "movename": "Reptilian Elbow",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 264,
      "warriorid": 7,
      "groupid": 7,
      "movename": "Tricky Lizard",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 265,
      "warriorid": 7,
      "groupid": 8,
      "movename": "Acid Yak",
      "movesequence": "[forward][forward][down][up][fk]",
      "comment": "Sweep"
    },
    {
      "moveid": 266,
      "warriorid": 7,
      "groupid": 8,
      "movename": "Weight Loss",
      "movesequence": "[down][down][forward][backward][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 267,
      "warriorid": 7,
      "groupid": 8,
      "movename": "Klassic Fatality",
      "movesequence": "[backward][backward][forward][down][block]",
      "comment": "Jump"
    },
    {
      "moveid": 268,
      "warriorid": 7,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][down][down][block]",
      "comment": "Varies"
    },
    {
      "moveid": 269,
      "warriorid": 7,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[backward][forward][backward][down][fk]",
      "comment": "Jump"
    },
    {
      "moveid": 270,
      "warriorid": 8,
      "groupid": 1,
      "movename": "Fan Slice",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 271,
      "warriorid": 8,
      "groupid": 1,
      "movename": "Uprise",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 272,
      "warriorid": 8,
      "groupid": 1,
      "movename": "Shin Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 273,
      "warriorid": 8,
      "groupid": 1,
      "movename": "Fan Stab",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 274,
      "warriorid": 8,
      "groupid": 1,
      "movename": "Hop Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 275,
      "warriorid": 8,
      "groupid": 1,
      "movename": "Spin Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 276,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Royal Pain",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 277,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Dignified",
      "movesequence": "[backward][plus][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 278,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Majestic",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 279,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Noble Lift",
      "movesequence": "[forward][plus][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 280,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Regal Assault",
      "movesequence": "[fk][comma][fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 281,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Blue Blood",
      "movesequence": "[backward][plus][fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 282,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Power Intrusion",
      "movesequence": "[forward][plus][fk][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 283,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Deadly Rush",
      "movesequence": "[forward][plus][bk][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 284,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Pure Kicks",
      "movesequence": "[forward][plus][bk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 285,
      "warriorid": 8,
      "groupid": 2,
      "movename": "Deception",
      "movesequence": "[forward][plus][bk][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 286,
      "warriorid": 8,
      "groupid": 3,
      "movename": "Truth Be Told",
      "movesequence": "[forward][plus][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 287,
      "warriorid": 8,
      "groupid": 3,
      "movename": "Effortless",
      "movesequence": "[forward][plus][fk][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 288,
      "warriorid": 8,
      "groupid": 3,
      "movename": "Big Fan",
      "movesequence": "[backward][backward][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 289,
      "warriorid": 8,
      "groupid": 4,
      "movename": "Pretty Princess",
      "movesequence": "[backward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 290,
      "warriorid": 8,
      "groupid": 4,
      "movename": "Mesmerizing",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 291,
      "warriorid": 8,
      "groupid": 4,
      "movename": "Magnificent",
      "movesequence": "[fk][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 292,
      "warriorid": 8,
      "groupid": 4,
      "movename": "Disrespect",
      "movesequence": "[forward][plus][fk][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 293,
      "warriorid": 8,
      "groupid": 5,
      "movename": "Fan Toss",
      "movesequence": "[down][forward][fp]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 294,
      "warriorid": 8,
      "groupid": 5,
      "movename": "Upraise",
      "movesequence": "[backward][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 295,
      "warriorid": 8,
      "groupid": 5,
      "movename": "Cutting Fan",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 296,
      "warriorid": 8,
      "groupid": 5,
      "movename": "Square Boost",
      "movesequence": "[down][backward][fp]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 297,
      "warriorid": 8,
      "groupid": 5,
      "movename": "Pretty Kick",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 298,
      "warriorid": 8,
      "groupid": 5,
      "movename": "Fake Out Kick",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 299,
      "warriorid": 8,
      "groupid": 6,
      "movename": "Charged Fan",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": "Hold [fp] To charge"
    },
    {
      "moveid": 300,
      "warriorid": 8,
      "groupid": 6,
      "movename": "Uplift",
      "movesequence": "[backward][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 301,
      "warriorid": 8,
      "groupid": 6,
      "movename": "Fan Dice",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 302,
      "warriorid": 8,
      "groupid": 6,
      "movename": "Square Wave",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 303,
      "warriorid": 8,
      "groupid": 6,
      "movename": "Pretty Legs",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 304,
      "warriorid": 8,
      "groupid": 7,
      "movename": "Fan-Tastic",
      "movesequence": "[stance][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 305,
      "warriorid": 8,
      "groupid": 8,
      "movename": "Fan Opener",
      "movesequence": "[down][down][backward][forward][bp]",
      "comment": "Sweep"
    },
    {
      "moveid": 306,
      "warriorid": 8,
      "groupid": 8,
      "movename": "Splitting Headache",
      "movesequence": "[forward][down][forward][backward][fk]",
      "comment": "Sweep"
    },
    {
      "moveid": 307,
      "warriorid": 8,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][down][down][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 308,
      "warriorid": 8,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[forward][down][forward][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 309,
      "warriorid": 9,
      "groupid": 1,
      "movename": "Charge Palm (Hold)",
      "movesequence": "[backward][plus][bp]",
      "comment": "Can be dash canceled"
    },
    {
      "moveid": 310,
      "warriorid": 9,
      "groupid": 1,
      "movename": "2-Hit Elbow",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 311,
      "warriorid": 9,
      "groupid": 1,
      "movename": "Pop Up",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 312,
      "warriorid": 9,
      "groupid": 1,
      "movename": "Rising Knee",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 313,
      "warriorid": 9,
      "groupid": 1,
      "movename": "Axe Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 314,
      "warriorid": 9,
      "groupid": 2,
      "movename": "Out Take",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 315,
      "warriorid": 9,
      "groupid": 2,
      "movename": "Showtime",
      "movesequence": "[fp][comma][fp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 316,
      "warriorid": 9,
      "groupid": 2,
      "movename": "Stand In",
      "movesequence": "[fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 317,
      "warriorid": 9,
      "groupid": 2,
      "movename": "Cross Cutting",
      "movesequence": "[fp][comma][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 318,
      "warriorid": 9,
      "groupid": 2,
      "movename": "Widescreen",
      "movesequence": "[bp][comma][fp][comma][forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 319,
      "warriorid": 9,
      "groupid": 2,
      "movename": "Director's Cut",
      "movesequence": "[bp][comma][fp][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 320,
      "warriorid": 9,
      "groupid": 2,
      "movename": "Take Two",
      "movesequence": "[forward][plus][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 321,
      "warriorid": 9,
      "groupid": 2,
      "movename": "Money Shot",
      "movesequence": "[bk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 322,
      "warriorid": 9,
      "groupid": 2,
      "movename": "That's The Ticket",
      "movesequence": "[forward][plus][fk][comma][fk][comma][backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 323,
      "warriorid": 9,
      "groupid": 3,
      "movename": "Cliffhanger",
      "movesequence": "[backward][plus](hold)[bp][comma][tag]",
      "comment": "Requires a full charge"
    },
    {
      "moveid": 324,
      "warriorid": 9,
      "groupid": 3,
      "movename": "Fade Out",
      "movesequence": "[forward][plus][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 325,
      "warriorid": 9,
      "groupid": 3,
      "movename": "Bootleg",
      "movesequence": "[backward][plus][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 326,
      "warriorid": 9,
      "groupid": 3,
      "movename": "Stunt Double",
      "movesequence": "[bp][comma][fp][comma][forward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 327,
      "warriorid": 9,
      "groupid": 4,
      "movename": "Cameo",
      "movesequence": "[fp][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 328,
      "warriorid": 9,
      "groupid": 4,
      "movename": "Double Feature",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 329,
      "warriorid": 9,
      "groupid": 4,
      "movename": "Stand-In",
      "movesequence": "[forward][plus][fk][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 330,
      "warriorid": 9,
      "groupid": 5,
      "movename": "Low Forceball",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 331,
      "warriorid": 9,
      "groupid": 5,
      "movename": "High Forceball",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 332,
      "warriorid": 9,
      "groupid": 5,
      "movename": "Flipkick",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 333,
      "warriorid": 9,
      "groupid": 5,
      "movename": "Shadow Kick",
      "movesequence": "[backward][forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 334,
      "warriorid": 9,
      "groupid": 5,
      "movename": "Nut Punch",
      "movesequence": "[backward][down][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 335,
      "warriorid": 9,
      "groupid": 6,
      "movename": "Double Low Ball",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 336,
      "warriorid": 9,
      "groupid": 6,
      "movename": "Double High Ball",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 337,
      "warriorid": 9,
      "groupid": 6,
      "movename": "Ultra Flipkick",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 338,
      "warriorid": 9,
      "groupid": 6,
      "movename": "Eclipse Kick",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 339,
      "warriorid": 9,
      "groupid": 6,
      "movename": "Nutcracker",
      "movesequence": "[backward][down][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 340,
      "warriorid": 9,
      "groupid": 7,
      "movename": "Ball Buster",
      "movesequence": "[stance][plus][block]",
      "comment": "Counter Attack"
    },
    {
      "moveid": 341,
      "warriorid": 9,
      "groupid": 8,
      "movename": "Heads Up!",
      "movesequence": "[forward][forward][backward][down][fk]",
      "comment": "Touching"
    },
    {
      "moveid": 342,
      "warriorid": 9,
      "groupid": 8,
      "movename": "And The Winner Is...",
      "movesequence": "[down][forward][down][forward][bk]",
      "comment": "Sweep"
    },
    {
      "moveid": 343,
      "warriorid": 9,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][backward][forward][block]",
      "comment": "Varies"
    },
    {
      "moveid": 344,
      "warriorid": 9,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[forward][backward][forward][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 345,
      "warriorid": 10,
      "groupid": 1,
      "movename": "Staff Strikes",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 346,
      "warriorid": 10,
      "groupid": 1,
      "movename": "Rising Pole",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 347,
      "warriorid": 10,
      "groupid": 1,
      "movename": "Upward Thrust",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 348,
      "warriorid": 10,
      "groupid": 1,
      "movename": "Gut Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 349,
      "warriorid": 10,
      "groupid": 1,
      "movename": "Pole Vault",
      "movesequence": "[up][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 350,
      "warriorid": 10,
      "groupid": 2,
      "movename": "Pole Check",
      "movesequence": "[fp][comma][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 351,
      "warriorid": 10,
      "groupid": 2,
      "movename": "Jade Charge",
      "movesequence": "[backward][plus][fp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 352,
      "warriorid": 10,
      "groupid": 2,
      "movename": "Bad Girl",
      "movesequence": "[bp][comma][fk][comma][forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 353,
      "warriorid": 10,
      "groupid": 2,
      "movename": "Edenian Rush",
      "movesequence": "[forward][plus][bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 354,
      "warriorid": 10,
      "groupid": 2,
      "movename": "Betrayal",
      "movesequence": "[fk][comma][bk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 355,
      "warriorid": 10,
      "groupid": 2,
      "movename": "Assassin Strikes",
      "movesequence": "[backward][plus][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 356,
      "warriorid": 10,
      "groupid": 2,
      "movename": "Polecat",
      "movesequence": "[bk][comma][forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 357,
      "warriorid": 10,
      "groupid": 3,
      "movename": "Untameable",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 358,
      "warriorid": 10,
      "groupid": 3,
      "movename": "Pole Pain",
      "movesequence": "[up][plus][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 359,
      "warriorid": 10,
      "groupid": 4,
      "movename": "After You",
      "movesequence": "[fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 360,
      "warriorid": 10,
      "groupid": 4,
      "movename": "Likewise",
      "movesequence": "[bp][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 361,
      "warriorid": 10,
      "groupid": 4,
      "movename": "Edenian Tag",
      "movesequence": "[forward][plus][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 362,
      "warriorid": 10,
      "groupid": 4,
      "movename": "Distrust",
      "movesequence": "[fk][comma][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 363,
      "warriorid": 10,
      "groupid": 5,
      "movename": "Boomerang",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 364,
      "warriorid": 10,
      "groupid": 5,
      "movename": "Boomerang Up",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 365,
      "warriorid": 10,
      "groupid": 5,
      "movename": "Boomerang Down",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 366,
      "warriorid": 10,
      "groupid": 5,
      "movename": "Shadow Kick",
      "movesequence": "[down][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 367,
      "warriorid": 10,
      "groupid": 5,
      "movename": "Shadow Flash",
      "movesequence": "[backward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 368,
      "warriorid": 10,
      "groupid": 5,
      "movename": "Staff Overhead",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 369,
      "warriorid": 10,
      "groupid": 5,
      "movename": "Staff Grab",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 370,
      "warriorid": 10,
      "groupid": 6,
      "movename": "Reboomerang",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 371,
      "warriorid": 10,
      "groupid": 6,
      "movename": "Boomerang Up",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 372,
      "warriorid": 10,
      "groupid": 6,
      "movename": "Boomerang Down",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 373,
      "warriorid": 10,
      "groupid": 6,
      "movename": "Eclipse Kick",
      "movesequence": "[down][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 374,
      "warriorid": 10,
      "groupid": 6,
      "movename": "Shadow Glow",
      "movesequence": "[backward][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 375,
      "warriorid": 10,
      "groupid": 6,
      "movename": "Staff Smash",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 376,
      "warriorid": 10,
      "groupid": 6,
      "movename": "Staff Slam",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 377,
      "warriorid": 10,
      "groupid": 7,
      "movename": "Staff Buster",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 378,
      "warriorid": 10,
      "groupid": 8,
      "movename": "Head-A-Rang",
      "movesequence": "[up][up][down][forward][fp]",
      "comment": "Fullscreen"
    },
    {
      "moveid": 379,
      "warriorid": 10,
      "groupid": 8,
      "movename": "Half Mast",
      "movesequence": "[backward][down][backward][down][bk]",
      "comment": "Sweep"
    },
    {
      "moveid": 380,
      "warriorid": 10,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[backward][forward][down][block]",
      "comment": "Varies"
    },
    {
      "moveid": 381,
      "warriorid": 10,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][down][forward][down][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 382,
      "warriorid": 11,
      "groupid": 1,
      "movename": "Side Chop",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 383,
      "warriorid": 11,
      "groupid": 1,
      "movename": "Leaping Sai",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 384,
      "warriorid": 11,
      "groupid": 1,
      "movename": "Sai Impale",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 385,
      "warriorid": 11,
      "groupid": 1,
      "movename": "Lunge Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 386,
      "warriorid": 11,
      "groupid": 1,
      "movename": "Sneaky Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 387,
      "warriorid": 11,
      "groupid": 1,
      "movename": "Splits",
      "movesequence": "[up][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 388,
      "warriorid": 11,
      "groupid": 2,
      "movename": "Smacked Around",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 389,
      "warriorid": 11,
      "groupid": 2,
      "movename": "Boot Down",
      "movesequence": "[backward][plus][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 390,
      "warriorid": 11,
      "groupid": 2,
      "movename": "Bones",
      "movesequence": "[bp][comma][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 391,
      "warriorid": 11,
      "groupid": 2,
      "movename": "Pretty Slasher",
      "movesequence": "[forward][plus][fk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 392,
      "warriorid": 11,
      "groupid": 2,
      "movename": "Killer Heels",
      "movesequence": "[fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 393,
      "warriorid": 11,
      "groupid": 2,
      "movename": "Getaway Sticks",
      "movesequence": "[backward][plus][fk][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 394,
      "warriorid": 11,
      "groupid": 2,
      "movename": "Friendly Kiss",
      "movesequence": "[bk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 395,
      "warriorid": 11,
      "groupid": 3,
      "movename": "Malice",
      "movesequence": "[up][plus][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 396,
      "warriorid": 11,
      "groupid": 4,
      "movename": "Malevolence",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 397,
      "warriorid": 11,
      "groupid": 4,
      "movename": "Fiendish",
      "movesequence": "[bp][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 398,
      "warriorid": 11,
      "groupid": 5,
      "movename": "Sai Blast",
      "movesequence": "[backward][forward][fp]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 399,
      "warriorid": 11,
      "groupid": 5,
      "movename": "Teleport Drop",
      "movesequence": "[forward][forward][fk]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 400,
      "warriorid": 11,
      "groupid": 5,
      "movename": "Leaping Neckbite",
      "movesequence": "[backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 401,
      "warriorid": 11,
      "groupid": 5,
      "movename": "Ball Roll",
      "movesequence": "[backward][down][bk]",
      "comment": ""
    },
    {
      "moveid": 402,
      "warriorid": 11,
      "groupid": 6,
      "movename": "Sai Bursts",
      "movesequence": "[backward][forward][fp][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 403,
      "warriorid": 11,
      "groupid": 6,
      "movename": "Tricky Teleport",
      "movesequence": "[forward][forward][fk][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 404,
      "warriorid": 11,
      "groupid": 6,
      "movename": "Leaping Lunch",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 405,
      "warriorid": 11,
      "groupid": 6,
      "movename": "Smashing Roll",
      "movesequence": "[backward][down][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 406,
      "warriorid": 11,
      "groupid": 7,
      "movename": "Femme Fatale",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 407,
      "warriorid": 11,
      "groupid": 8,
      "movename": "Be Mine",
      "movesequence": "[backward][forward][backward][forward][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 408,
      "warriorid": 11,
      "groupid": 8,
      "movename": "Rip Off",
      "movesequence": "[backward][forward][backward][down][fk]",
      "comment": "Jump"
    },
    {
      "moveid": 409,
      "warriorid": 11,
      "groupid": 8,
      "movename": "Stage fatality",
      "movesequence": "[down][down][down][fp]",
      "comment": "Varies"
    },
    {
      "moveid": 410,
      "warriorid": 11,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][down][forward][backward][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 411,
      "warriorid": 12,
      "groupid": 1,
      "movename": "Knife Stab",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 412,
      "warriorid": 12,
      "groupid": 1,
      "movename": "Big Chop",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 413,
      "warriorid": 12,
      "groupid": 1,
      "movename": "Neck Stab",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 414,
      "warriorid": 12,
      "groupid": 1,
      "movename": "Toe Stomp",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 415,
      "warriorid": 12,
      "groupid": 2,
      "movename": "Blade And Edge",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 416,
      "warriorid": 12,
      "groupid": 2,
      "movename": "Axe Blast",
      "movesequence": "[fp][comma][bp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 417,
      "warriorid": 12,
      "groupid": 2,
      "movename": "Dagger Stab",
      "movesequence": "[backward][plus][fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 418,
      "warriorid": 12,
      "groupid": 2,
      "movename": "Deadly Dance",
      "movesequence": "[fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 419,
      "warriorid": 12,
      "groupid": 2,
      "movename": "New Earth",
      "movesequence": "[bp][comma][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 420,
      "warriorid": 12,
      "groupid": 2,
      "movename": "Tomahawk Smash",
      "movesequence": "[backward][plus][bp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 421,
      "warriorid": 12,
      "groupid": 2,
      "movename": "Full Moon",
      "movesequence": "[forward][plus][fk][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 422,
      "warriorid": 12,
      "groupid": 2,
      "movename": "Spirit Tracks",
      "movesequence": "[forward][plus][fk][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 423,
      "warriorid": 12,
      "groupid": 3,
      "movename": "Waning Moon",
      "movesequence": "[forward][plus][fk][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 424,
      "warriorid": 12,
      "groupid": 3,
      "movename": "Rising Hawk",
      "movesequence": "[down][forward][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 425,
      "warriorid": 12,
      "groupid": 3,
      "movename": "Diving Eagle",
      "movesequence": "[down][forward][fp][plus][block][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 426,
      "warriorid": 12,
      "groupid": 4,
      "movename": "Razor's Edge",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 427,
      "warriorid": 12,
      "groupid": 4,
      "movename": "Falcon Swap",
      "movesequence": "[fp][comma][bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 428,
      "warriorid": 12,
      "groupid": 4,
      "movename": "Deadly Talon",
      "movesequence": "[bp][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 429,
      "warriorid": 12,
      "groupid": 4,
      "movename": "Howling Wolf",
      "movesequence": "[backward][plus][bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 430,
      "warriorid": 12,
      "groupid": 4,
      "movename": "Bull and Bear",
      "movesequence": "[forward][plus][fk][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 431,
      "warriorid": 12,
      "groupid": 5,
      "movename": "Shoulder",
      "movesequence": "[forward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 432,
      "warriorid": 12,
      "groupid": 5,
      "movename": "Lightning",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 433,
      "warriorid": 12,
      "groupid": 5,
      "movename": "Arrow Show",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 434,
      "warriorid": 12,
      "groupid": 5,
      "movename": "Reflect",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 435,
      "warriorid": 12,
      "groupid": 5,
      "movename": "Axe Swing",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 436,
      "warriorid": 12,
      "groupid": 5,
      "movename": "Choke",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 437,
      "warriorid": 12,
      "groupid": 6,
      "movename": "Power Charge",
      "movesequence": "[forward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 438,
      "warriorid": 12,
      "groupid": 6,
      "movename": "Thunder Storm",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 439,
      "warriorid": 12,
      "groupid": 6,
      "movename": "Multi-Arrow",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 440,
      "warriorid": 12,
      "groupid": 6,
      "movename": "Absorb",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 441,
      "warriorid": 12,
      "groupid": 6,
      "movename": "Tomahawk Bash",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 442,
      "warriorid": 12,
      "groupid": 6,
      "movename": "Strangle",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 443,
      "warriorid": 12,
      "groupid": 7,
      "movename": "Ancestors Call",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 444,
      "warriorid": 12,
      "groupid": 8,
      "movename": "Little Off The Top",
      "movesequence": "[down][forward][down][backward][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 445,
      "warriorid": 12,
      "groupid": 8,
      "movename": "Ascension",
      "movesequence": "[down][down][forward][backward][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 446,
      "warriorid": 12,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][down][down][block]",
      "comment": "Varies"
    },
    {
      "moveid": 447,
      "warriorid": 12,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[forward][backward][forward][backward][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 448,
      "warriorid": 13,
      "groupid": 1,
      "movename": "Yank",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 449,
      "warriorid": 13,
      "groupid": 1,
      "movename": "Blast Overhead",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 450,
      "warriorid": 13,
      "groupid": 1,
      "movename": "Tooth and Nail",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 451,
      "warriorid": 13,
      "groupid": 1,
      "movename": "Side Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 452,
      "warriorid": 13,
      "groupid": 1,
      "movename": "Hop Kick",
      "movesequence": "[up][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 453,
      "warriorid": 13,
      "groupid": 2,
      "movename": "See Saw",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 454,
      "warriorid": 13,
      "groupid": 2,
      "movename": "Steel Fists",
      "movesequence": "[fp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 455,
      "warriorid": 13,
      "groupid": 2,
      "movename": "Power Plant",
      "movesequence": "[fp][comma][bp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 456,
      "warriorid": 13,
      "groupid": 2,
      "movename": "Mustard",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 457,
      "warriorid": 13,
      "groupid": 2,
      "movename": "Saw Enough",
      "movesequence": "[bp][comma][bp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 458,
      "warriorid": 13,
      "groupid": 2,
      "movename": "Kombat Boots",
      "movesequence": "[fk][comma][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 459,
      "warriorid": 13,
      "groupid": 2,
      "movename": "Cyber Beatdown",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp][comma][bp]",
      "comment": "Must be pressed rapidly"
    },
    {
      "moveid": 460,
      "warriorid": 13,
      "groupid": 3,
      "movename": "Automation",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 461,
      "warriorid": 13,
      "groupid": 4,
      "movename": "Number Cruncher",
      "movesequence": "[backward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 462,
      "warriorid": 13,
      "groupid": 4,
      "movename": "High Tech",
      "movesequence": "[fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 463,
      "warriorid": 13,
      "groupid": 4,
      "movename": "Short Circuit",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 464,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Bomb (Close)",
      "movesequence": "[backward][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 465,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Bomb (Medium)",
      "movesequence": "[forward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 466,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Bomb (Far)",
      "movesequence": "[backward][backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 467,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Net",
      "movesequence": "[backward][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 468,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Teleport",
      "movesequence": "[down][backward][fp]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 469,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Buzzsaw",
      "movesequence": "[backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 470,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Reverse Kick",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 471,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Ragdoll",
      "movesequence": "[down][forward][fk]*[throw]",
      "comment": "* Press immediately"
    },
    {
      "moveid": 472,
      "warriorid": 13,
      "groupid": 5,
      "movename": "Anti-Air",
      "movesequence": "[down][forward][fp]",
      "comment": "Victim must be in the air"
    },
    {
      "moveid": 473,
      "warriorid": 13,
      "groupid": 6,
      "movename": "Sticky Bomb",
      "movesequence": "[backward][backward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 474,
      "warriorid": 13,
      "groupid": 6,
      "movename": "Electro Net",
      "movesequence": "[backward][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 475,
      "warriorid": 13,
      "groupid": 6,
      "movename": "Bangport",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 476,
      "warriorid": 13,
      "groupid": 6,
      "movename": "Saw Blade",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 477,
      "warriorid": 13,
      "groupid": 6,
      "movename": "Donkey Kick",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 478,
      "warriorid": 13,
      "groupid": 6,
      "movename": "Ragdolls",
      "movesequence": "[down][forward][fk][plus][block][comma]*[throw]",
      "comment": "* Press immediately"
    },
    {
      "moveid": 479,
      "warriorid": 13,
      "groupid": 6,
      "movename": "Power Anti-Air",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": "Victim must be in the air"
    },
    {
      "moveid": 480,
      "warriorid": 13,
      "groupid": 7,
      "movename": "Cyberdriver",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 481,
      "warriorid": 13,
      "groupid": 8,
      "movename": "Buzz Kill",
      "movesequence": "[forward][down][forward][backward][bp]",
      "comment": "Touching"
    },
    {
      "moveid": 482,
      "warriorid": 13,
      "groupid": 8,
      "movename": "Nothing But Net",
      "movesequence": "[backward][down][backward][forward][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 483,
      "warriorid": 13,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][up][block]",
      "comment": "Varies"
    },
    {
      "moveid": 484,
      "warriorid": 13,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][forward][backward][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 485,
      "warriorid": 14,
      "groupid": 1,
      "movename": "Saibot Strike",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 486,
      "warriorid": 14,
      "groupid": 1,
      "movename": "Hook Punch",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 487,
      "warriorid": 14,
      "groupid": 1,
      "movename": "Point Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 488,
      "warriorid": 14,
      "groupid": 1,
      "movename": "Snap Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 489,
      "warriorid": 14,
      "groupid": 2,
      "movename": "Saibot Blast",
      "movesequence": "[fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 490,
      "warriorid": 14,
      "groupid": 2,
      "movename": "Sneaky Saibot",
      "movesequence": "[backward][plus][fp][comma][bp][comma][forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 491,
      "warriorid": 14,
      "groupid": 2,
      "movename": "Evil Twin",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 492,
      "warriorid": 14,
      "groupid": 2,
      "movename": "Assassinate",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 493,
      "warriorid": 14,
      "groupid": 2,
      "movename": "No Compassion",
      "movesequence": "[backward][plus][bp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 494,
      "warriorid": 14,
      "groupid": 2,
      "movename": "Reincarnated",
      "movesequence": "[forward][plus][fk][comma][fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 495,
      "warriorid": 14,
      "groupid": 2,
      "movename": "Possessed",
      "movesequence": "[forward][plus][bk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 496,
      "warriorid": 14,
      "groupid": 3,
      "movename": "Mysterious",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 497,
      "warriorid": 14,
      "groupid": 4,
      "movename": "Entangled",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 498,
      "warriorid": 14,
      "groupid": 4,
      "movename": "Warped Rush",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 499,
      "warriorid": 14,
      "groupid": 4,
      "movename": "Tragic",
      "movesequence": "[backward][plus][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 500,
      "warriorid": 14,
      "groupid": 4,
      "movename": "The Shadow",
      "movesequence": "[forward][plus][fk][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 501,
      "warriorid": 14,
      "groupid": 5,
      "movename": "Ghostball",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 502,
      "warriorid": 14,
      "groupid": 5,
      "movename": "Blackhole (Above)",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 503,
      "warriorid": 14,
      "groupid": 5,
      "movename": "Blackhole (Behind)",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 504,
      "warriorid": 14,
      "groupid": 5,
      "movename": "Blackhole (In Front)",
      "movesequence": "[down][forward][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 505,
      "warriorid": 14,
      "groupid": 5,
      "movename": "Teleport Slam",
      "movesequence": "[down][up]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 506,
      "warriorid": 14,
      "groupid": 5,
      "movename": "Shadow Charge",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 507,
      "warriorid": 14,
      "groupid": 5,
      "movename": "Shadow Upknee",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 508,
      "warriorid": 14,
      "groupid": 5,
      "movename": "Shadow Slide",
      "movesequence": "[backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 509,
      "warriorid": 14,
      "groupid": 6,
      "movename": "Spiritball",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 510,
      "warriorid": 14,
      "groupid": 6,
      "movename": "Darkness (Above)",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 511,
      "warriorid": 14,
      "groupid": 6,
      "movename": "Darkness (Behind)",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 512,
      "warriorid": 14,
      "groupid": 6,
      "movename": "Darkness (In Front)",
      "movesequence": "[down][forward][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 513,
      "warriorid": 14,
      "groupid": 6,
      "movename": "Teleport Smash",
      "movesequence": "[down][up][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 514,
      "warriorid": 14,
      "groupid": 6,
      "movename": "Saibot Charge",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 515,
      "warriorid": 14,
      "groupid": 6,
      "movename": "Saibot Upknee",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 516,
      "warriorid": 14,
      "groupid": 6,
      "movename": "Saibot Slide",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 517,
      "warriorid": 14,
      "groupid": 7,
      "movename": "Together Again",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 518,
      "warriorid": 14,
      "groupid": 8,
      "movename": "Make a Wish",
      "movesequence": "[backward][forward][backward][down][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 519,
      "warriorid": 14,
      "groupid": 8,
      "movename": "As One",
      "movesequence": "[down][down][backward][down][block]",
      "comment": "Jump"
    },
    {
      "moveid": 520,
      "warriorid": 14,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][down][forward][block]",
      "comment": "Varies"
    },
    {
      "moveid": 521,
      "warriorid": 14,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[forward][up][forward][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 522,
      "warriorid": 15,
      "groupid": 1,
      "movename": "Jaw Chop",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 523,
      "warriorid": 15,
      "groupid": 1,
      "movename": "Step Strike",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 524,
      "warriorid": 15,
      "groupid": 1,
      "movename": "Hook Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 525,
      "warriorid": 15,
      "groupid": 1,
      "movename": "Spin Kicks",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 526,
      "warriorid": 15,
      "groupid": 2,
      "movename": "Ablaze",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 527,
      "warriorid": 15,
      "groupid": 2,
      "movename": "Smoldering",
      "movesequence": "[fp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 528,
      "warriorid": 15,
      "groupid": 2,
      "movename": "Red-Hot",
      "movesequence": "[backward][plus][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 529,
      "warriorid": 15,
      "groupid": 2,
      "movename": "Smokin",
      "movesequence": "[backward][plus][bp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 530,
      "warriorid": 15,
      "groupid": 2,
      "movename": "Rekindle",
      "movesequence": "[bp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 531,
      "warriorid": 15,
      "groupid": 2,
      "movename": "Combustion",
      "movesequence": "[fk][comma][down][plus][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 532,
      "warriorid": 15,
      "groupid": 2,
      "movename": "On Fire",
      "movesequence": "[fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 533,
      "warriorid": 15,
      "groupid": 3,
      "movename": "Ashes to Ashes",
      "movesequence": "[fk][comma][down][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 534,
      "warriorid": 15,
      "groupid": 3,
      "movename": "Dust to Dust",
      "movesequence": "[fk][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 535,
      "warriorid": 15,
      "groupid": 4,
      "movename": "Incinerate",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 536,
      "warriorid": 15,
      "groupid": 4,
      "movename": "Immolation",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 537,
      "warriorid": 15,
      "groupid": 4,
      "movename": "Ignite",
      "movesequence": "[fk][comma][down][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 538,
      "warriorid": 15,
      "groupid": 5,
      "movename": "Shake",
      "movesequence": "[backward][forward][fp]",
      "comment": "Hold [fp] To charge"
    },
    {
      "moveid": 539,
      "warriorid": 15,
      "groupid": 5,
      "movename": "Smoke Cloud",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 540,
      "warriorid": 15,
      "groupid": 5,
      "movename": "Air Tthrow",
      "movesequence": "[throw]",
      "comment": "While in the air"
    },
    {
      "moveid": 541,
      "warriorid": 15,
      "groupid": 5,
      "movename": "Teleport",
      "movesequence": "[down][backward][bk]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 542,
      "warriorid": 15,
      "groupid": 5,
      "movename": "Invisibility",
      "movesequence": "[down][up][fk]",
      "comment": ""
    },
    {
      "moveid": 543,
      "warriorid": 15,
      "groupid": 5,
      "movename": "Smoke Away",
      "movesequence": "[forward][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 544,
      "warriorid": 15,
      "groupid": 5,
      "movename": "Smoke Towards",
      "movesequence": "[backward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 545,
      "warriorid": 15,
      "groupid": 6,
      "movename": "Vibration",
      "movesequence": "[backward][forward][fp][plus][block]",
      "comment": "Hold [fp] To charge"
    },
    {
      "moveid": 546,
      "warriorid": 15,
      "groupid": 6,
      "movename": "Smoke Bomb",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 547,
      "warriorid": 15,
      "groupid": 6,
      "movename": "Smokeport",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 548,
      "warriorid": 15,
      "groupid": 6,
      "movename": "Vanish",
      "movesequence": "[down][up][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 549,
      "warriorid": 15,
      "groupid": 6,
      "movename": "Phase Away",
      "movesequence": "[forward][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 550,
      "warriorid": 15,
      "groupid": 6,
      "movename": "Phase Towards",
      "movesequence": "[backward][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 551,
      "warriorid": 15,
      "groupid": 7,
      "movename": "Burn Out",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 552,
      "warriorid": 15,
      "groupid": 8,
      "movename": "Smoked Out",
      "movesequence": "[backward][forward][backward][forward][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 553,
      "warriorid": 15,
      "groupid": 8,
      "movename": "Tremor",
      "movesequence": "[backward][backward][down][forward][bp]",
      "comment": "Sweep"
    },
    {
      "moveid": 554,
      "warriorid": 15,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][up][up][fp]",
      "comment": "Varies"
    },
    {
      "moveid": 555,
      "warriorid": 15,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][backward][down][forward][down]",
      "comment": "Jump"
    },
    {
      "moveid": 556,
      "warriorid": 16,
      "groupid": 1,
      "movename": "Afterburn",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 557,
      "warriorid": 16,
      "groupid": 1,
      "movename": "Gut Crusher",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 558,
      "warriorid": 16,
      "groupid": 1,
      "movename": "Toe Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 559,
      "warriorid": 16,
      "groupid": 1,
      "movename": "Rising Knee",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 560,
      "warriorid": 16,
      "groupid": 1,
      "movename": "Chargine Elbow",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 561,
      "warriorid": 16,
      "groupid": 10,
      "movename": "Toe Kick",
      "movesequence": "[bk]",
      "comment": ""
    },
    {
      "moveid": 562,
      "warriorid": 16,
      "groupid": 10,
      "movename": "Sneaky Kicks",
      "movesequence": "[fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 563,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Artificial Intelligence",
      "movesequence": "[fp][comma][fp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 564,
      "warriorid": 16,
      "groupid": 2,
      "movename": "System Overload",
      "movesequence": "[fp][comma][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 565,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Hard Crash",
      "movesequence": "[fp][comma][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 566,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Malfunction",
      "movesequence": "[forward][plus][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 567,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Fusion Force",
      "movesequence": "[fp][comma][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 568,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Access Denied",
      "movesequence": "[fp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 569,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Demolition",
      "movesequence": "[bp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 570,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Drive Power",
      "movesequence": "[backward][plus][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 571,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Run Down",
      "movesequence": "[backward][plus][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 572,
      "warriorid": 16,
      "groupid": 2,
      "movename": "User Error",
      "movesequence": "[forward][plus][bk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 573,
      "warriorid": 16,
      "groupid": 2,
      "movename": "Fatal Error",
      "movesequence": "[forward][plus][bk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 574,
      "warriorid": 16,
      "groupid": 3,
      "movename": "Intersect",
      "movesequence": "[down][forward][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 575,
      "warriorid": 16,
      "groupid": 3,
      "movename": "Partition",
      "movesequence": "[down][forward][bk][plus][block][comma][tag]",
      "comment": "(Uses one bar of super)"
    },
    {
      "moveid": 576,
      "warriorid": 16,
      "groupid": 3,
      "movename": "System Lock",
      "movesequence": "[fp][comma][bp][comma][backward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 577,
      "warriorid": 16,
      "groupid": 4,
      "movename": "Detached",
      "movesequence": "[fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 578,
      "warriorid": 16,
      "groupid": 4,
      "movename": "Spare Parts",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 579,
      "warriorid": 16,
      "groupid": 4,
      "movename": "Branch Off",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 580,
      "warriorid": 16,
      "groupid": 4,
      "movename": "System Backup",
      "movesequence": "[forward][comma][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 581,
      "warriorid": 16,
      "groupid": 5,
      "movename": "Flame Burner",
      "movesequence": "[backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 582,
      "warriorid": 16,
      "groupid": 5,
      "movename": "Teleport Uppercut",
      "movesequence": "[down][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 583,
      "warriorid": 16,
      "groupid": 5,
      "movename": "Straight Missile",
      "movesequence": "[backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 584,
      "warriorid": 16,
      "groupid": 5,
      "movename": "Up Missile (Above)",
      "movesequence": "[down][backward][fk]",
      "comment": "Lands on top"
    },
    {
      "moveid": 585,
      "warriorid": 16,
      "groupid": 5,
      "movename": "Up Missile (Behind)",
      "movesequence": "[down][backward][forward][fk]",
      "comment": "Lands from behind"
    },
    {
      "moveid": 586,
      "warriorid": 16,
      "groupid": 5,
      "movename": "Up Missile (In Front)",
      "movesequence": "[down][forward][backward][fk]",
      "comment": "Lands in front"
    },
    {
      "moveid": 587,
      "warriorid": 16,
      "groupid": 6,
      "movename": "Flame Thrower",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 588,
      "warriorid": 16,
      "groupid": 6,
      "movename": "Metal Uppercut",
      "movesequence": "[down][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 589,
      "warriorid": 16,
      "groupid": 6,
      "movename": "Double Missile",
      "movesequence": "[backward][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 590,
      "warriorid": 16,
      "groupid": 6,
      "movename": "Homing Missile",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 591,
      "warriorid": 16,
      "groupid": 7,
      "movename": "Massive Missile",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 592,
      "warriorid": 16,
      "groupid": 8,
      "movename": "Robo-Sek",
      "movesequence": "[forward][down][backward][forward][fk]",
      "comment": "Fullscreen"
    },
    {
      "moveid": 593,
      "warriorid": 16,
      "groupid": 8,
      "movename": "The Scarecrow",
      "movesequence": "[down][down][forward][backward][fp]",
      "comment": "Fullscreen"
    },
    {
      "moveid": 594,
      "warriorid": 16,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][forward][down][block]",
      "comment": "Varies"
    },
    {
      "moveid": 595,
      "warriorid": 16,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[backward][down][down][down][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 596,
      "warriorid": 17,
      "groupid": 1,
      "movename": "Hookshot",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 597,
      "warriorid": 17,
      "groupid": 1,
      "movename": "Backfist",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 598,
      "warriorid": 17,
      "groupid": 1,
      "movename": "Spin Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 599,
      "warriorid": 17,
      "groupid": 1,
      "movename": "Heel Bash",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 600,
      "warriorid": 17,
      "groupid": 11,
      "movename": "Double Kick",
      "movesequence": "[bk]",
      "comment": ""
    },
    {
      "moveid": 601,
      "warriorid": 17,
      "groupid": 11,
      "movename": "Power Knee",
      "movesequence": "[fk]",
      "comment": ""
    },
    {
      "moveid": 602,
      "warriorid": 17,
      "groupid": 11,
      "movename": "Shoulder",
      "movesequence": "[fp]",
      "comment": ""
    },
    {
      "moveid": 603,
      "warriorid": 17,
      "groupid": 11,
      "movename": "Knockdown",
      "movesequence": "[bp]",
      "comment": ""
    },
    {
      "moveid": 604,
      "warriorid": 17,
      "groupid": 11,
      "movename": "Tackle",
      "movesequence": "[fp][plus][fk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 605,
      "warriorid": 17,
      "groupid": 11,
      "movename": "Dash Punches",
      "movesequence": "[forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 606,
      "warriorid": 17,
      "groupid": 11,
      "movename": "Lift Off",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 607,
      "warriorid": 17,
      "groupid": 11,
      "movename": "Hit the Deck",
      "movesequence": "[backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 608,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Advance Force",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 609,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Fierce Assault",
      "movesequence": "[fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 610,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Drop Zone",
      "movesequence": "[bp][comma][fp][comma][backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 611,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Ground Control",
      "movesequence": "[bp][comma][fp][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 612,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Power Rush",
      "movesequence": "[forward][plus][bp][comma][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 613,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Mess Hall",
      "movesequence": "[backward][plus][bp][comma][fp][comma][forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 614,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Play Time",
      "movesequence": "[fk][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 615,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Beat Up",
      "movesequence": "[fk][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 616,
      "warriorid": 17,
      "groupid": 2,
      "movename": "Pull Out",
      "movesequence": "[bk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 617,
      "warriorid": 17,
      "groupid": 3,
      "movename": "Switch Off",
      "movesequence": "[bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 618,
      "warriorid": 17,
      "groupid": 3,
      "movename": "Fatal Kiss",
      "movesequence": "[down][backward][fp][comma][tag]",
      "comment": "From Military Stance"
    },
    {
      "moveid": 619,
      "warriorid": 17,
      "groupid": 3,
      "movename": "Surprise",
      "movesequence": "[backward][plus][bp][comma][fp][comma][forward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 620,
      "warriorid": 17,
      "groupid": 3,
      "movename": "Windmill",
      "movesequence": "[down][forward][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 621,
      "warriorid": 17,
      "groupid": 4,
      "movename": "Lick My Boots",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 622,
      "warriorid": 17,
      "groupid": 4,
      "movename": "Special Forced",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 623,
      "warriorid": 17,
      "groupid": 4,
      "movename": "Tough Love",
      "movesequence": "[forward][plus][bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 624,
      "warriorid": 17,
      "groupid": 4,
      "movename": "Honorable Discharge",
      "movesequence": "[fk][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 625,
      "warriorid": 17,
      "groupid": 5,
      "movename": "Enery Ring Blast",
      "movesequence": "[backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 626,
      "warriorid": 17,
      "groupid": 5,
      "movename": "Leg Grab",
      "movesequence": "[backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 627,
      "warriorid": 17,
      "groupid": 5,
      "movename": "Kiss",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 628,
      "warriorid": 17,
      "groupid": 5,
      "movename": "Arc Kick",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 629,
      "warriorid": 17,
      "groupid": 5,
      "movename": "Kartwheel",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 630,
      "warriorid": 17,
      "groupid": 5,
      "movename": "Air Drop",
      "movesequence": "[down][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 631,
      "warriorid": 17,
      "groupid": 5,
      "movename": "Air Throw",
      "movesequence": "[throw]",
      "comment": "While in the air"
    },
    {
      "moveid": 632,
      "warriorid": 17,
      "groupid": 6,
      "movename": "Rings of Justice",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 633,
      "warriorid": 17,
      "groupid": 6,
      "movename": "Krazy Legs",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 634,
      "warriorid": 17,
      "groupid": 6,
      "movename": "Deadly Kiss",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 635,
      "warriorid": 17,
      "groupid": 6,
      "movename": "Arc Wave",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": "Hold [bp] To charge"
    },
    {
      "moveid": 636,
      "warriorid": 17,
      "groupid": 6,
      "movename": "Kartwheel Bash",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 637,
      "warriorid": 17,
      "groupid": 6,
      "movename": "Air Strikes",
      "movesequence": "[down][plus][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 638,
      "warriorid": 17,
      "groupid": 7,
      "movename": "SF Beat Up",
      "movesequence": "[stance][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 639,
      "warriorid": 17,
      "groupid": 8,
      "movename": "Scissor Split",
      "movesequence": "[down][down][backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 640,
      "warriorid": 17,
      "groupid": 8,
      "movename": "Kut-Throat",
      "movesequence": "[down][backward][forward][backward][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 641,
      "warriorid": 17,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[backward][forward][down][bp]",
      "comment": "Sweep"
    },
    {
      "moveid": 642,
      "warriorid": 17,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][down][forward][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 643,
      "warriorid": 18,
      "groupid": 1,
      "movename": "Hook Swipe",
      "movesequence": "[backward][plus][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 644,
      "warriorid": 18,
      "groupid": 1,
      "movename": "Big Leg",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 645,
      "warriorid": 18,
      "groupid": 1,
      "movename": "Shin Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 646,
      "warriorid": 18,
      "groupid": 1,
      "movename": "Triple Slam",
      "movesequence": "[fp][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 647,
      "warriorid": 18,
      "groupid": 1,
      "movename": "Quad slams",
      "movesequence": "[bp][plus][fk]",
      "comment": "During throw"
    },
    {
      "moveid": 648,
      "warriorid": 18,
      "groupid": 2,
      "movename": "Major Force",
      "movesequence": "[fp][comma][bp][comma][fk]",
      "comment": "During Triple Slam"
    },
    {
      "moveid": 649,
      "warriorid": 18,
      "groupid": 2,
      "movename": "Boot Kamp",
      "movesequence": "[backward][plus][fp][comma][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 650,
      "warriorid": 18,
      "groupid": 2,
      "movename": "Active Duty",
      "movesequence": "[bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 651,
      "warriorid": 18,
      "groupid": 2,
      "movename": "Fild Grade",
      "movesequence": "[bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 652,
      "warriorid": 18,
      "groupid": 2,
      "movename": "Chain of Command",
      "movesequence": "[bp][comma][forward][plus][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 653,
      "warriorid": 18,
      "groupid": 2,
      "movename": "Advance Force",
      "movesequence": "[forward][plus][bk][comma][fp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 654,
      "warriorid": 18,
      "groupid": 2,
      "movename": "Code of Conduct",
      "movesequence": "[forward][plus][bk][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 655,
      "warriorid": 18,
      "groupid": 3,
      "movename": "Majority Rules",
      "movesequence": "[down][backward][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 656,
      "warriorid": 18,
      "groupid": 3,
      "movename": "Outranked",
      "movesequence": "[down][backward][fk][plus][block][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 657,
      "warriorid": 18,
      "groupid": 4,
      "movename": "Major Muscles",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 658,
      "warriorid": 18,
      "groupid": 4,
      "movename": "Alloy Over You",
      "movesequence": "[bp][comma][forward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 659,
      "warriorid": 18,
      "groupid": 4,
      "movename": "Briggs Da Noise",
      "movesequence": "[bp][comma][forward][plus][bp][comma][backward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 660,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Energy Wave",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 661,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Dash Punch",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 662,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Ground Pound (Close)",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 663,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Ground Pound (Medium)",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 664,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Ground Pound (Far)",
      "movesequence": "[down][backward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 665,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Gotcha Grab",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 666,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Air Gotcha Grab",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 667,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Overhead Smash",
      "movesequence": "[down][up][bk]",
      "comment": ""
    },
    {
      "moveid": 668,
      "warriorid": 18,
      "groupid": 5,
      "movename": "Back Breaker",
      "movesequence": "[throw]",
      "comment": ""
    },
    {
      "moveid": 669,
      "warriorid": 18,
      "groupid": 6,
      "movename": "Assault Wave",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 670,
      "warriorid": 18,
      "groupid": 6,
      "movename": "Dash Fist",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 671,
      "warriorid": 18,
      "groupid": 6,
      "movename": "Ground Quake",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 672,
      "warriorid": 18,
      "groupid": 6,
      "movename": "Gotcha Beatdown",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 673,
      "warriorid": 18,
      "groupid": 6,
      "movename": "Air Gotcha Blast",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 674,
      "warriorid": 18,
      "groupid": 6,
      "movename": "Elite Smash",
      "movesequence": "[down][up][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 675,
      "warriorid": 18,
      "groupid": 7,
      "movename": "Briggs Bash",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 676,
      "warriorid": 18,
      "groupid": 8,
      "movename": "Smash and Grab",
      "movesequence": "[backward][forward][forward][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 677,
      "warriorid": 18,
      "groupid": 8,
      "movename": "Three Points!",
      "movesequence": "[forward][forward][backward][down][fk]",
      "comment": "Touching"
    },
    {
      "moveid": 678,
      "warriorid": 18,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][forward][down][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 679,
      "warriorid": 18,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][down][down][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 680,
      "warriorid": 19,
      "groupid": 1,
      "movename": "Strong Strike",
      "movesequence": "[forward][plus][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 681,
      "warriorid": 19,
      "groupid": 1,
      "movename": "Gut Poke",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 682,
      "warriorid": 19,
      "groupid": 1,
      "movename": "Overhead Smash",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 683,
      "warriorid": 19,
      "groupid": 1,
      "movename": "Shin Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 684,
      "warriorid": 19,
      "groupid": 1,
      "movename": "Hop Roundhouse",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 685,
      "warriorid": 19,
      "groupid": 2,
      "movename": "One Two Three",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 686,
      "warriorid": 19,
      "groupid": 2,
      "movename": "Fighting King",
      "movesequence": "[forward][plus][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 687,
      "warriorid": 19,
      "groupid": 2,
      "movename": "No escape",
      "movesequence": "[forward][plus][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 688,
      "warriorid": 19,
      "groupid": 2,
      "movename": "Dragon's Tail",
      "movesequence": "[backward][plus][fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 689,
      "warriorid": 19,
      "groupid": 2,
      "movename": "Snake Bite",
      "movesequence": "[backward][plus][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 690,
      "warriorid": 19,
      "groupid": 2,
      "movename": "Getting Ahead",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 691,
      "warriorid": 19,
      "groupid": 2,
      "movename": "Uplifting Force",
      "movesequence": "[backward][plus][bp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 692,
      "warriorid": 19,
      "groupid": 2,
      "movename": "Smashing Time",
      "movesequence": "[backward][plus][bp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 693,
      "warriorid": 19,
      "groupid": 2,
      "movename": "Double Dragon",
      "movesequence": "[fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 694,
      "warriorid": 19,
      "groupid": 2,
      "movename": "The Rage Kicks",
      "movesequence": "[forward][plus][fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 695,
      "warriorid": 19,
      "groupid": 2,
      "movename": "Mean Machine",
      "movesequence": "[forward][plus][fk][comma][backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 696,
      "warriorid": 19,
      "groupid": 3,
      "movename": "Lead Head",
      "movesequence": "[backward][plus][fp][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 697,
      "warriorid": 19,
      "groupid": 3,
      "movename": "Ear to Ear",
      "movesequence": "[bp][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 698,
      "warriorid": 19,
      "groupid": 3,
      "movename": "Bloodthirsty",
      "movesequence": "[forward][plus][fk][comma][backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 699,
      "warriorid": 19,
      "groupid": 4,
      "movename": "Troublesome",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 700,
      "warriorid": 19,
      "groupid": 4,
      "movename": "Deliquent",
      "movesequence": "[backward][plus][fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 701,
      "warriorid": 19,
      "groupid": 4,
      "movename": "Villianous",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 702,
      "warriorid": 19,
      "groupid": 4,
      "movename": "Mischievous",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 703,
      "warriorid": 19,
      "groupid": 5,
      "movename": "Ball",
      "movesequence": "[forward][down][backward][forward]",
      "comment": ""
    },
    {
      "moveid": 704,
      "warriorid": 19,
      "groupid": 5,
      "movename": "Down Ball",
      "movesequence": "[forward][down][backward][forward]",
      "comment": ""
    },
    {
      "moveid": 705,
      "warriorid": 19,
      "groupid": 5,
      "movename": "Up Ball",
      "movesequence": "[down][forward][bp]",
      "comment": "While in the air"
    },
    {
      "moveid": 706,
      "warriorid": 19,
      "groupid": 5,
      "movename": "Choke",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 707,
      "warriorid": 19,
      "groupid": 5,
      "movename": "Knife Throw",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 708,
      "warriorid": 19,
      "groupid": 5,
      "movename": "Air Throw",
      "movesequence": "[throw]",
      "comment": ""
    },
    {
      "moveid": 709,
      "warriorid": 19,
      "groupid": 6,
      "movename": "Kano Ball",
      "movesequence": "[forward][down][backward][forward][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 710,
      "warriorid": 19,
      "groupid": 6,
      "movename": "Downward Ball",
      "movesequence": "[forward][down][backward][forward][plus][block]",
      "comment": "Hold [block] To delay"
    },
    {
      "moveid": 711,
      "warriorid": 19,
      "groupid": 6,
      "movename": "Uprise Ball",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 712,
      "warriorid": 19,
      "groupid": 6,
      "movename": "Kano Choke",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 713,
      "warriorid": 19,
      "groupid": 6,
      "movename": "Knife Toss",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 714,
      "warriorid": 19,
      "groupid": 7,
      "movename": "Just The Tip",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 715,
      "warriorid": 19,
      "groupid": 8,
      "movename": "Heartbreak",
      "movesequence": "[backward][down][backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 716,
      "warriorid": 19,
      "groupid": 8,
      "movename": "Eat Your Heart Out",
      "movesequence": "[down][down][forward][backward][bk]",
      "comment": "Sweep"
    },
    {
      "moveid": 717,
      "warriorid": 19,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[up][up][backward][fk]",
      "comment": "Sweep"
    },
    {
      "moveid": 718,
      "warriorid": 19,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[forward][forward][down][down][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 719,
      "warriorid": 20,
      "groupid": 1,
      "movename": "Cross Hook",
      "movesequence": "[backward][plus][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 720,
      "warriorid": 20,
      "groupid": 1,
      "movename": "Baton Twirl",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 721,
      "warriorid": 20,
      "groupid": 2,
      "movename": "Kop Out",
      "movesequence": "[fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 722,
      "warriorid": 20,
      "groupid": 2,
      "movename": "Dispatched",
      "movesequence": "[fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 723,
      "warriorid": 20,
      "groupid": 2,
      "movename": "Beatdown",
      "movesequence": "[backward][plus][fp][comma][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 724,
      "warriorid": 20,
      "groupid": 2,
      "movename": "Pain Patrol",
      "movesequence": "[bp][comma][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 725,
      "warriorid": 20,
      "groupid": 2,
      "movename": "The Heat",
      "movesequence": "[backward][plus][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 726,
      "warriorid": 20,
      "groupid": 2,
      "movename": "Aggravated Assault",
      "movesequence": "[backward][plus][bp][comma][forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 727,
      "warriorid": 20,
      "groupid": 2,
      "movename": "Spread 'Em",
      "movesequence": "[backward][plus][bp][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 728,
      "warriorid": 20,
      "groupid": 2,
      "movename": "Come With Me",
      "movesequence": "[backward][plus][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 729,
      "warriorid": 20,
      "groupid": 3,
      "movename": "Serve and Protect",
      "movesequence": "[backward][plus][fp][comma][bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 730,
      "warriorid": 20,
      "groupid": 3,
      "movename": "Remain Silent",
      "movesequence": "[backward][plus][bp][comma][forward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 731,
      "warriorid": 20,
      "groupid": 3,
      "movename": "Affirmative",
      "movesequence": "[backward][plus][fk][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 732,
      "warriorid": 20,
      "groupid": 4,
      "movename": "We Aim to Please",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 733,
      "warriorid": 20,
      "groupid": 4,
      "movename": "Officer Friendly",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 734,
      "warriorid": 20,
      "groupid": 4,
      "movename": "Don't Move!",
      "movesequence": "[bp][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 735,
      "warriorid": 20,
      "groupid": 4,
      "movename": "Assault and Battery",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 736,
      "warriorid": 20,
      "groupid": 5,
      "movename": "Baton Sweep",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 737,
      "warriorid": 20,
      "groupid": 5,
      "movename": "High Grenade Toss",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 738,
      "warriorid": 20,
      "groupid": 5,
      "movename": "Low Grenade Toss",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 739,
      "warriorid": 20,
      "groupid": 5,
      "movename": "Gun Shot",
      "movesequence": "[backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 740,
      "warriorid": 20,
      "groupid": 5,
      "movename": "Roll Toss",
      "movesequence": "[backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 741,
      "warriorid": 20,
      "groupid": 6,
      "movename": "Baton Bash",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 742,
      "warriorid": 20,
      "groupid": 6,
      "movename": "Double Hight Grenade Toss",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 743,
      "warriorid": 20,
      "groupid": 6,
      "movename": "Double Low Grenade Toss",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 744,
      "warriorid": 20,
      "groupid": 6,
      "movename": "Bang Bang",
      "movesequence": "[backward][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 745,
      "warriorid": 20,
      "groupid": 6,
      "movename": "Roll Out",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 746,
      "warriorid": 20,
      "groupid": 7,
      "movename": "Busted",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 747,
      "warriorid": 20,
      "groupid": 8,
      "movename": "Time Served",
      "movesequence": "[forward][down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 748,
      "warriorid": 20,
      "groupid": 8,
      "movename": "Have a Blast",
      "movesequence": "[down][forward][down][forward][block]",
      "comment": "Sweep"
    },
    {
      "moveid": 749,
      "warriorid": 20,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][up][up][bk]",
      "comment": "Sweep"
    },
    {
      "moveid": 750,
      "warriorid": 20,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][forward][down][backward][bp]",
      "comment": "Varies"
    },
    {
      "moveid": 751,
      "warriorid": 21,
      "groupid": 1,
      "movename": "Elbow Poke",
      "movesequence": "[backward][plus][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 752,
      "warriorid": 21,
      "groupid": 1,
      "movename": "Forearm Strike",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 753,
      "warriorid": 21,
      "groupid": 1,
      "movename": "Elbow Blast",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 754,
      "warriorid": 21,
      "groupid": 1,
      "movename": "Shin Attack",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 755,
      "warriorid": 21,
      "groupid": 1,
      "movename": "Quick Knee",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 756,
      "warriorid": 21,
      "groupid": 2,
      "movename": "Bad Omen",
      "movesequence": "[fp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 757,
      "warriorid": 21,
      "groupid": 2,
      "movename": "Soul Stain",
      "movesequence": "[fp][comma][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 758,
      "warriorid": 21,
      "groupid": 2,
      "movename": "Soul Torment",
      "movesequence": "[fp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 759,
      "warriorid": 21,
      "groupid": 2,
      "movename": "Reserved Pain",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 760,
      "warriorid": 21,
      "groupid": 2,
      "movename": "Death Walker",
      "movesequence": "[bp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 761,
      "warriorid": 21,
      "groupid": 2,
      "movename": "Restored Youth",
      "movesequence": "[bp][comma][bp][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 762,
      "warriorid": 21,
      "groupid": 2,
      "movename": "Play Time",
      "movesequence": "[forward][plus][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 763,
      "warriorid": 21,
      "groupid": 2,
      "movename": "Deadly Truth",
      "movesequence": "[forward][plus][bk][comma][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 764,
      "warriorid": 21,
      "groupid": 3,
      "movename": "Side by Side",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 765,
      "warriorid": 21,
      "groupid": 3,
      "movename": "Ruthless",
      "movesequence": "[bp][comma][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 766,
      "warriorid": 21,
      "groupid": 4,
      "movename": "Soul Stealer",
      "movesequence": "[fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 767,
      "warriorid": 21,
      "groupid": 4,
      "movename": "Burning Evil",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 768,
      "warriorid": 21,
      "groupid": 4,
      "movename": "B-Trade",
      "movesequence": "[bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 769,
      "warriorid": 21,
      "groupid": 4,
      "movename": "Two of a Kind",
      "movesequence": "[forward][plus][bk][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 770,
      "warriorid": 21,
      "groupid": 5,
      "movename": "Fire Skull",
      "movesequence": "[backward][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 771,
      "warriorid": 21,
      "groupid": 5,
      "movename": "Up Skull (Above)",
      "movesequence": "[down][up][bp]",
      "comment": ""
    },
    {
      "moveid": 772,
      "warriorid": 21,
      "groupid": 5,
      "movename": "Up Skull (Behind)",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 773,
      "warriorid": 21,
      "groupid": 5,
      "movename": "Up Skull (In Front)",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 774,
      "warriorid": 21,
      "groupid": 5,
      "movename": "Ground Skull (Close)",
      "movesequence": "[down][up][bk]",
      "comment": ""
    },
    {
      "moveid": 775,
      "warriorid": 21,
      "groupid": 5,
      "movename": "Ground Skull (Medium)",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 776,
      "warriorid": 21,
      "groupid": 5,
      "movename": "Ground Skull (Far)",
      "movesequence": "[down][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 777,
      "warriorid": 21,
      "groupid": 5,
      "movename": "Soul Steal",
      "movesequence": "[forward][down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 778,
      "warriorid": 21,
      "groupid": 6,
      "movename": "Triple Skulls",
      "movesequence": "[backward][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 779,
      "warriorid": 21,
      "groupid": 6,
      "movename": "Skull Storm",
      "movesequence": "[down][up][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 780,
      "warriorid": 21,
      "groupid": 6,
      "movename": "Ground Eruption",
      "movesequence": "[down][up][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 781,
      "warriorid": 21,
      "groupid": 6,
      "movename": "Soul Capture",
      "movesequence": "[forward][down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 782,
      "warriorid": 21,
      "groupid": 7,
      "movename": "Your Soul is Mine",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 783,
      "warriorid": 21,
      "groupid": 8,
      "movename": "Bang Bang!",
      "movesequence": "[backward][down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 784,
      "warriorid": 21,
      "groupid": 8,
      "movename": "Identity Theft",
      "movesequence": "[down][down][backward][down][bp]",
      "comment": "Sweep"
    },
    {
      "moveid": 785,
      "warriorid": 21,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[up][up][backward][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 786,
      "warriorid": 21,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][backward][down][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 787,
      "warriorid": 22,
      "groupid": 1,
      "movename": "Blade Slash",
      "movesequence": "[backward][plus][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 788,
      "warriorid": 22,
      "groupid": 1,
      "movename": "Cross Swipe",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 789,
      "warriorid": 22,
      "groupid": 1,
      "movename": "Gut Strike",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 790,
      "warriorid": 22,
      "groupid": 1,
      "movename": "Foot Stomp",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 791,
      "warriorid": 22,
      "groupid": 1,
      "movename": "Hop Kick",
      "movesequence": "[up][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 792,
      "warriorid": 22,
      "groupid": 1,
      "movename": "Quick Knee",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 793,
      "warriorid": 22,
      "groupid": 1,
      "movename": "Big Legs",
      "movesequence": "[up][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 794,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Tarkatan Rush",
      "movesequence": "[fp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 795,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Painful Swipes",
      "movesequence": "[fp][comma][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 796,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Tricky Fury",
      "movesequence": "[fp][comma][bp][comma][backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 797,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Cut 'Em Loose",
      "movesequence": "[backward][plus][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 798,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Splinter",
      "movesequence": "[backward][plus][fp][comma][forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 799,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Cold Steel",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 800,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Tears of Pain",
      "movesequence": "[bp][comma][bp][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 801,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Tarkatan Push",
      "movesequence": "[backward][plus][bp][comma][forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 802,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Horror Show",
      "movesequence": "[forward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 803,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Outworld Bash",
      "movesequence": "[forward][plus][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 804,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Tarkatan Blows",
      "movesequence": "[fk][comma][backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 805,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Open Wound",
      "movesequence": "[backward][plus][fk][comma][fp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 806,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Easy Kill",
      "movesequence": "[backward][plus][fk][comma][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 807,
      "warriorid": 22,
      "groupid": 2,
      "movename": "Doom Kicks",
      "movesequence": "[forward][plus][bk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 808,
      "warriorid": 22,
      "groupid": 3,
      "movename": "Bloody Mess",
      "movesequence": "[backward][plus][fk][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 809,
      "warriorid": 22,
      "groupid": 4,
      "movename": "Skinned Alive",
      "movesequence": "[fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 810,
      "warriorid": 22,
      "groupid": 4,
      "movename": "Killer Kuts",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 811,
      "warriorid": 22,
      "groupid": 4,
      "movename": "Have At It",
      "movesequence": "[bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 812,
      "warriorid": 22,
      "groupid": 5,
      "movename": "Blade Charge",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 813,
      "warriorid": 22,
      "groupid": 5,
      "movename": "Spark",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 814,
      "warriorid": 22,
      "groupid": 5,
      "movename": "Chop Chop",
      "movesequence": "[backward][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 815,
      "warriorid": 22,
      "groupid": 5,
      "movename": "Blade Spin",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 816,
      "warriorid": 22,
      "groupid": 5,
      "movename": "Slices",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 817,
      "warriorid": 22,
      "groupid": 6,
      "movename": "Blade Rush",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 818,
      "warriorid": 22,
      "groupid": 6,
      "movename": "Sparked",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 819,
      "warriorid": 22,
      "groupid": 6,
      "movename": "Chopchop Shop",
      "movesequence": "[backward][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 820,
      "warriorid": 22,
      "groupid": 6,
      "movename": "Spinner",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 821,
      "warriorid": 22,
      "groupid": 6,
      "movename": "Slicer",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 822,
      "warriorid": 22,
      "groupid": 7,
      "movename": "Nail and Impale",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 823,
      "warriorid": 22,
      "groupid": 8,
      "movename": "Up the middle",
      "movesequence": "[backward][forward][down][forward][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 824,
      "warriorid": 22,
      "groupid": 8,
      "movename": "Take a Spin",
      "movesequence": "[forward][forward][down][down][fk]",
      "comment": "Sweep"
    },
    {
      "moveid": 825,
      "warriorid": 22,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][down][down][down][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 826,
      "warriorid": 22,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[forward][backward][forward][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 827,
      "warriorid": 23,
      "groupid": 1,
      "movename": "Hook Swipe",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 828,
      "warriorid": 23,
      "groupid": 1,
      "movename": "Strong Fist",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 829,
      "warriorid": 23,
      "groupid": 1,
      "movename": "Step Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 830,
      "warriorid": 23,
      "groupid": 1,
      "movename": "Big Knee",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 831,
      "warriorid": 23,
      "groupid": 2,
      "movename": "Last Breath",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 832,
      "warriorid": 23,
      "groupid": 2,
      "movename": "Extermination",
      "movesequence": "[fp][comma][fp][comma][backward][plus][bk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 833,
      "warriorid": 23,
      "groupid": 2,
      "movename": "Mutilation",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 834,
      "warriorid": 23,
      "groupid": 2,
      "movename": "Vanquish",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 835,
      "warriorid": 23,
      "groupid": 2,
      "movename": "Nomad's Fear",
      "movesequence": "[forward][plus][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 836,
      "warriorid": 23,
      "groupid": 2,
      "movename": "Eviscerate",
      "movesequence": "[forward][plus][bk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 837,
      "warriorid": 23,
      "groupid": 3,
      "movename": "Up Next",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 838,
      "warriorid": 23,
      "groupid": 4,
      "movename": "Your Turn",
      "movesequence": "[fp][comma][fp][comma][backward][plus][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 839,
      "warriorid": 23,
      "groupid": 4,
      "movename": "Partners in Crime",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 840,
      "warriorid": 23,
      "groupid": 4,
      "movename": "Rebirth",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 841,
      "warriorid": 23,
      "groupid": 5,
      "movename": "Gas Blast",
      "movesequence": "[backward][backward][fp]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 842,
      "warriorid": 23,
      "groupid": 5,
      "movename": "Nomad Dash",
      "movesequence": "[backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 843,
      "warriorid": 23,
      "groupid": 5,
      "movename": "Buzzsaw",
      "movesequence": "[backward][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 844,
      "warriorid": 23,
      "groupid": 5,
      "movename": "Tornado Slam",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 845,
      "warriorid": 23,
      "groupid": 6,
      "movename": "Vapor Blase",
      "movesequence": "[backward][backward][fp][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 846,
      "warriorid": 23,
      "groupid": 6,
      "movename": "Nomad Charge",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 847,
      "warriorid": 23,
      "groupid": 6,
      "movename": "Saw Blades",
      "movesequence": "[backward][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 848,
      "warriorid": 23,
      "groupid": 6,
      "movename": "Cyclone Slam",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 849,
      "warriorid": 23,
      "groupid": 7,
      "movename": "Kabal's Deep",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 850,
      "warriorid": 23,
      "groupid": 8,
      "movename": "Hook Up",
      "movesequence": "[backward][forward][backward][forward][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 851,
      "warriorid": 23,
      "groupid": 8,
      "movename": "It Takes Guts",
      "movesequence": "[down][down][backward][forward][block]",
      "comment": "Sweep"
    },
    {
      "moveid": 852,
      "warriorid": 23,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][down][bk]",
      "comment": "Varies"
    },
    {
      "moveid": 853,
      "warriorid": 23,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[forward][down][backward][fk]",
      "comment": "Jump"
    },
    {
      "moveid": 854,
      "warriorid": 24,
      "groupid": 1,
      "movename": "Static Touch",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 855,
      "warriorid": 24,
      "groupid": 1,
      "movename": "Gut Strike",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 856,
      "warriorid": 24,
      "groupid": 1,
      "movename": "Side Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 857,
      "warriorid": 24,
      "groupid": 1,
      "movename": "Spinning Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 858,
      "warriorid": 24,
      "groupid": 1,
      "movename": "Heel Smash",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 859,
      "warriorid": 24,
      "groupid": 2,
      "movename": "Heavenly Hand",
      "movesequence": "[fp][comma][bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 860,
      "warriorid": 24,
      "groupid": 2,
      "movename": "Sudden Energy",
      "movesequence": "[bp][comma][bp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 861,
      "warriorid": 24,
      "groupid": 2,
      "movename": "White Lightning",
      "movesequence": "[bp][comma][bp][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 862,
      "warriorid": 24,
      "groupid": 2,
      "movename": "Violent Thunder",
      "movesequence": "[backward][plus][bp][comma][forward][plus][fp][comma][bp][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 863,
      "warriorid": 24,
      "groupid": 2,
      "movename": "Quick Burn",
      "movesequence": "[forward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 864,
      "warriorid": 24,
      "groupid": 2,
      "movename": "Flash Storm",
      "movesequence": "[forward][plus][bp][comma][fk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 865,
      "warriorid": 24,
      "groupid": 2,
      "movename": "Spark Kicks",
      "movesequence": "[fk][comma][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 866,
      "warriorid": 24,
      "groupid": 2,
      "movename": "Thunder God",
      "movesequence": "[backward][plus][fk][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 867,
      "warriorid": 24,
      "groupid": 3,
      "movename": "Distant Thunder",
      "movesequence": "[fk][comma][fk][comma][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 868,
      "warriorid": 24,
      "groupid": 3,
      "movename": "Elder Fury",
      "movesequence": "[backward][plus][fk][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 869,
      "warriorid": 24,
      "groupid": 3,
      "movename": "God Fist",
      "movesequence": "[forward][plus][bp][comma][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 870,
      "warriorid": 24,
      "groupid": 4,
      "movename": "Godlike",
      "movesequence": "[bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 871,
      "warriorid": 24,
      "groupid": 4,
      "movename": "Supernatural",
      "movesequence": "[backward][plus][bp][comma][forward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 872,
      "warriorid": 24,
      "groupid": 4,
      "movename": "Divine Power",
      "movesequence": "[forward][plus][bp][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 873,
      "warriorid": 24,
      "groupid": 5,
      "movename": "Lightning",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 874,
      "warriorid": 24,
      "groupid": 5,
      "movename": "Electrocute",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 875,
      "warriorid": 24,
      "groupid": 5,
      "movename": "Electric Fly",
      "movesequence": "[backward][forward][fk]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 876,
      "warriorid": 24,
      "groupid": 5,
      "movename": "Teleport",
      "movesequence": "[down][up]",
      "comment": ""
    },
    {
      "moveid": 877,
      "warriorid": 24,
      "groupid": 5,
      "movename": "Vicinity Blast",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 878,
      "warriorid": 24,
      "groupid": 6,
      "movename": "Bolt",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 879,
      "warriorid": 24,
      "groupid": 6,
      "movename": "Shocker",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 880,
      "warriorid": 24,
      "groupid": 6,
      "movename": "Thunder Fly",
      "movesequence": "[backward][forward][fk][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 881,
      "warriorid": 24,
      "groupid": 6,
      "movename": "Sparkport",
      "movesequence": "[down][up][plus][block]",
      "comment": ""
    },
    {
      "moveid": 882,
      "warriorid": 24,
      "groupid": 6,
      "movename": "Vicinity Burst",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 883,
      "warriorid": 24,
      "groupid": 7,
      "movename": "Shock Therapy",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 884,
      "warriorid": 24,
      "groupid": 8,
      "movename": "Just a Scratch",
      "movesequence": "[down][forward][down][forward][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 885,
      "warriorid": 24,
      "groupid": 8,
      "movename": "Transplant",
      "movesequence": "[backward][forward][forward][down][bk]",
      "comment": "Sweep"
    },
    {
      "moveid": 886,
      "warriorid": 24,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][down][down][bp]",
      "comment": "Varies"
    },
    {
      "moveid": 887,
      "warriorid": 24,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][backward][down][bk]",
      "comment": "Jump"
    },
    {
      "moveid": 888,
      "warriorid": 25,
      "groupid": 1,
      "movename": "Ares Slash",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 889,
      "warriorid": 25,
      "groupid": 1,
      "movename": "Zeus Slice",
      "movesequence": "[forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 890,
      "warriorid": 25,
      "groupid": 1,
      "movename": "Divine Lift",
      "movesequence": "[backward][plus][bp]",
      "comment": "Hold [bp] To follow up"
    },
    {
      "moveid": 891,
      "warriorid": 25,
      "groupid": 1,
      "movename": "Spartan Bash",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 892,
      "warriorid": 25,
      "groupid": 1,
      "movename": "Spartan Knee",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 893,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Valor Of Hercules",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 894,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Hades Edge",
      "movesequence": "[backward][plus][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 895,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Hades Pain",
      "movesequence": "[backward][plus][fp][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 896,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Aphrodite's Will",
      "movesequence": "[forward][plus][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 897,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Wrath Of Ares",
      "movesequence": "[forward][plus][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 898,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Anguish Of Zeus",
      "movesequence": "[forward][plus][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 899,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Pandora's Soul",
      "movesequence": "[forward][plus][bk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 900,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Athena's Fury",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 901,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Olympic Ascencion",
      "movesequence": "[backward][plus](Hold)[bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 902,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Olympic Burst",
      "movesequence": "[backward][plus](Hold)[bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 903,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Olympic Blast",
      "movesequence": "[backward][plus](Hold)[bp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 904,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Olympic Toss",
      "movesequence": "[backward][plus](Hold)[bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 905,
      "warriorid": 25,
      "groupid": 2,
      "movename": "Achilles Strike",
      "movesequence": "[forward][plus][bp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 906,
      "warriorid": 25,
      "groupid": 3,
      "movename": "Athena's Rage",
      "movesequence": "[bp][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 907,
      "warriorid": 25,
      "groupid": 3,
      "movename": "Olympic Chain",
      "movesequence": "[backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 908,
      "warriorid": 25,
      "groupid": 3,
      "movename": "Pandora's Box",
      "movesequence": "[forward][plus][bk][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 909,
      "warriorid": 25,
      "groupid": 4,
      "movename": "Hercules Rush",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 910,
      "warriorid": 25,
      "groupid": 4,
      "movename": "Athena's Pain",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 911,
      "warriorid": 25,
      "groupid": 5,
      "movename": "Apollo's Bow",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 912,
      "warriorid": 25,
      "groupid": 5,
      "movename": "Head of Helios",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 913,
      "warriorid": 25,
      "groupid": 5,
      "movename": "Hermes Dash",
      "movesequence": "[backward][forward][bk]",
      "comment": "Hold [bk] To charge"
    },
    {
      "moveid": 914,
      "warriorid": 25,
      "groupid": 5,
      "movename": "Golden Fleece",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 915,
      "warriorid": 25,
      "groupid": 5,
      "movename": "Zeus' Rage",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 916,
      "warriorid": 25,
      "groupid": 6,
      "movename": "Apollo's Inferno",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 917,
      "warriorid": 25,
      "groupid": 6,
      "movename": "Helios Flash",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 918,
      "warriorid": 25,
      "groupid": 6,
      "movename": "Hermes Rush",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": "Hold [bk] To charge"
    },
    {
      "moveid": 919,
      "warriorid": 25,
      "groupid": 6,
      "movename": "Argo's Ram",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 920,
      "warriorid": 25,
      "groupid": 6,
      "movename": "Revenge of Olympus",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 921,
      "warriorid": 25,
      "groupid": 7,
      "movename": "Nemean Cestus",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 922,
      "warriorid": 25,
      "groupid": 8,
      "movename": "Blade of Olympus",
      "movesequence": "[down][down][backward][forward][bp]",
      "comment": "Touching"
    },
    {
      "moveid": 923,
      "warriorid": 25,
      "groupid": 8,
      "movename": "Medusa's Gaze",
      "movesequence": "[down][backward][down][forward][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 924,
      "warriorid": 25,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][down][down][fk]",
      "comment": "Varies"
    },
    {
      "moveid": 925,
      "warriorid": 25,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][forward][backward][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 926,
      "warriorid": 26,
      "groupid": 1,
      "movename": "Big Swing",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 927,
      "warriorid": 26,
      "groupid": 1,
      "movename": "Step Palms",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 928,
      "warriorid": 26,
      "groupid": 1,
      "movename": "Low Swipe",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 929,
      "warriorid": 26,
      "groupid": 1,
      "movename": "Knee Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 930,
      "warriorid": 26,
      "groupid": 1,
      "movename": "Swinging Leg",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 931,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Shokan Fury",
      "movesequence": "[fp][comma][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 932,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Blood Lust",
      "movesequence": "[fp][comma][backward][plus][bp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 933,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Darkness",
      "movesequence": "[backward][plus][fp][comma][bp][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 934,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Four-Way",
      "movesequence": "[bp][comma][fp][comma][bp][comma][forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 935,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Sheeva Rush",
      "movesequence": "[bp][comma][fp][comma][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 936,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Quad Toss",
      "movesequence": "[backward][plus][bp][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 937,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Demolish",
      "movesequence": "[forward][plus][bp][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 938,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Turmoil",
      "movesequence": "[fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 939,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Swiper",
      "movesequence": "[forward][plus][fk][comma][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 940,
      "warriorid": 26,
      "groupid": 2,
      "movename": "Rehabilitated",
      "movesequence": "[forward][plus][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 941,
      "warriorid": 26,
      "groupid": 3,
      "movename": "Perfect Match",
      "movesequence": "[fp][comma][bp][comma][backward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 942,
      "warriorid": 26,
      "groupid": 3,
      "movename": "Better Than",
      "movesequence": "[bp][comma][fp][comma][bp][comma][forward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 943,
      "warriorid": 26,
      "groupid": 4,
      "movename": "Helping Hands",
      "movesequence": "[fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 944,
      "warriorid": 26,
      "groupid": 4,
      "movename": "Protector",
      "movesequence": "[fp][comma][backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 945,
      "warriorid": 26,
      "groupid": 4,
      "movename": "Distrusful",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 946,
      "warriorid": 26,
      "groupid": 4,
      "movename": "Destruction",
      "movesequence": "[bp][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 947,
      "warriorid": 26,
      "groupid": 5,
      "movename": "Fireball",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 948,
      "warriorid": 26,
      "groupid": 5,
      "movename": "Jump Stomp",
      "movesequence": "[down][up]",
      "comment": ""
    },
    {
      "moveid": 949,
      "warriorid": 26,
      "groupid": 5,
      "movename": "Ground Pound",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 950,
      "warriorid": 26,
      "groupid": 5,
      "movename": "Grab N Punch",
      "movesequence": "[backward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 951,
      "warriorid": 26,
      "groupid": 5,
      "movename": "Anti-Air Grab",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 952,
      "warriorid": 26,
      "groupid": 5,
      "movename": "Low Grab",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 953,
      "warriorid": 26,
      "groupid": 6,
      "movename": "Fire Blast",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 954,
      "warriorid": 26,
      "groupid": 6,
      "movename": "Jump Crush",
      "movesequence": "[down][up][plus][block]",
      "comment": ""
    },
    {
      "moveid": 955,
      "warriorid": 26,
      "groupid": 6,
      "movename": "Ground Smash",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 956,
      "warriorid": 26,
      "groupid": 6,
      "movename": "Untamed Fury",
      "movesequence": "[backward][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 957,
      "warriorid": 26,
      "groupid": 6,
      "movename": "Power Anti-Air",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 958,
      "warriorid": 26,
      "groupid": 6,
      "movename": "Anti-Duck Throw",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 959,
      "warriorid": 26,
      "groupid": 7,
      "movename": "Slam Dance",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 960,
      "warriorid": 26,
      "groupid": 8,
      "movename": "Stripped Down",
      "movesequence": "[forward][down][down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 961,
      "warriorid": 26,
      "groupid": 8,
      "movename": "Lend a Hand",
      "movesequence": "[forward][backward][forward][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 962,
      "warriorid": 26,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][down][down][down][fp]",
      "comment": ""
    },
    {
      "moveid": 963,
      "warriorid": 26,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][down][down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 964,
      "warriorid": 27,
      "groupid": 1,
      "movename": "Back Hand",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 965,
      "warriorid": 27,
      "groupid": 1,
      "movename": "Overhead Swipe",
      "movesequence": "[forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 966,
      "warriorid": 27,
      "groupid": 1,
      "movename": "Side Chop",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 967,
      "warriorid": 27,
      "groupid": 1,
      "movename": "Low Hop Kick",
      "movesequence": "[up][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 968,
      "warriorid": 27,
      "groupid": 1,
      "movename": "Shin Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 969,
      "warriorid": 27,
      "groupid": 1,
      "movename": "Hop Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 970,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Afterlife",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 971,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Under Torment",
      "movesequence": "[fp][comma][fp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 972,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Conjurer's Crush",
      "movesequence": "[backward][plus][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 973,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Corruption",
      "movesequence": "[forward][plus][fp][comma][bp][comma][fp]plus][bp]",
      "comment": ""
    },
    {
      "moveid": 974,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Spellbinder",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 975,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Root Of Evil",
      "movesequence": "[bp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 976,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Enchantment",
      "movesequence": "[bp][comma][fp][comma][up][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 977,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Wounded Wrath",
      "movesequence": "[backward][plus][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 978,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Incantation",
      "movesequence": "[backward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 979,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Deterioration",
      "movesequence": "[backward][plus][fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 980,
      "warriorid": 27,
      "groupid": 2,
      "movename": "Annihilation",
      "movesequence": "[backward][plus][fk][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 981,
      "warriorid": 27,
      "groupid": 3,
      "movename": "Sinister",
      "movesequence": "[backward][plus][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 982,
      "warriorid": 27,
      "groupid": 3,
      "movename": "Die-Abolical",
      "movesequence": "[backward][plus][fk][comma][fp][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 983,
      "warriorid": 27,
      "groupid": 4,
      "movename": "Alternative Means",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 984,
      "warriorid": 27,
      "groupid": 4,
      "movename": "Kruel Intentions",
      "movesequence": "[forward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 985,
      "warriorid": 27,
      "groupid": 4,
      "movename": "Necro-Mashy",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 986,
      "warriorid": 27,
      "groupid": 5,
      "movename": "Skeletal Boost",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 987,
      "warriorid": 27,
      "groupid": 5,
      "movename": "Ground Burst (Close)",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 988,
      "warriorid": 27,
      "groupid": 5,
      "movename": "Ground Burst (Medium)",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 989,
      "warriorid": 27,
      "groupid": 5,
      "movename": "Ground Burst (Far)",
      "movesequence": "[down][backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 990,
      "warriorid": 27,
      "groupid": 5,
      "movename": "Skull Ball",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 991,
      "warriorid": 27,
      "groupid": 5,
      "movename": "Sky Drop",
      "movesequence": "[down][backward][fk]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 992,
      "warriorid": 27,
      "groupid": 5,
      "movename": "Trance",
      "movesequence": "[backward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 993,
      "warriorid": 27,
      "groupid": 6,
      "movename": "Skeletal Buff",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 994,
      "warriorid": 27,
      "groupid": 6,
      "movename": "Ground Blast (Close)",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 995,
      "warriorid": 27,
      "groupid": 6,
      "movename": "Ground Blast (Medium)",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 996,
      "warriorid": 27,
      "groupid": 6,
      "movename": "Ground Blast (Far)",
      "movesequence": "[down][backward][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 997,
      "warriorid": 27,
      "groupid": 6,
      "movename": "Skull Chomp",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 998,
      "warriorid": 27,
      "groupid": 6,
      "movename": "Sky Stomp",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 999,
      "warriorid": 27,
      "groupid": 6,
      "movename": "Mesmerize",
      "movesequence": "[backward][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1000,
      "warriorid": 27,
      "groupid": 7,
      "movename": "Amulet Assault",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1001,
      "warriorid": 27,
      "groupid": 8,
      "movename": "Beat Down",
      "movesequence": "[forward][forward][down][down][fp]",
      "comment": "Sweep"
    },
    {
      "moveid": 1002,
      "warriorid": 27,
      "groupid": 8,
      "movename": "On Your Knees",
      "movesequence": "[down][forward][down][forward][bk]",
      "comment": "Sweep"
    },
    {
      "moveid": 1003,
      "warriorid": 27,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[backward][forward][down][bp]",
      "comment": "Varies"
    },
    {
      "moveid": 1004,
      "warriorid": 27,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[forward][down][backward][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 1005,
      "warriorid": 28,
      "groupid": 1,
      "movename": "Straight Slab",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 1006,
      "warriorid": 28,
      "groupid": 1,
      "movename": "Backfist",
      "movesequence": "[forward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 1007,
      "warriorid": 28,
      "groupid": 1,
      "movename": "Chest Swipe",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1008,
      "warriorid": 28,
      "groupid": 1,
      "movename": "Head Chop",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1009,
      "warriorid": 28,
      "groupid": 1,
      "movename": "Spinning Low Kick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1010,
      "warriorid": 28,
      "groupid": 1,
      "movename": "Back Spin Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1011,
      "warriorid": 28,
      "groupid": 1,
      "movename": "Splits Attack",
      "movesequence": "[up][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1012,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Cyborg Assault",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 1013,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Automation",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1014,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Drive Power",
      "movesequence": "[fp][comma][fp][comma][forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1015,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Freezing Pain",
      "movesequence": "[forward][plus][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1016,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Cyro Bash",
      "movesequence": "[forward][plus][bp][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 1017,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Frost",
      "movesequence": "[backward][plus][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1018,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Wildcard",
      "movesequence": "[backward][plus][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1019,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Upload",
      "movesequence": "[backward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1020,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Nano Smash",
      "movesequence": "[bp][comma][fp][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1021,
      "warriorid": 28,
      "groupid": 2,
      "movename": "System Error",
      "movesequence": "[fk][comma][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1022,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Reboot",
      "movesequence": "[fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1023,
      "warriorid": 28,
      "groupid": 2,
      "movename": "Blizzard",
      "movesequence": "[backward][plus][fk][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 1024,
      "warriorid": 28,
      "groupid": 3,
      "movename": "Dual Core",
      "movesequence": "[fk][comma][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1025,
      "warriorid": 28,
      "groupid": 3,
      "movename": "Meltdown",
      "movesequence": "[backward][plus][fk][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1026,
      "warriorid": 28,
      "groupid": 4,
      "movename": "Dry Ice",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1027,
      "warriorid": 28,
      "groupid": 4,
      "movename": "Glacier",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1028,
      "warriorid": 28,
      "groupid": 4,
      "movename": "Ice Over",
      "movesequence": "[forward][plus][bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1029,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Ice Ball",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 1030,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Ice Bomb (Close)",
      "movesequence": "[backward][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 1031,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Ice Bomb (Medium)",
      "movesequence": "[forward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 1032,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Ice Bomb (Far)",
      "movesequence": "[backward][backward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 1033,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Slide",
      "movesequence": "[backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 1034,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Teleport",
      "movesequence": "[down][backward][fp]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 1035,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Ice Parry",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 1036,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Divekick (Close)",
      "movesequence": "[down][plus][fk]",
      "comment": "While in the air"
    },
    {
      "moveid": 1037,
      "warriorid": 28,
      "groupid": 5,
      "movename": "Divekick (Far)",
      "movesequence": "[down][plus][bk]",
      "comment": "While in the air"
    },
    {
      "moveid": 1038,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Ice Beam",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1039,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Cryo Bomb (Close)",
      "movesequence": "[backward][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1040,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Cryo Bomb (Medium)",
      "movesequence": "[forward][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1041,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Cryo Bomb (Far)",
      "movesequence": "[backward][backward][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1042,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Cyber-Slide",
      "movesequence": "[backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1043,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Bangport",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": "Can be done in the air"
    },
    {
      "moveid": 1044,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Frozen Parry",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1045,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Powerkick (Close)",
      "movesequence": "[down][plus][fk][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 1046,
      "warriorid": 28,
      "groupid": 6,
      "movename": "Powerkick (Far)",
      "movesequence": "[down][plus][bk][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 1047,
      "warriorid": 28,
      "groupid": 7,
      "movename": "Cool Down",
      "movesequence": "[stance][plus][block]",
      "comment": "While in the air"
    },
    {
      "moveid": 1048,
      "warriorid": 28,
      "groupid": 8,
      "movename": "Kold Fusion",
      "movesequence": "[down][backward][down][forward][bp]",
      "comment": "Jump"
    },
    {
      "moveid": 1049,
      "warriorid": 28,
      "groupid": 8,
      "movename": "Brain Freeze",
      "movesequence": "[down][down][backward][down][fp]",
      "comment": "Jump"
    },
    {
      "moveid": 1050,
      "warriorid": 28,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][down][up][block]",
      "comment": "Varies"
    },
    {
      "moveid": 1051,
      "warriorid": 28,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][backward][forward][block]",
      "comment": "Jump"
    },
    {
      "moveid": 1052,
      "warriorid": 29,
      "groupid": 1,
      "movename": "Razor Slash",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 1053,
      "warriorid": 29,
      "groupid": 1,
      "movename": "Double Swipe",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1054,
      "warriorid": 29,
      "groupid": 1,
      "movename": "Hell Slice",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1055,
      "warriorid": 29,
      "groupid": 1,
      "movename": "Low Blow",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1056,
      "warriorid": 29,
      "groupid": 1,
      "movename": "Hop Kick",
      "movesequence": "[up][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1057,
      "warriorid": 29,
      "groupid": 1,
      "movename": "Big Knee",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1058,
      "warriorid": 29,
      "groupid": 12,
      "movename": "Open Wide",
      "movesequence": "[fp]",
      "comment": ""
    },
    {
      "moveid": 1059,
      "warriorid": 29,
      "groupid": 12,
      "movename": "Claw Slam",
      "movesequence": "[bp]",
      "comment": ""
    },
    {
      "moveid": 1060,
      "warriorid": 29,
      "groupid": 12,
      "movename": "Low Slash",
      "movesequence": "[fk]",
      "comment": ""
    },
    {
      "moveid": 1061,
      "warriorid": 29,
      "groupid": 12,
      "movename": "Cancel",
      "movesequence": "[bk]",
      "comment": ""
    },
    {
      "moveid": 1062,
      "warriorid": 29,
      "groupid": 2,
      "movename": "Split You in Two",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 1063,
      "warriorid": 29,
      "groupid": 2,
      "movename": "Skin The Cat",
      "movesequence": "[backward][plus][fp][comma][bp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1064,
      "warriorid": 29,
      "groupid": 2,
      "movename": "In Your Dreams",
      "movesequence": "[backward][plus][fp][comma][bp][comma][up][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 1065,
      "warriorid": 29,
      "groupid": 2,
      "movename": "Kung Fu This Bitch",
      "movesequence": "[bp][comma][bp][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1066,
      "warriorid": 29,
      "groupid": 2,
      "movename": "I Am Eternal",
      "movesequence": "[forward][plus][bp][comma][fp][comma][backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1067,
      "warriorid": 29,
      "groupid": 2,
      "movename": "Never Sleep Again",
      "movesequence": "[forward][plus][bp][comma][fp][comma][bk][comma]",
      "comment": ""
    },
    {
      "moveid": 1068,
      "warriorid": 29,
      "groupid": 2,
      "movename": "I Love Screamers",
      "movesequence": "[backward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1069,
      "warriorid": 29,
      "groupid": 2,
      "movename": "Come To Freddy",
      "movesequence": "[fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 1070,
      "warriorid": 29,
      "groupid": 2,
      "movename": "Ungrateful Piggy",
      "movesequence": "[backward][plus][fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 1071,
      "warriorid": 29,
      "groupid": 2,
      "movename": "Coming For You",
      "movesequence": "[forward][plus][bk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 1072,
      "warriorid": 29,
      "groupid": 2,
      "movename": "Playing With Power",
      "movesequence": "[forward][plus][bk][comma][bp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 1073,
      "warriorid": 29,
      "groupid": 3,
      "movename": "How Sweet Fresh Meat",
      "movesequence": "[backward][plus][fp][comma][bp][comma][up][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1074,
      "warriorid": 29,
      "groupid": 3,
      "movename": "Tag You're it",
      "movesequence": "[up][plus][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1075,
      "warriorid": 29,
      "groupid": 3,
      "movename": "Great Graphics",
      "movesequence": "[forward][plus][bk][comma][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1076,
      "warriorid": 29,
      "groupid": 4,
      "movename": "Party's Just Starting",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1077,
      "warriorid": 29,
      "groupid": 4,
      "movename": "Always Room For More",
      "movesequence": "[backward][plus][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1078,
      "warriorid": 29,
      "groupid": 4,
      "movename": "Reach Out & Cut Someone",
      "movesequence": "[bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1079,
      "warriorid": 29,
      "groupid": 4,
      "movename": "Meet Your Maker",
      "movesequence": "[forward][plus][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1080,
      "warriorid": 29,
      "groupid": 4,
      "movename": "Now You Die",
      "movesequence": "[forward][plus][bk][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1081,
      "warriorid": 29,
      "groupid": 5,
      "movename": "Hell Spike (Close)",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 1082,
      "warriorid": 29,
      "groupid": 5,
      "movename": "Hell Spike (Medium)",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 1083,
      "warriorid": 29,
      "groupid": 5,
      "movename": "Hell Spike (Far)",
      "movesequence": "[down][backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 1084,
      "warriorid": 29,
      "groupid": 5,
      "movename": "Sweet Dreams",
      "movesequence": "[down][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 1085,
      "warriorid": 29,
      "groupid": 5,
      "movename": "Glove Toss",
      "movesequence": "[backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 1086,
      "warriorid": 29,
      "groupid": 5,
      "movename": "Freddy Fingers",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 1087,
      "warriorid": 29,
      "groupid": 5,
      "movename": "Dream Shift Away",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 1088,
      "warriorid": 29,
      "groupid": 5,
      "movename": "Dream Shift Towards",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 1089,
      "warriorid": 29,
      "groupid": 6,
      "movename": "Hell Blast",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1090,
      "warriorid": 29,
      "groupid": 6,
      "movename": "Deep Sleep",
      "movesequence": "[down][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1091,
      "warriorid": 29,
      "groupid": 6,
      "movename": "Power Glove Toss",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1092,
      "warriorid": 29,
      "groupid": 6,
      "movename": "Freddy's Edge",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1093,
      "warriorid": 29,
      "groupid": 6,
      "movename": "Hell Shift Away",
      "movesequence": "[down][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1094,
      "warriorid": 29,
      "groupid": 6,
      "movename": "Hell Shift Towards",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1095,
      "warriorid": 29,
      "groupid": 7,
      "movename": "What a Rush",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1096,
      "warriorid": 29,
      "groupid": 8,
      "movename": "Tell 'Em Freddy Sent Ya",
      "movesequence": "[backward][forward][down][down][fp]",
      "comment": ""
    },
    {
      "moveid": 1097,
      "warriorid": 29,
      "groupid": 8,
      "movename": "Welcome To My Nightmare",
      "movesequence": "[down][up][forward][backward][block]",
      "comment": ""
    },
    {
      "moveid": 1098,
      "warriorid": 29,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][down][down][fk]",
      "comment": ""
    },
    {
      "moveid": 1099,
      "warriorid": 29,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[backward][forward][down][fp]",
      "comment": ""
    },
    {
      "moveid": 1100,
      "warriorid": 30,
      "groupid": 1,
      "movename": "Axe Hand",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 1101,
      "warriorid": 30,
      "groupid": 1,
      "movename": "Side Swipe",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1102,
      "warriorid": 30,
      "groupid": 1,
      "movename": "Stepping Sidekick",
      "movesequence": "[backward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1103,
      "warriorid": 30,
      "groupid": 2,
      "movename": "It Pours",
      "movesequence": "[fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 1104,
      "warriorid": 30,
      "groupid": 2,
      "movename": "Right as Rain",
      "movesequence": "[fp][comma][bp][comma][forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1105,
      "warriorid": 30,
      "groupid": 2,
      "movename": "Dehydrate",
      "movesequence": "[bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1106,
      "warriorid": 30,
      "groupid": 2,
      "movename": "Watery Grave",
      "movesequence": "[backward][plus][bp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 1107,
      "warriorid": 30,
      "groupid": 2,
      "movename": "Waterfall",
      "movesequence": "[backward][plus][bp][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1108,
      "warriorid": 30,
      "groupid": 2,
      "movename": "Spill Over",
      "movesequence": "[fk][comma][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1109,
      "warriorid": 30,
      "groupid": 2,
      "movename": "Moisturize Me",
      "movesequence": "[bk][comma][fk][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1110,
      "warriorid": 30,
      "groupid": 3,
      "movename": "Thicker Then Water",
      "movesequence": "[fp][comma][bp][comma][forward][plus][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1111,
      "warriorid": 30,
      "groupid": 3,
      "movename": "Rain Or Shine",
      "movesequence": "[backward][plus][bp][comma][fp][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1112,
      "warriorid": 30,
      "groupid": 4,
      "movename": "Rain And Suffering",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1113,
      "warriorid": 30,
      "groupid": 4,
      "movename": "No Rain; No Gain",
      "movesequence": "[fk][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1114,
      "warriorid": 30,
      "groupid": 4,
      "movename": "Dead In The Water",
      "movesequence": "[bk][comma][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1115,
      "warriorid": 30,
      "groupid": 5,
      "movename": "Water Port",
      "movesequence": "[down][up]",
      "comment": ""
    },
    {
      "moveid": 1116,
      "warriorid": 30,
      "groupid": 5,
      "movename": "Super Kick",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 1117,
      "warriorid": 30,
      "groupid": 5,
      "movename": "Water Bubble",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 1118,
      "warriorid": 30,
      "groupid": 5,
      "movename": "Geyser Kick",
      "movesequence": "[down][backward][fk]",
      "comment": ""
    },
    {
      "moveid": 1119,
      "warriorid": 30,
      "groupid": 5,
      "movename": "Lightning",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 1120,
      "warriorid": 30,
      "groupid": 5,
      "movename": "Aqua Splash",
      "movesequence": "[backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 1121,
      "warriorid": 30,
      "groupid": 5,
      "movename": "H2O Boost",
      "movesequence": "[backward][down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 1122,
      "warriorid": 30,
      "groupid": 6,
      "movename": "Aqua-Port",
      "movesequence": "[down][up][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1123,
      "warriorid": 30,
      "groupid": 6,
      "movename": "Power Kick",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1124,
      "warriorid": 30,
      "groupid": 6,
      "movename": "Hydro Bubble",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1125,
      "warriorid": 30,
      "groupid": 6,
      "movename": "Thermal Spring",
      "movesequence": "[down][backward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1126,
      "warriorid": 30,
      "groupid": 6,
      "movename": "Thunder Storm",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1127,
      "warriorid": 30,
      "groupid": 6,
      "movename": "Aqua Blast",
      "movesequence": "[backward][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1128,
      "warriorid": 30,
      "groupid": 6,
      "movename": "H2O Buff",
      "movesequence": "[backward][down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1129,
      "warriorid": 30,
      "groupid": 7,
      "movename": "Rain Check",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1130,
      "warriorid": 30,
      "groupid": 8,
      "movename": "Bubble Burst",
      "movesequence": "[backward][forward][down][backward][block]",
      "comment": ""
    },
    {
      "moveid": 1131,
      "warriorid": 30,
      "groupid": 8,
      "movename": "Does it Sting",
      "movesequence": "[up][down][backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 1132,
      "warriorid": 30,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][down][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 1133,
      "warriorid": 30,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[backward][down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 1134,
      "warriorid": 31,
      "groupid": 1,
      "movename": "Blade Stab",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1135,
      "warriorid": 31,
      "groupid": 1,
      "movename": "Blade Swipe",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1136,
      "warriorid": 31,
      "groupid": 1,
      "movename": "Shin Kick",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1137,
      "warriorid": 31,
      "groupid": 1,
      "movename": "Snap Kick",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1138,
      "warriorid": 31,
      "groupid": 1,
      "movename": "Windmill",
      "movesequence": "[up][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1139,
      "warriorid": 31,
      "groupid": 2,
      "movename": "Telekinetic Rush",
      "movesequence": "[fp][comma][fp][comma][fp]",
      "comment": ""
    },
    {
      "moveid": 1140,
      "warriorid": 31,
      "groupid": 2,
      "movename": "Blind Justice",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1141,
      "warriorid": 31,
      "groupid": 2,
      "movename": "Off Balance",
      "movesequence": "[fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1142,
      "warriorid": 31,
      "groupid": 2,
      "movename": "Heightened Senses",
      "movesequence": "[bp][comma][fp][comma][backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1143,
      "warriorid": 31,
      "groupid": 2,
      "movename": "Stolen Soul",
      "movesequence": "[bp][comma][fp][comma][forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1144,
      "warriorid": 31,
      "groupid": 2,
      "movename": "Absentminded",
      "movesequence": "[forward][plus][bp][comma][bp][backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 1145,
      "warriorid": 31,
      "groupid": 2,
      "movename": "Shortsighted",
      "movesequence": "[forward][plus][bp][comma][bp][backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1146,
      "warriorid": 31,
      "groupid": 2,
      "movename": "Brainpower",
      "movesequence": "[forward][plus][fk][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1147,
      "warriorid": 31,
      "groupid": 3,
      "movename": "Concentration",
      "movesequence": "[bp][comma][fp][comma][backward][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1148,
      "warriorid": 31,
      "groupid": 3,
      "movename": "Grey Matter",
      "movesequence": "[forward][plus][bp][comma][bp][comma][backward][plus][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1149,
      "warriorid": 31,
      "groupid": 3,
      "movename": "Blind Fury",
      "movesequence": "[forward][plus][fk][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1150,
      "warriorid": 31,
      "groupid": 4,
      "movename": "Blind Swordsman",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1151,
      "warriorid": 31,
      "groupid": 4,
      "movename": "Farsighted",
      "movesequence": "[forward][plus][bp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1152,
      "warriorid": 31,
      "groupid": 5,
      "movename": "Spirit Charge",
      "movesequence": "[backward][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 1153,
      "warriorid": 31,
      "groupid": 5,
      "movename": "Rising Karma",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 1154,
      "warriorid": 31,
      "groupid": 5,
      "movename": "Telekinetic Slash (Close)",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 1155,
      "warriorid": 31,
      "groupid": 5,
      "movename": "Telekinetic Slash (Medium)",
      "movesequence": "[down][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 1156,
      "warriorid": 31,
      "groupid": 5,
      "movename": "Telekinetic Slash (Far)",
      "movesequence": "[down][backward][forward][bk]",
      "comment": ""
    },
    {
      "moveid": 1157,
      "warriorid": 31,
      "groupid": 5,
      "movename": "Tele-Flury",
      "movesequence": "[backward][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 1158,
      "warriorid": 31,
      "groupid": 5,
      "movename": "Blade Reflect",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 1159,
      "warriorid": 31,
      "groupid": 6,
      "movename": "Spirit Vengeance",
      "movesequence": "[backward][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1160,
      "warriorid": 31,
      "groupid": 6,
      "movename": "Karma Eruption",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1161,
      "warriorid": 31,
      "groupid": 6,
      "movename": "Telekinetic Blade (Close)",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1162,
      "warriorid": 31,
      "groupid": 6,
      "movename": "Telekinetic Blade (Medium)",
      "movesequence": "[down][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1163,
      "warriorid": 31,
      "groupid": 6,
      "movename": "Telekinetic Blade (Far)",
      "movesequence": "[down][backward][forward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1164,
      "warriorid": 31,
      "groupid": 6,
      "movename": "Tele-Beatdown",
      "movesequence": "[backward][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1165,
      "warriorid": 31,
      "groupid": 6,
      "movename": "Blade Absorb",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1166,
      "warriorid": 31,
      "groupid": 7,
      "movename": "Soul Blade",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1167,
      "warriorid": 31,
      "groupid": 8,
      "movename": "Scatterbrained",
      "movesequence": "[up][down][up][down][block]",
      "comment": ""
    },
    {
      "moveid": 1168,
      "warriorid": 31,
      "groupid": 8,
      "movename": "Split Ends",
      "movesequence": "[backward][forward][down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 1169,
      "warriorid": 31,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[down][forward][down][fk]",
      "comment": ""
    },
    {
      "moveid": 1170,
      "warriorid": 31,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][backward][down][fp]",
      "comment": ""
    },
    {
      "moveid": 1171,
      "warriorid": 32,
      "groupid": 1,
      "movename": "Dagger Slash",
      "movesequence": "[backward][plus][fp]",
      "comment": ""
    },
    {
      "moveid": 1172,
      "warriorid": 32,
      "groupid": 1,
      "movename": "Rising Blade",
      "movesequence": "[backward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1173,
      "warriorid": 32,
      "groupid": 1,
      "movename": "Back Fist",
      "movesequence": "[forward][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1174,
      "warriorid": 32,
      "groupid": 1,
      "movename": "Upper Knee",
      "movesequence": "[forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1175,
      "warriorid": 32,
      "groupid": 1,
      "movename": "Roundhouse",
      "movesequence": "[forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1176,
      "warriorid": 32,
      "groupid": 1,
      "movename": "Lifting Leg",
      "movesequence": "[up][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1177,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Krimson Bash",
      "movesequence": "[fp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1178,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Red Pain",
      "movesequence": "[fp][comma][fp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1179,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Blood Clot",
      "movesequence": "[backward][plus][fp][comma][forward][plus][fk]",
      "comment": ""
    },
    {
      "moveid": 1180,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Coagulation",
      "movesequence": "[backward][plus][fp][comma][fp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 1181,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Bad Blood",
      "movesequence": "[backward][plus][fp][comma][fp][comma][forward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1182,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Bloody Murder",
      "movesequence": "[backward][plus][fp][comma][fp][comma][backward][plus][bk]",
      "comment": ""
    },
    {
      "moveid": 1183,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Bloodshed",
      "movesequence": "[backward][plus][bp][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1184,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Punishment",
      "movesequence": "[bp][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1185,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Bloodshot",
      "movesequence": "[bp][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 1186,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Flesh & Blood",
      "movesequence": "[forward][plus][bp][comma][fp][comma][bp][comma][fp][plus][bp]",
      "comment": ""
    },
    {
      "moveid": 1187,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Blood Boil",
      "movesequence": "[forward][plus][fk][comma][fp][comma][bp]",
      "comment": ""
    },
    {
      "moveid": 1188,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Slaughter",
      "movesequence": "[forward][plus][fk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 1189,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Carnage",
      "movesequence": "[up][plus][fk][comma][bk]",
      "comment": ""
    },
    {
      "moveid": 1190,
      "warriorid": 32,
      "groupid": 2,
      "movename": "Thicker Than Water",
      "movesequence": "[forward][plus][bk][comma][fk]",
      "comment": ""
    },
    {
      "moveid": 1191,
      "warriorid": 32,
      "groupid": 3,
      "movename": "Transfustion",
      "movesequence": "[backward][plus][fp][comma][fp][comma][forward][plus][bk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1192,
      "warriorid": 32,
      "groupid": 3,
      "movename": "Blood & Tears",
      "movesequence": "[forward][plus][bp][comma][fp][comma][bp][comma][fp][plus][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1193,
      "warriorid": 32,
      "groupid": 3,
      "movename": "Butchery",
      "movesequence": "[forward][plus][fk][comma][fp][comma][bp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1194,
      "warriorid": 32,
      "groupid": 3,
      "movename": "Warfare",
      "movesequence": "[up][plus][fk][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1195,
      "warriorid": 32,
      "groupid": 4,
      "movename": "Bloodthirsy",
      "movesequence": "[fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1196,
      "warriorid": 32,
      "groupid": 4,
      "movename": "Krimson Blades",
      "movesequence": "[backward][plus][fp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1197,
      "warriorid": 32,
      "groupid": 4,
      "movename": "Judgement",
      "movesequence": "[bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1198,
      "warriorid": 32,
      "groupid": 4,
      "movename": "Blood & Guts",
      "movesequence": "[forward][plus][bp][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1199,
      "warriorid": 32,
      "groupid": 4,
      "movename": "Bloody Hell",
      "movesequence": "[forward][plus][fk][comma][fp][comma][tag]",
      "comment": ""
    },
    {
      "moveid": 1200,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Up Slash",
      "movesequence": "[down][forward][bp]",
      "comment": ""
    },
    {
      "moveid": 1201,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Down Slash",
      "movesequence": "[down][backward][bp]",
      "comment": ""
    },
    {
      "moveid": 1202,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Blood Drop",
      "movesequence": "[down][backward][bk]",
      "comment": ""
    },
    {
      "moveid": 1203,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Red Dash",
      "movesequence": "[down][forward][fk]",
      "comment": ""
    },
    {
      "moveid": 1204,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Slide",
      "movesequence": "[bk]",
      "comment": ""
    },
    {
      "moveid": 1205,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Blood Ball",
      "movesequence": "[forward][down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 1206,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Dagger Toss",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 1207,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Air Dagger (Close)",
      "movesequence": "[down][backward][fp]",
      "comment": ""
    },
    {
      "moveid": 1208,
      "warriorid": 32,
      "groupid": 5,
      "movename": "Air Dagger (Far)",
      "movesequence": "[down][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 1209,
      "warriorid": 32,
      "groupid": 6,
      "movename": "Duel Up Slash",
      "movesequence": "[down][forward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1210,
      "warriorid": 32,
      "groupid": 6,
      "movename": "Duel Down Slash",
      "movesequence": "[down][backward][bp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1211,
      "warriorid": 32,
      "groupid": 6,
      "movename": "Blood Stomp",
      "movesequence": "[down][backward][bk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1212,
      "warriorid": 32,
      "groupid": 6,
      "movename": "Krimson Dash",
      "movesequence": "[down][forward][fk][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1213,
      "warriorid": 32,
      "groupid": 6,
      "movename": "Red Slide",
      "movesequence": "[bk]",
      "comment": ""
    },
    {
      "moveid": 1214,
      "warriorid": 32,
      "groupid": 6,
      "movename": "Dagger Toss",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1215,
      "warriorid": 32,
      "groupid": 6,
      "movename": "Tri Air Dagger",
      "movesequence": "[down][backward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1216,
      "warriorid": 32,
      "groupid": 6,
      "movename": "Tri Air Dagger",
      "movesequence": "[down][forward][fp][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1217,
      "warriorid": 32,
      "groupid": 7,
      "movename": "Blood Bank",
      "movesequence": "[stance][plus][block]",
      "comment": ""
    },
    {
      "moveid": 1218,
      "warriorid": 32,
      "groupid": 8,
      "movename": "Blood Bath",
      "movesequence": "[down][backward][down][down][block]",
      "comment": ""
    },
    {
      "moveid": 1219,
      "warriorid": 32,
      "groupid": 8,
      "movename": "Make It Rain",
      "movesequence": "[forward][backward][down][down][bk]",
      "comment": ""
    },
    {
      "moveid": 1220,
      "warriorid": 32,
      "groupid": 8,
      "movename": "Stage Fatality",
      "movesequence": "[forward][backward][forward][fp]",
      "comment": ""
    },
    {
      "moveid": 1221,
      "warriorid": 32,
      "groupid": 8,
      "movename": "Babality",
      "movesequence": "[down][backward][down][forward][bp]",
      "comment": ""
    }
  ]
`;

export class Api {

  static async getDb(): Promise<WarriorsData> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        const warriors = (JSON.parse(warriorsJSON) as WarriorDTO[])
          .map<WarriorEntity>((item) => ({
            id: item.warriorid,
            name: item.warriorname
          }));
          console.log(warriors);
        const groups = (JSON.parse(groupsJSON) as GroupDTO[])
          .map<GroupEntity>((item) => ({
            id: item.groupid,
            sort: item.sort,
            title: item.grouptitle,
            sequence: item.sequence === '' ? undefined : Util.convertStringToKeyVariants(item.sequence)
          }));
          console.log(groups);
        const moves = (JSON.parse(movesJSON) as MoveDTO[])
          .map<MoveEntity>((item) => ({
            id: item.moveid,
            groupId: item.groupid,
            warriorId: item.warriorid,
            moveName: item.movename,
            moveSequence: Util.convertStringToKeyVariants(item.movesequence),
            comment: item.comment === '' ? undefined : item.comment
          }));
          console.log(moves);

        const result: WarriorsData = warriors.map((warrior) => ({
          id: warrior.id,
          name: warrior.name,
          groups: moves
            .filter((move) => move.warriorId === warrior.id)
            .reduce<number[]>((acc, val) => acc.includes(val.groupId) ? acc : [...acc, val.groupId], [])
            .map<GroupEntity>((groupId) => groups.find((group) => group.id === groupId)!)
            .sort((a, b) => a.sort - b.sort)
            .map((group) => ({
              id: group.id,
              title: group.title,
              sequence: group.sequence,
              moves: moves
                .filter((move) => move.warriorId === warrior.id && move.groupId === group.id)
                .map((move) => ({ id: move.id, name: move.moveName, sequence: move.moveSequence, comment: move.comment }))
            }))
        }))

        resolve(result);
      }, 1000);
    })
  }

}
