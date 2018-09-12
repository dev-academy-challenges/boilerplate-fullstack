exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('bets').del()
    .then(function () {
      // Inserts seed entries
      return knex('bets').insert([
        {id: 4506, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'M2 R6 TE RAPA RACES 1600m 206 Final Fld Win Deductions Apply', amount_bet: '10', amount_won: '32', percentage: ''},
        {id: 4507, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'M2 R6 TE RAPA RACES 1600m 1206 Final Fld Top3 Deductions Apply', amount_bet: '10', amount_won: '13.5', percentage: ''},
        {id: 4508, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'England 7s v Samoa 7s 3292 Winning Team &amp; Margin', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4509, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'Waratahs v Highlanders 2140 Winning Team &amp; Margin', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4510, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'Zimbabwe v Pakistan-2nd ODI 4971 Head to HeadSteel v Tactix 2976 Head to Head-Live NowPella v Daniel 5307 Head to HeadStakhovsky v Jung 5443 Head to Head', amount_bet: '1', amount_won: 'Not winner', percentage: ''},
        {id: 4511, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'FINAL-Anderson v Djokovic 5961 Head to Head-Live betting', amount_bet: '3', amount_won: 'Not winner', percentage: ''},
        {id: 4512, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'Bulldogs v South Sydney 2463 Head to Head-Live bettingBrisbane v NZ Warriors 2655 Head to Head-Live bettingGold Coast v Sydney 2783 Head to Head-Live bettingHawthorn v Brisbane 3013 Head to Head-Live NowGold Coast v Essendon 3043 Head to Head', amount_bet: '10', amount_won: 'Not winner', percentage: ''},
        {id: 4513, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'FINAL-Kerber v S Williams 5826 Sets Betting', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4514, person: 'Tom', couple: 'Bielby/Hart', sport: '', bet: 'France v Croatia 3601 To Lift the World Cup', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4515, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'Kent v Hampshire 6140 Head to Head', amount_bet: '5', amount_won: '9.3', percentage: ''},
        {id: 4516, person: 'Tom', couple: 'Bielby/Hart', sport: '', bet: 'Highlanders v Rebels 2111 Match ResultCrusaders v Blues 2175 Match ResultWaratahs v Brumbies 2237 Match Result', amount_bet: '5', amount_won: '20.7', percentage: ''},
        {id: 4517, person: 'Tom', couple: 'Bielby/Hart', sport: '', bet: 'SF-Anderson v Isner 5813 Head to Head-Live betting', amount_bet: '5', amount_won: '9.3', percentage: ''},
        {id: 4518, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'M14 BRIS Race 7', amount_bet: '10', amount_won: 'Not winner', percentage: ''},
        {id: 4519, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'TE RAPA SPECIAL 210 Dougie/Rodrico Win Double', amount_bet: '10', amount_won: 'Not winner', percentage: ''},
        {id: 4520, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'France v Argentina 3101 To ProgressUruguay v Portugal 3201 To ProgressSpain v Russia 3301 To ProgressCroatia v Denmark 3401 To ProgressBrazil v Mexico 3501 To ProgressBelgium v Japan 3601 To ProgressSweden v Switzerland 3701 To ProgressColombia v England 3801 To Progress', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4521, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'Netherlands v Argentina 75 Head to Head-Live Now', amount_bet: '5', amount_won: '9.2', percentage: ''},
        {id: 4522, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'Highlanders v Chiefs 2211 Match Result', amount_bet: '10', amount_won: '25', percentage: ''},
        {id: 4523, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'M11 R5 ROSEHILL RACES 1800m 1115 Final Fld Top3 Deductions Apply', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4524, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'NZ Warriors v Cronulla 2546 Winning Team &amp; Margin-Live Now', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4525, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'Dogs', amount_bet: '1', amount_won: 'Not winner', percentage: ''},
        {id: 4526, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'West Coast v Melbourne 2592 Winning Team &amp; MarginCanberra v Sydney 2465 Head to Head-Live betting', amount_bet: '10', amount_won: 'Not winner', percentage: ''},
        {id: 4527, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'Burnley v Watford 3023 Head to HeadLeicester v Wolves 3067 Head to HeadLeeds v Rotherham 3353 Head to HeadChievo v Juventus 6601 Head to Head', amount_bet: '10', amount_won: 'Not winner', percentage: ''},
        {id: 4528, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'Wests v St George-Illawarra 2304 Head to Head-Live Now', amount_bet: '10', amount_won: 'Not winner', percentage: ''},
        {id: 4529, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'Canberra v Wests 2401 Head to Head-Live betting', amount_bet: '15', amount_won: '33.7', percentage: ''},
        {id: 4530, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'Nottingham v Reading 6766 Head to Head', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4531, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'M14 R9 DOOMBEN RACES 1350m 149 Final Fld Win Deductions Apply', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4532, person: 'Saul', couple: 'Burningham/Sim', sport: '', bet: 'M14 R9 DOOMBEN RACES 1350m 1149 Final Fld Top3 Deductions Apply', amount_bet: '5', amount_won: '8.7', percentage: ''},
        {id: 4533, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'Sussex v Somerset 6199 Head to Head', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4534, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'Kent v Gloucestershire 6196 Head to Head', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4535, person: 'Thomas', couple: 'Bielby/Hart', sport: '', bet: 'Bristol City v Nottingham 4053 Head to HeadLeeds v Stoke 4201 Head to Head', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4536, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'M14 R6 SUNSHINE COAST RA 1000m 146 Final Fld Win Deductions Apply', amount_bet: '5', amount_won: '11.7', percentage: ''},
        {id: 4537, person: 'Thomas', couple: 'Bielby/Hart', sport: '', bet: 'Crusaders v Lions 2004 Winning Team &amp; MarginParramatta v Gold Coast 2365 Head to Head-Live bettingSt Helens v Catalans 3043 Head to Head-Live NowQF-Azarenka v Collins 5851 Head to HeadQF-Konta v Mertens 5863 Head to Head', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4538, person: 'Free Bet', couple: 'Free Bet', sport: '', bet: 'St George-Illa v NZ Warriors 2301 Head to Head-Live bettingSydney v North Queensland 2429 Head to Head-Live bettingCronulla v Manly 2501 Head to Head-Live bettingSt Helens v Catalans 3043 Head to Head-Live Now', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4539, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'Newcastle v Wests 2167 Winning Team &amp; MarginSt George-Illa v NZ Warriors 2301 Head to Head-Live bettingSydney v North Queensland 2431 Winning Team &amp; MarginCronulla v Manly 2501 Head to Head-Live bettingRichmond v Geelong 2710 Winning Team &amp; MarginSt Kilda v Western Bulldogs 2740 Winning Team &amp; MarginWest Coast v Fremantle 2776 Winning Team &amp; Margin', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4540, person: 'Thomas', couple: 'Bielby/Hart', sport: '', bet: 'Crusaders v Lions 2004 Winning Team &amp; MarginParramatta v Gold Coast 2365 Head to Head-Live bettingWawrinka v Young 5019 Head to HeadWozniacki v Kalinina 5101 Head to HeadMattek-Sands v Stephens 5191 Head to HeadAzarenka v Ka Bondarenko 5201 Head to Head-Live betting', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4541, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'M11 R6 ROSEHILL RACES 1400m 116 Final Fld Win Deductions Apply', amount_bet: '10', amount_won: '40.4', percentage: ''},
        {id: 4542, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'M11 R6 ROSEHILL RACES 1400m 1116 Final Fld Top3 Deductions Apply', amount_bet: '5', amount_won: '8.4', percentage: ''},
        {id: 4543, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'Bulldogs v Wests 2132 Winning Team &amp; MarginEssendon v Sydney 2534 Winning Team &amp; Margin', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4544, person: 'Steven', couple: 'Scaglia/Scaglia', sport: '', bet: 'Isner v De Minaur 5601 Head to HeadRubin v Kyrgios 5643 Head to HeadThiem v Millman 5503 Head to Head-Live betting', amount_bet: '5', amount_won: '8.6', percentage: ''},
        {id: 4545, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'Fulham v Burnley 3667 Head to Head', amount_bet: '7', amount_won: 'Not winner', percentage: ''},
        {id: 4546, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'Watford v Crystal Palace 3755 Head to Head-Live betting', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4547, person: 'Thomas', couple: 'Bielby/Hart', sport: '', bet: 'Wolves v Manchester City 3601 Head to Head-Live bettingArsenal v West Ham 3623 Head to Head-Live bettingLiverpool v Brighton 3733 Head to HeadSwansea v Bristol City 4118 Head to Head', amount_bet: '5', amount_won: 'Not winner', percentage: ''},
        {id: 4548, person: 'Thomas', couple: 'Bielby/Hart', sport: '', bet: 'Wolves v Manchester City 3601 Head to Head-Live bettingArsenal v West Ham 3623 Head to Head-Live bettingLiverpool v Brighton 3733 Head to HeadWatford v Crystal Palace 3755 Head to Head-Live bettingNorwich v Leeds 4066 Head to Head', amount_bet: '10', amount_won: 'Not winner', percentage: ''},
        {id: 4549, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'New Zealand v Australia 2007 1st Try Scorer', amount_bet: '1', amount_won: 'Not winner', percentage: ''},
        {id: 4550, person: 'Lauren', couple: 'Bielby/Hart', sport: '', bet: 'New Zealand v Australia 2007 1st Try Scorer', amount_bet: '2', amount_won: 'Not winner', percentage: ''}
      ])
    })
}
