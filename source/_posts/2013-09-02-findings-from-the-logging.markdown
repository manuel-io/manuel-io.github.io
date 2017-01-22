---
layout: post
title: "Findings from the logging"
date: 2013-09-02 13:33
comments: true
categories:
  - 2013
  - programming
  - mail
  - administration
---
After a few months having [Fail2ban][fail2ban] at work
I wanted to know which networks seeking for exploits on my servers most frequently.
So I wrote a [program][program] to analyze the [WHOIS][whois]
requests—generated in case of any malicious activity—over
the last four months. Here are the top 25 out of 633 candidates:

    $ ruby fail2ban.rb logfile | sort -rn | head -25

    231	   CN	ALIBABA-CN-NET
     49	   CN	ALIBABA-BJ-NET
     37	   FR	QUADRA_DIFFUSION
     29	   FR	OVH-PCC-596
     29	   CN	CHINANET-SN
     18	   FR	MOBILEMEDIACOM
     17	   AU	TELSTRAINTERNET42-AU
     13	   CN	CHINANET-GD
     11	   CN	ALISOFT
      9	   CN	UNICOM-ZJ
      8	   CN	CHINANET-JS
      7	   CN	UNICOM-SD
      7	   CN	CHINANET-HE
      5	   IE	RSHVPS32
      4	   RU	JIJIKSERVER-NET
      4	   CN	CMNET
      4	   CN	CHINANET-HB
      3	   IN	UNICOM-SH
      3	   IN	TATACOMM-IN
      3	   FR	OVH_41610957
      3	   FR	AMEN-EUROPE-NETWORK
      3	   CN	CHINANET-SH
      2	   FR	OVH-PCC-646
      2    DE	STRATO-RZG-DEDI
      2	   DE	STRATO-RZG-DED3

Sorted by country:

    $ ruby fail2ban.rb logfile | awk '{print $2}' | sort | uniq -c | sort -rn | head -15

     61    CN
     11    DE
     10    IN
     10    GB
     10    FR
      8    US
      7    UA
      7    TR
      5    RU
      5    NL
      4    CZ
      3    TW
      3    ES
      2    SE
      2    PL

[fail2ban]: http://www.fail2ban.org
[program]: https://gist.github.com/elektret/6407615
[whois]: https://en.wikipedia.org/wiki/Whois
