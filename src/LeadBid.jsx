import React, { useState, useEffect, useRef } from "react";
import {
  MapPin, Star, MessageCircle, Check, Send, Wrench, Sparkles, Wind,
  Zap, Droplet, Droplets, Car, Home, GraduationCap, Heart, PawPrint,
  Hammer, Bug, Paintbrush, Trees, Warehouse, Umbrella, Trash2, Radio, Clock, ArrowLeft,
  Plus, Tag, BadgeCheck, Loader2, Scissors, ChevronRight, TrendingUp, Wand2,
  Lock, Phone, EyeOff, ShieldCheck,
  User, Building2, LogIn, UserPlus, ArrowRight, LogOut, Inbox, Briefcase,
  Bell, CircleDollarSign, XCircle, CheckCircle2, Eye, X, ImagePlus, Image as ImageIcon, Settings, Globe,
} from "lucide-react";

/* ----------------------------- styles ----------------------------- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --paper:#f5efe3; --paper-2:#ebe1d0; --ink:#1a1613; --ink-soft:#6b6155;
  --line:#e4dac7; --accent:#fb5a2d; --accent-deep:#d23f12; --green:#157a5a;
  --green-soft:#e3f1ea; --red:#c0392b; --card:#fffdf8;
  --shadow:0 1px 2px rgba(26,22,19,.05), 0 12px 32px -16px rgba(26,22,19,.22);
}
.lb-root{ font-family:'Hanken Grotesk',sans-serif; background:var(--paper); color:var(--ink);
  min-height:100vh; width:100%; -webkit-font-smoothing:antialiased; position:relative; overflow-x:hidden;}
.lb-root::before{ content:""; position:fixed; inset:0; pointer-events:none; z-index:0;
  background: radial-gradient(900px 500px at 85% -10%, rgba(255,90,31,.10), transparent 60%),
    radial-gradient(700px 500px at -5% 110%, rgba(28,122,74,.08), transparent 55%);}
.lb-display{ font-family:'Bricolage Grotesque',sans-serif; letter-spacing:-.02em; line-height:.98;}
.lb-shell{ max-width:760px; margin:0 auto; padding:0 18px 64px; position:relative; z-index:1;}
.lb-top{ display:flex; align-items:center; justify-content:space-between; padding:20px 2px 14px;}
.lb-logo{ display:flex; align-items:center; gap:9px; font-family:'Bricolage Grotesque'; font-weight:800; font-size:22px; letter-spacing:-.03em;}
.lb-logo .mark{ width:30px;height:30px;border-radius:9px;background:var(--ink);color:var(--paper);display:grid;place-items:center; transform:rotate(-6deg);}
.lb-logo b{ color:var(--accent-deep);}
.lb-badge{ font-size:11px; font-weight:600; color:var(--ink-soft); border:1px solid var(--line); padding:5px 10px; border-radius:999px; background:var(--card);}
.lb-hero h1{ font-size:clamp(38px,9vw,60px); font-weight:800; margin-top:6px;}
.lb-hero h1 .hl{ color:var(--accent-deep); white-space:nowrap;}
.lb-hero p{ color:var(--ink-soft); font-size:17px; max-width:48ch; margin-top:14px; line-height:1.5;}
.lb-steps{ display:flex; gap:8px; margin:20px 0 26px; flex-wrap:wrap;}
.lb-chip{ font-size:12.5px; font-weight:600; background:var(--card); border:1px solid var(--line); padding:7px 12px; border-radius:999px; display:flex; gap:6px; align-items:center; color:var(--ink-soft);}
.lb-chip b{ color:var(--ink);}
.lb-sec-h{ font-family:'Bricolage Grotesque'; font-weight:700; font-size:13px; text-transform:uppercase; letter-spacing:.12em; color:var(--ink-soft); margin:6px 0 14px;}
.lb-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:12px;}
@media(min-width:560px){ .lb-grid{ grid-template-columns:repeat(4,1fr);} }
.lb-cat{ background:var(--card); border:1px solid var(--line); border-radius:16px; padding:16px 12px; cursor:pointer; text-align:left; transition:transform .15s, box-shadow .2s, border-color .2s; position:relative; overflow:hidden;}
.lb-cat:hover{ transform:translateY(-3px); box-shadow:var(--shadow); border-color:#cdbfa6;}
.lb-cat .ic{ width:52px;height:52px;border-radius:14px; background:#fff; border:1px solid var(--line); display:grid;place-items:center; margin-bottom:12px; transition:transform .18s ease;}
.lb-cat .nm{ font-weight:700; font-size:14px; line-height:1.15;}
.lb-cat .sub{ font-size:11.5px; color:var(--ink-soft); margin-top:3px;}
.lb-cat:hover .ic{ transform:scale(1.1) rotate(-3deg);}

/* animated category logos */
.lgA{ transform-box:fill-box; transform-origin:center;}
.an-spin{ animation:lgSpin 5.5s linear infinite;}
.an-bob{ animation:lgBob 2.6s ease-in-out infinite;}
.an-pulse{ animation:lgPulse 1.9s ease-in-out infinite;}
.an-wiggle{ animation:lgWiggle 3s ease-in-out infinite;}
.an-twinkle{ animation:lgTwinkle 2.2s ease-in-out infinite;}
.an-drip{ animation:lgDrip 2.3s ease-in infinite;}
.an-rise{ animation:lgRise 2.8s ease-out infinite;}
.an-door{ animation:lgDoor 5s ease-in-out infinite;}
.an-snip{ animation:lgSnip 1.7s ease-in-out infinite;}
.an-sweep{ animation:lgSweep 3s ease-in-out infinite;}
.an-flash{ animation:lgFlash 2.6s ease-in-out infinite;}
.an-lid{ animation:lgLid 3.8s ease-in-out infinite;}
.an-sway{ animation:lgWiggle 3.4s ease-in-out infinite;}
@keyframes lgSpin{ to{ transform:rotate(360deg);} }
@keyframes lgBob{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-2.5px);} }
@keyframes lgPulse{ 0%,100%{ transform:scale(1);} 50%{ transform:scale(1.1);} }
@keyframes lgWiggle{ 0%,100%{ transform:rotate(-5deg);} 50%{ transform:rotate(5deg);} }
@keyframes lgTwinkle{ 0%,100%{ opacity:.35; transform:scale(.75);} 50%{ opacity:1; transform:scale(1.15);} }
@keyframes lgDrip{ 0%{ transform:translateY(-2px); opacity:0;} 25%{ opacity:1;} 80%{ opacity:1;} 100%{ transform:translateY(7px); opacity:0;} }
@keyframes lgRise{ 0%{ transform:translateY(4px); opacity:0;} 30%{ opacity:1;} 100%{ transform:translateY(-7px); opacity:0;} }
@keyframes lgDoor{ 0%,16%{ transform:translateY(0);} 38%,60%{ transform:translateY(-11.5px);} 82%,100%{ transform:translateY(0);} }
@keyframes lgSnip{ 0%,100%{ transform:rotate(0deg);} 50%{ transform:rotate(-16deg);} }
@keyframes lgSweep{ 0%{ transform:translateX(-12px); opacity:0;} 35%{ opacity:.5;} 70%,100%{ transform:translateX(18px); opacity:0;} }
@keyframes lgFlash{ 0%,100%{ opacity:1;} 50%{ opacity:.5;} }
@keyframes lgLid{ 0%,55%,100%{ transform:rotate(0deg);} 22%,38%{ transform:rotate(-17deg);} }
.lb-panel{ background:var(--card); border:1px solid var(--line); border-radius:20px; box-shadow:var(--shadow); padding:24px;}
.lb-back{ display:inline-flex; align-items:center; gap:6px; background:none; border:none; color:var(--ink-soft); font-family:'Hanken Grotesk'; font-weight:600; font-size:14px; cursor:pointer; padding:10px 0 16px;}
.lb-back:hover{ color:var(--ink);}
.lb-head-row{ display:flex; align-items:center; gap:12px; margin-bottom:20px;}
.lb-avatar{ width:50px;height:50px; border-radius:13px; flex:none; display:grid;place-items:center; color:#fff; font-family:'Bricolage Grotesque'; font-weight:800; font-size:20px;}

/* service list */
.lb-srv{ width:100%; text-align:left; background:var(--card); border:1.5px solid var(--line); border-radius:14px; padding:15px 16px; margin-bottom:10px; cursor:pointer; display:flex; align-items:center; gap:13px; transition:border-color .15s, background .15s;}
.lb-srv:hover{ border-color:#cdbfa6;}
.lb-srv.sel{ border-color:var(--accent); background:#fff;}
.lb-srv .radio{ width:21px;height:21px;border-radius:50%; border:2px solid var(--line); flex:none; display:grid;place-items:center; transition:border-color .15s;}
.lb-srv.sel .radio{ border-color:var(--accent); background:var(--accent);}
.lb-srv.sel .radio::after{ content:""; width:8px;height:8px;border-radius:50%; background:#fff;}
.lb-srv .nm{ font-weight:700; font-size:15px;}
.lb-srv .est{ font-size:12.5px; color:var(--ink-soft); margin-top:2px;}
.lb-srv .est b{ color:var(--green); font-weight:700;}
.lb-srv .more{ margin-left:auto; font-size:11px; color:var(--accent-deep); font-weight:600; display:flex; align-items:center; gap:2px;}

/* detail fields */
.lb-fields{ background:var(--paper); border:1px solid var(--line); border-radius:14px; padding:16px; margin:2px 0 16px; animation:slideIn .3s both;}
.lb-fields .ttl{ font-weight:700; font-size:13px; margin-bottom:12px; display:flex; align-items:center; gap:7px; color:var(--accent-deep);}
.lb-field{ margin-bottom:14px;}
.lb-field:last-child{ margin-bottom:0;}
.lb-label{ display:block; font-weight:600; font-size:13px; margin-bottom:7px;}
.lb-hint{ font-weight:500; color:var(--ink-soft); font-size:11.5px;}
.lb-input,.lb-select{ width:100%; font-family:'Hanken Grotesk'; font-size:15px; padding:11px 13px; border:1.5px solid var(--line); border-radius:11px; background:#fff; color:var(--ink); outline:none; transition:border-color .15s;}
.lb-input:focus,.lb-select:focus{ border-color:var(--accent);}
.lb-grid2{ display:grid; grid-template-columns:1fr 1fr; gap:10px;}
.lb-row{ display:flex; gap:12px;} .lb-row>*{ flex:1; }

.lb-price-wrap{ position:relative;}
.lb-price-wrap .cur{ position:absolute; left:16px; top:50%; transform:translateY(-50%); font-weight:800; font-size:26px; color:var(--ink-soft); font-family:'Bricolage Grotesque';}
.lb-price{ width:100%; font-family:'Bricolage Grotesque'; font-weight:800; font-size:34px; padding:14px 16px 14px 40px; border:1.5px solid var(--line); border-radius:14px; background:var(--paper); outline:none; color:var(--ink);}
.lb-price:focus{ border-color:var(--accent); background:#fff;}
.lb-price-note{ font-size:12.5px; color:var(--ink-soft); margin-top:8px;}
.lb-radius-val{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:20px;}
input[type=range].lb-range{ -webkit-appearance:none; appearance:none; width:100%; height:8px; border-radius:999px; background:var(--paper-2); outline:none; margin-top:14px;}
input[type=range].lb-range::-webkit-slider-thumb{ -webkit-appearance:none; width:26px;height:26px;border-radius:50%; background:var(--accent); border:4px solid #fff; box-shadow:0 2px 8px rgba(214,62,10,.4); cursor:pointer;}
input[type=range].lb-range::-moz-range-thumb{ width:22px;height:22px;border-radius:50%; background:var(--accent); border:4px solid #fff; cursor:pointer;}
.lb-ticks{ display:flex; justify-content:space-between; font-size:11px; color:var(--ink-soft); margin-top:8px; font-weight:600;}

.lb-btn{ width:100%; font-family:'Bricolage Grotesque'; font-weight:700; font-size:17px; padding:15px; border-radius:14px; border:none; cursor:pointer; background:var(--accent); color:#fff; display:flex; align-items:center; justify-content:center; gap:8px; transition:transform .12s, filter .15s; box-shadow:0 6px 18px -6px rgba(214,62,10,.6);}
.lb-btn:hover{ filter:brightness(1.05); transform:translateY(-1px);}
.lb-btn:disabled{ opacity:.45; cursor:not-allowed; transform:none; box-shadow:none;}
.lb-btn.ghost{ background:var(--card); color:var(--ink); border:1.5px solid var(--line); box-shadow:none;}
.lb-btn.ghost:hover{ border-color:#cdbfa6;}
.lb-btn.sm{ width:auto; font-size:14px; padding:11px 18px;}

.lb-radar{ width:230px;height:230px; margin:18px auto 6px; position:relative;}
.lb-radar .ring{ position:absolute; inset:0; border-radius:50%; border:1.5px solid var(--line);}
.lb-radar .ring.r2{ inset:38px;} .lb-radar .ring.r3{ inset:76px;}
.lb-radar .core{ position:absolute; inset:0; margin:auto; width:54px;height:54px; border-radius:50%; background:var(--accent); color:#fff; display:grid; place-items:center; animation:pulse 1.8s infinite;}
@keyframes pulse{ 0%{box-shadow:0 0 0 0 rgba(255,90,31,.45);} 70%{box-shadow:0 0 0 46px rgba(255,90,31,0);} 100%{box-shadow:0 0 0 0 rgba(255,90,31,0);} }
.lb-sweep{ position:absolute; inset:0; border-radius:50%; background:conic-gradient(from 0deg, rgba(255,90,31,.25), transparent 32%); animation:spin 2.6s linear infinite;}
@keyframes spin{ to{ transform:rotate(360deg);} }
.lb-dot{ position:absolute; width:11px;height:11px; border-radius:50%; background:var(--ink); animation:popdot .4s ease both;}
@keyframes popdot{ from{ transform:scale(0);} to{ transform:scale(1);} }
.lb-counts{ display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin:8px 0 22px;}
.lb-count{ background:var(--card); border:1px solid var(--line); border-radius:14px; padding:14px; text-align:center;}
.lb-count .n{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:26px;}
.lb-count .l{ font-size:11px; color:var(--ink-soft); font-weight:600; text-transform:uppercase; letter-spacing:.06em; margin-top:2px;}
.lb-count.acc .n{ color:var(--green);} .lb-count.dec .n{ color:var(--red);}
.lb-biz{ background:var(--card); border:1px solid var(--line); border-radius:18px; padding:18px; margin-bottom:12px; animation:slideIn .45s cubic-bezier(.2,.8,.25,1) both; transition:border-color .2s, box-shadow .2s;}
.lb-biz:hover{ border-color:#cdbfa6; box-shadow:var(--shadow);}
@keyframes slideIn{ from{ opacity:0; transform:translateY(14px);} to{ opacity:1; transform:none;} }
.lb-biz-top{ display:flex; gap:14px; align-items:flex-start;}
.lb-biz-name{ font-weight:700; font-size:16.5px; display:flex; align-items:center; gap:6px;}
.lb-stars{ display:flex; align-items:center; gap:5px; margin-top:4px; font-size:13px; color:var(--ink-soft);}
.lb-stars b{ color:var(--ink); font-weight:700;}
.lb-meta{ display:flex; gap:14px; margin-top:10px; font-size:12.5px; color:var(--ink-soft); flex-wrap:wrap;}
.lb-meta span{ display:flex; align-items:center; gap:5px;}
.lb-quote{ font-size:13.5px; color:var(--ink-soft); margin-top:12px; padding:11px 13px; background:var(--paper); border-radius:11px; border-left:3px solid var(--accent); line-height:1.45;}
.lb-biz-actions{ display:flex; gap:10px; margin-top:14px;}
.lb-priceTag{ margin-left:auto; text-align:right; flex:none;}
.lb-priceTag .pp{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:24px; color:var(--green);}
.lb-priceTag .ll{ font-size:10.5px; color:var(--ink-soft); font-weight:600; text-transform:uppercase; letter-spacing:.05em;}
.lb-review{ padding:14px 0; border-bottom:1px solid var(--line);}
.lb-review:last-child{ border-bottom:none;}
.lb-rev-head{ display:flex; align-items:center; gap:8px; font-size:13px;}
.lb-rev-av{ width:30px;height:30px;border-radius:50%; background:var(--paper-2); display:grid;place-items:center; font-weight:700; font-size:12px; color:var(--ink-soft);}
.lb-rev-body{ font-size:13.5px; color:var(--ink-soft); margin-top:7px; line-height:1.5;}
.lb-chat{ display:flex; flex-direction:column; height:560px; max-height:78vh; background:var(--card); border:1px solid var(--line); border-radius:20px; overflow:hidden; box-shadow:var(--shadow);}
.lb-chat-head{ display:flex; align-items:center; gap:12px; padding:14px 16px; border-bottom:1px solid var(--line); background:var(--paper);}
.lb-chat-body{ flex:1; overflow-y:auto; padding:18px 16px; display:flex; flex-direction:column; gap:10px; background-color:var(--card);}
.lb-msg{ max-width:80%; padding:10px 14px; border-radius:16px; font-size:14.5px; line-height:1.4; animation:slideIn .3s both;}
.lb-msg.them{ align-self:flex-start; background:var(--paper-2); border-bottom-left-radius:5px;}
.lb-msg.me{ align-self:flex-end; background:var(--accent); color:#fff; border-bottom-right-radius:5px;}
.lb-msg .t{ font-size:10px; opacity:.6; margin-top:4px; display:block;}
.lb-typing{ align-self:flex-start; background:var(--paper-2); padding:12px 16px; border-radius:16px; border-bottom-left-radius:5px; display:flex; gap:4px;}
.lb-typing i{ width:7px;height:7px;border-radius:50%; background:var(--ink-soft); animation:blink 1.2s infinite;}
.lb-typing i:nth-child(2){ animation-delay:.2s;} .lb-typing i:nth-child(3){ animation-delay:.4s;}
@keyframes blink{ 0%,60%,100%{opacity:.25;} 30%{opacity:1;} }
.lb-chat-input{ display:flex; gap:10px; padding:12px; border-top:1px solid var(--line); background:var(--paper);}
.lb-chat-input input{ flex:1; border:1.5px solid var(--line); border-radius:999px; padding:12px 16px; font-family:'Hanken Grotesk'; font-size:15px; outline:none; background:#fff;}
.lb-chat-input input:focus{ border-color:var(--accent);}
.lb-iconbtn{ width:46px;height:46px;border-radius:50%; border:none; background:var(--accent); color:#fff; display:grid;place-items:center; cursor:pointer; flex:none;}
.lb-iconbtn:disabled{ opacity:.4; cursor:not-allowed;}
.lb-deal{ background:var(--green-soft); border:1px solid #bfe3cc; color:var(--green); border-radius:14px; padding:14px 16px; display:flex; gap:10px; align-items:center; font-weight:600; font-size:14px; margin-bottom:18px;}
.lb-empty{ text-align:center; color:var(--ink-soft); padding:30px 10px; font-size:14.5px;}
.lb-note{ font-size:12px; color:var(--ink-soft); text-align:center; margin-top:26px; line-height:1.5;}
.lb-summary{ background:var(--paper-2); border-radius:12px; padding:12px 14px; margin-bottom:18px; font-size:13.5px; line-height:1.5;}
.lb-summary b{ font-weight:700;}
.lb-tags{ display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;}
.lb-tag{ font-size:11.5px; font-weight:600; background:#fff; border:1px solid var(--line); border-radius:999px; padding:4px 10px; color:var(--ink-soft);}

/* AI bid coach */
.lb-ai{ border:1.5px solid var(--accent); border-radius:16px; padding:16px 18px; margin-bottom:20px;
  background:linear-gradient(180deg,#fff4ec 0%, #fffdf8 70%); position:relative; overflow:hidden;}
.lb-ai::after{ content:""; position:absolute; top:-40px; right:-30px; width:130px; height:130px; border-radius:50%;
  background:radial-gradient(circle, rgba(255,90,31,.16), transparent 70%); pointer-events:none;}
.lb-ai-head{ display:flex; align-items:center; gap:8px; font-family:'Bricolage Grotesque'; font-weight:700; font-size:12px; text-transform:uppercase; letter-spacing:.12em; color:var(--accent-deep);}
.lb-ai-sub{ font-size:13.5px; color:var(--ink-soft); margin-top:9px; line-height:1.5; position:relative; z-index:1;}
.lb-ai-sub b{ color:var(--ink); font-weight:700;}
.lb-ai-rec{ display:flex; align-items:center; gap:14px; margin:14px 0 4px; position:relative; z-index:1;}
.lb-ai-rec .num{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:42px; line-height:1; color:var(--ink);}
.lb-ai-rec .num small{ font-size:23px; color:var(--ink-soft); font-weight:700;}
.lb-ai-rec .lbl{ font-size:10.5px; text-transform:uppercase; letter-spacing:.08em; color:var(--ink-soft); font-weight:700; margin-top:4px;}
.lb-ai-use{ margin-left:auto; font-family:'Bricolage Grotesque'; font-weight:700; font-size:14px; padding:11px 16px; border:none; border-radius:11px; background:var(--accent); color:#fff; cursor:pointer; display:flex; align-items:center; gap:6px; box-shadow:0 5px 14px -6px rgba(214,62,10,.6);}
.lb-ai-use:hover{ filter:brightness(1.05);}
.lb-ai-alts{ display:flex; gap:8px; margin-top:14px; position:relative; z-index:1;}
.lb-ai-chip{ flex:1; background:#fff; border:1px solid var(--line); border-radius:12px; padding:10px; cursor:pointer; text-align:center; transition:border-color .15s, transform .1s;}
.lb-ai-chip:hover{ border-color:var(--accent); transform:translateY(-1px);}
.lb-ai-chip .c-t{ font-size:10px; text-transform:uppercase; letter-spacing:.05em; color:var(--ink-soft); font-weight:700;}
.lb-ai-chip .c-p{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:19px; margin-top:1px;}
.lb-ai-chip .c-n{ font-size:10.5px; color:var(--ink-soft); margin-top:1px;}
.lb-meter{ margin-top:15px; padding-top:14px; border-top:1px dashed var(--line); position:relative; z-index:1;}
.lb-meter-top{ display:flex; justify-content:space-between; align-items:baseline; font-size:13px; margin-bottom:7px;}
.lb-meter-top .lk{ font-weight:700;}
.lb-meter-top .ex{ color:var(--ink-soft); font-size:12.5px;}
.lb-meter-bar{ height:9px; border-radius:999px; background:var(--paper-2); overflow:hidden;}
.lb-meter-fill{ height:100%; border-radius:999px; transition:width .4s ease, background .3s;}

/* anonymity + protection */
.lb-anon-av{ background:var(--ink) !important; color:var(--paper) !important;}
.lb-code{ font-size:11px; font-weight:700; color:var(--ink-soft); background:var(--paper-2); border-radius:6px; padding:2px 7px; letter-spacing:.04em;}
.lb-locked{ display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:600; color:var(--ink-soft); background:var(--paper); border:1px solid var(--line); border-radius:999px; padding:4px 10px; margin-top:10px;}
.lb-locked svg{ color:var(--accent-deep);}

/* booking / deposit screen */
.lb-book-card{ display:flex; align-items:center; gap:14px; padding:16px; background:var(--paper); border:1px solid var(--line); border-radius:14px; margin-bottom:18px;}
.lb-protect{ background:var(--green-soft); border:1px solid #bfe3cc; border-radius:14px; padding:16px; margin-bottom:18px;}
.lb-protect .ph{ display:flex; align-items:center; gap:8px; font-weight:700; font-size:14px; color:var(--green); margin-bottom:10px;}
.lb-protect ul{ list-style:none; display:flex; flex-direction:column; gap:9px;}
.lb-protect li{ display:flex; gap:9px; font-size:13.5px; color:#2a5f43; line-height:1.4;}
.lb-protect li svg{ flex:none; margin-top:2px; color:var(--green);}
.lb-deposit{ display:flex; align-items:center; justify-content:space-between; padding:15px 16px; border:1.5px dashed var(--accent); border-radius:14px; margin-bottom:20px; background:#fff6f0;}
.lb-deposit .dl{ font-size:13px; color:var(--ink-soft); max-width:62%; line-height:1.4;}
.lb-deposit .dl b{ color:var(--ink);}
.lb-deposit .dv{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:30px; color:var(--accent-deep);}

/* chat protection */
.lb-protect-strip{ display:flex; gap:8px; align-items:flex-start; background:var(--green-soft); border-bottom:1px solid #bfe3cc; padding:10px 14px; font-size:12px; color:#2a5f43; line-height:1.4;}
.lb-protect-strip svg{ flex:none; margin-top:1px; color:var(--green);}
.lb-proxy{ display:inline-flex; align-items:center; gap:6px; font-size:11.5px; font-weight:600; color:var(--ink-soft);}
.lb-callbtn{ border:1px solid var(--line); background:#fff; border-radius:999px; padding:6px 11px; font-family:'Hanken Grotesk'; font-weight:600; font-size:12px; color:var(--ink); display:inline-flex; align-items:center; gap:5px; cursor:pointer;}
.lb-callbtn:hover{ border-color:var(--accent);}
.lb-redact-note{ align-self:center; font-size:11px; color:var(--accent-deep); background:#fff1ea; border:1px solid #ffd6c2; border-radius:999px; padding:5px 12px; margin:2px 0; display:flex; align-items:center; gap:5px; text-align:center; max-width:90%;}
.lb-msg .redacted{ background:rgba(255,255,255,.35); border-radius:5px; padding:0 5px; font-style:italic; opacity:.9;}
.lb-msg.them .redacted{ background:rgba(24,20,16,.07);}

/* landing / auth gate */
.lb-gate-hero{ text-align:center; padding:8px 0 24px;}
.lb-gate-hero h1{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:clamp(34px,8vw,52px); letter-spacing:-.02em; line-height:1;}
.lb-gate-hero h1 .hl{ color:var(--accent-deep);}
.lb-gate-hero p{ color:var(--ink-soft); font-size:16px; margin-top:14px; max-width:46ch; margin-left:auto; margin-right:auto; line-height:1.5;}
.lb-roles{ display:grid; grid-template-columns:1fr 1fr; gap:14px;}
@media(max-width:520px){ .lb-roles{ grid-template-columns:1fr;} }
.lb-role{ background:var(--card); border:1px solid var(--line); border-radius:20px; padding:24px; box-shadow:var(--shadow); display:flex; flex-direction:column;}
.lb-role .ic{ width:52px;height:52px;border-radius:14px; display:grid;place-items:center; color:#fff; margin-bottom:16px;}
.lb-role.cust .ic{ background:var(--accent);} .lb-role.biz .ic{ background:var(--ink);}
.lb-role h3{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:22px;}
.lb-role p{ color:var(--ink-soft); font-size:13.5px; margin:8px 0 18px; line-height:1.5; flex:1;}
.lb-role .acts{ display:flex; gap:9px;}
.lb-auth-tabs{ display:flex; gap:6px; background:var(--paper-2); padding:5px; border-radius:12px; margin-bottom:20px;}
.lb-auth-tab{ flex:1; border:none; background:none; font-family:'Hanken Grotesk'; font-weight:700; font-size:14px; padding:9px; border-radius:9px; cursor:pointer; color:var(--ink-soft);}
.lb-auth-tab.on{ background:#fff; color:var(--ink); box-shadow:0 1px 4px rgba(24,20,16,.08);}
.lb-multi{ display:flex; flex-wrap:wrap; gap:8px;}
.lb-mchip{ font-size:12.5px; font-weight:600; border:1.5px solid var(--line); background:#fff; border-radius:999px; padding:7px 12px; cursor:pointer; display:flex; align-items:center; gap:6px; color:var(--ink-soft); transition:border-color .15s, color .15s;}
.lb-mchip.on{ border-color:var(--accent); color:var(--accent-deep); background:#fff6f0;}

/* account / top bar */
.lb-accountchip{ display:flex; align-items:center; gap:8px; font-size:12.5px; font-weight:600; color:var(--ink-soft);}
.lb-logout{ border:1px solid var(--line); background:var(--card); border-radius:999px; padding:5px 11px; font-family:'Hanken Grotesk'; font-weight:600; font-size:12px; cursor:pointer; color:var(--ink); display:inline-flex; align-items:center; gap:5px;}
.lb-logout:hover{ border-color:#cdbfa6;}

/* business dashboard */
.lb-stats{ display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin:6px 0 18px;}
@media(max-width:520px){ .lb-stats{ grid-template-columns:repeat(2,1fr);} }
.lb-stat{ background:var(--card); border:1px solid var(--line); border-radius:14px; padding:13px 14px;}
.lb-stat .n{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:23px; line-height:1;}
.lb-stat .l{ font-size:10.5px; color:var(--ink-soft); font-weight:600; text-transform:uppercase; letter-spacing:.05em; margin-top:5px;}
.lb-tabbar{ display:flex; gap:6px; background:var(--paper-2); padding:5px; border-radius:13px; margin-bottom:18px;}
.lb-tabbtn{ flex:1; border:none; background:none; font-family:'Hanken Grotesk'; font-weight:700; font-size:13.5px; padding:10px 6px; border-radius:9px; cursor:pointer; color:var(--ink-soft); display:flex; align-items:center; justify-content:center; gap:6px;}
.lb-tabbtn.on{ background:#fff; color:var(--ink); box-shadow:0 1px 4px rgba(24,20,16,.08);}
.lb-tabbtn .cnt{ font-size:11px; background:var(--accent); color:#fff; border-radius:999px; padding:1px 7px; font-weight:800;}
.lb-tabbtn.on .cnt{ background:var(--accent);}
.lb-bid{ background:var(--card); border:1px solid var(--line); border-radius:16px; padding:16px; margin-bottom:12px; box-shadow:var(--shadow); animation:slideIn .35s both;}
.lb-bid-top{ display:flex; align-items:flex-start; gap:12px;}
.lb-bid .svc{ font-weight:700; font-size:15.5px;}
.lb-bid .cust{ font-size:12.5px; color:var(--ink-soft); margin-top:3px; display:flex; gap:12px; flex-wrap:wrap;}
.lb-bid .cust span{ display:flex; align-items:center; gap:4px;}
.lb-bid-price{ margin-left:auto; text-align:right; flex:none;}
.lb-bid-price .pp{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:26px; line-height:1;}
.lb-bid-price .ind{ font-size:10.5px; font-weight:700; margin-top:3px; padding:2px 8px; border-radius:999px; display:inline-block;}
.lb-bid-fields{ display:flex; flex-wrap:wrap; gap:6px; margin-top:12px;}
.lb-bid-acts{ display:flex; gap:10px; margin-top:14px;}
.lb-statusbadge{ display:inline-flex; align-items:center; gap:6px; font-size:12.5px; font-weight:700; padding:8px 12px; border-radius:10px; margin-top:12px;}
.lb-statusbadge.pending{ background:#fff6e6; color:#b07400;}
.lb-statusbadge.won{ background:var(--green-soft); color:var(--green);}
.lb-statusbadge.lost{ background:#f3eae8; color:var(--ink-soft);}
.lb-empty-tab{ text-align:center; color:var(--ink-soft); padding:40px 16px; font-size:14px;}
.lb-empty-tab svg{ opacity:.4; margin-bottom:10px;}

/* guest browse + sign-up modal */
.lb-guest-cta{ text-align:center; margin-top:18px;}
.lb-guest-btn{ background:none; border:none; color:var(--accent-deep); font-family:'Hanken Grotesk'; font-weight:700; font-size:14.5px; cursor:pointer; display:inline-flex; align-items:center; gap:7px; padding:8px;}
.lb-guest-btn:hover{ text-decoration:underline;}
.lb-modal-overlay{ position:fixed; inset:0; z-index:60; background:rgba(24,20,16,.5); backdrop-filter:blur(3px); display:flex; align-items:flex-start; justify-content:center; padding:24px 16px 48px; overflow-y:auto; animation:fadeIn .2s ease;}
@keyframes fadeIn{ from{opacity:0;} to{opacity:1;} }
.lb-modal{ background:var(--card); border-radius:22px; box-shadow:0 30px 80px -20px rgba(24,20,16,.55); padding:24px; width:100%; max-width:430px; position:relative; margin-top:18px; animation:slideIn .3s both;}
.lb-modal-close{ position:absolute; top:14px; right:14px; width:34px;height:34px;border-radius:50%; border:1px solid var(--line); background:var(--paper); cursor:pointer; display:grid;place-items:center; color:var(--ink-soft);}
.lb-modal-close:hover{ border-color:#cdbfa6; color:var(--ink);}
.lb-modal h3{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:22px; padding-right:38px; line-height:1.1;}
.lb-modal .sumline{ background:#fff6f0; border:1px solid #ffd6c2; border-radius:12px; padding:12px 14px; margin:14px 0 18px; font-size:13.5px; line-height:1.5; color:var(--ink-soft);}
.lb-modal .sumline b{ font-weight:700; color:var(--ink);}

/* uploads + media */
.lb-textarea{ width:100%; font-family:'Hanken Grotesk'; font-size:15px; padding:11px 13px; border:1.5px solid var(--line); border-radius:11px; background:#fff; color:var(--ink); outline:none; resize:vertical; min-height:68px;}
.lb-textarea:focus{ border-color:var(--accent);}
.lb-upload-row{ display:flex; gap:14px; align-items:center;}
.lb-logo-drop{ width:74px;height:74px;border-radius:16px; border:2px dashed var(--line); background:var(--paper); display:grid;place-items:center; cursor:pointer; color:var(--ink-soft); overflow:hidden; flex:none; text-align:center;}
.lb-logo-drop img{ width:100%;height:100%;object-fit:cover;}
.lb-logo-drop:hover{ border-color:var(--accent); color:var(--accent-deep);}
.lb-uploadbtn{ display:inline-flex; align-items:center; gap:7px; border:1.5px solid var(--line); background:#fff; border-radius:11px; padding:11px 14px; font-family:'Hanken Grotesk'; font-weight:600; font-size:13.5px; cursor:pointer; color:var(--ink);}
.lb-uploadbtn:hover{ border-color:var(--accent);}
.lb-photos{ display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;}
.lb-photo-wrap{ position:relative;}
.lb-photo-wrap img{ width:72px;height:72px;border-radius:11px; object-fit:cover; border:1px solid var(--line); display:block;}
.lb-photo-rm{ position:absolute; top:-7px; right:-7px; width:21px;height:21px;border-radius:50%; background:var(--ink); color:#fff; border:2px solid var(--card); cursor:pointer; display:grid;place-items:center;}
.lb-subhead{ font-family:'Bricolage Grotesque'; font-weight:700; font-size:13px; color:var(--ink); margin:6px 0 12px; padding-top:18px; border-top:1px solid var(--line);}

/* dashboard profile media */
.lb-bizhead{ display:flex; gap:14px; align-items:center; margin-bottom:4px;}
.lb-bizlogo{ width:56px;height:56px;border-radius:15px; object-fit:cover; border:1px solid var(--line); flex:none; background:var(--ink); display:grid;place-items:center; color:var(--paper);}
.lb-bizlogo img{ width:100%;height:100%;object-fit:cover; border-radius:15px;}
.lb-bizbio{ font-size:13.5px; color:var(--ink-soft); line-height:1.5; margin:2px 0 14px;}
.lb-gallery{ display:flex; gap:8px; overflow-x:auto; margin:0 0 18px; padding-bottom:4px;}
.lb-gallery img{ width:104px;height:78px;border-radius:12px; object-fit:cover; border:1px solid var(--line); flex:none;}

/* agreement + policy */
.lb-agree{ display:flex; gap:11px; align-items:flex-start; background:var(--paper); border:1.5px solid var(--line); border-radius:13px; padding:14px; margin:6px 0 18px; cursor:pointer; transition:border-color .15s, background .15s;}
.lb-agree.on{ border-color:var(--green); background:var(--green-soft);}
.lb-check{ width:24px;height:24px;border-radius:7px; border:2px solid var(--line); flex:none; display:grid;place-items:center; background:#fff; color:#fff; transition:.15s;}
.lb-agree.on .lb-check{ background:var(--green); border-color:var(--green);}
.lb-agree .txt{ font-size:12.5px; line-height:1.5; color:var(--ink-soft);}
.lb-agree .txt b{ color:var(--ink); font-weight:700;}
.lb-policy-toggle{ background:none; border:none; color:var(--accent-deep); font-weight:700; font-size:13px; cursor:pointer; padding:0; text-decoration:underline; margin-bottom:6px; display:inline-flex; align-items:center; gap:5px;}
.lb-policy{ background:var(--paper); border:1px solid var(--line); border-radius:12px; padding:14px 16px; margin-bottom:14px; max-height:230px; overflow-y:auto; font-size:12.5px; line-height:1.55; color:var(--ink-soft);}
.lb-policy h4{ font-family:'Bricolage Grotesque'; font-size:13px; color:var(--ink); margin:12px 0 5px;}
.lb-policy h4:first-child{ margin-top:0;}
.lb-policy ul{ margin:4px 0 4px 17px;}
.lb-policy li{ margin-bottom:4px;}
.lb-editbtn{ border:1.5px solid var(--line); background:var(--card); border-radius:11px; padding:9px 13px; font-family:'Hanken Grotesk'; font-weight:600; font-size:13px; cursor:pointer; color:var(--ink); display:inline-flex; align-items:center; gap:6px; flex:none;}
.lb-editbtn:hover{ border-color:var(--accent);}

/* pricing breakdown + payout + Pro */
.lb-breakdown{ border:1px solid var(--line); border-radius:14px; padding:4px 16px; margin-bottom:14px; background:var(--card);}
.lb-brow{ display:flex; justify-content:space-between; align-items:baseline; padding:11px 0; border-bottom:1px dashed var(--line); font-size:14px;}
.lb-brow:last-child{ border-bottom:none;}
.lb-brow .k{ color:var(--ink-soft);}
.lb-brow .k small{ display:block; font-size:11px; margin-top:2px; opacity:.8;}
.lb-brow .v{ font-weight:700;}
.lb-brow.total .k{ color:var(--ink); font-weight:700;}
.lb-brow.total .v{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:20px;}
.lb-payout{ display:flex; align-items:center; gap:7px; font-size:12.5px; color:var(--ink-soft); margin-top:10px; background:var(--paper); border:1px dashed var(--line); border-radius:10px; padding:8px 11px;}
.lb-payout b{ color:var(--green); font-weight:800;}
.lb-pro{ border:1.5px solid var(--ink); border-radius:16px; padding:15px 16px; margin:0 0 18px; background:linear-gradient(135deg,#1a1613 0%, #322a22 100%); color:#f5efe3; display:flex; align-items:center; gap:13px;}
.lb-pro .star{ width:38px;height:38px;border-radius:11px; background:var(--accent); display:grid;place-items:center; flex:none; color:#fff;}
.lb-pro .tt{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:15px;}
.lb-pro .dd{ font-size:12px; color:#c8bfb2; margin-top:2px; line-height:1.4;}
.lb-pro .dd b{ color:#fff;}
.lb-pro button{ margin-left:auto; flex:none; font-family:'Bricolage Grotesque'; font-weight:700; font-size:13px; padding:10px 14px; border:none; border-radius:10px; background:var(--accent); color:#fff; cursor:pointer;}
.lb-probadge{ display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:800; background:var(--ink); color:var(--accent); border-radius:999px; padding:4px 10px; letter-spacing:.05em;}
`;

/* ------------------- field helpers ------------------- */
// types: select(options), text, number
const F = (key, label, type, opts = {}) => ({ key, label, type, ...opts });
const sizeOpts = ["Small", "Medium", "Large"];
const yesno = ["Yes", "No"];

/* --------------------------- catalog --------------------------- */
const CATEGORIES = [
  {
    id: "locksmith", name: "Locksmith", sub: "keys, lockouts, locks", icon: Wrench, color: "#b5651d",
    services: [
      { id: "carkey", name: "Car key replacement", typical: 180, fields: [
        F("make", "Car make", "text", { placeholder: "Honda", required: true }),
        F("model", "Model", "text", { placeholder: "Civic", required: true }),
        F("year", "Year", "number", { placeholder: "2019", required: true }),
        F("keytype", "Key type", "select", { options: ["Standard key", "Transponder / chip key", "Smart / push-to-start fob"], required: true }),
      ]},
      { id: "lockout", name: "Lockout service", typical: 95, fields: [
        F("where", "Locked out of", "select", { options: ["Car", "Home / apartment", "Business"], required: true }),
      ]},
      { id: "rekey", name: "Rekey locks", typical: 130, fields: [
        F("count", "How many locks?", "number", { placeholder: "3", required: true }),
      ]},
      { id: "aptlock", name: "Apartment / house lock replacement", typical: 160, fields: [
        F("count", "How many doors?", "number", { placeholder: "1", required: true }),
        F("type", "Lock type", "select", { options: ["Deadbolt", "Knob lock", "Mortise lock", "Not sure" ] }),
      ]},
      { id: "smart", name: "Smart lock installation", typical: 200, fields: [
        F("brand", "Brand (if known)", "text", { placeholder: "August, Schlage…" }),
      ]},
      { id: "safe", name: "Safe opening / repair", typical: 220 },
    ],
  },
  {
    id: "spa", name: "Spa & Massage", sub: "facials, massage", icon: Sparkles, color: "#a8557a",
    services: [
      { id: "facial", name: "Facial (60 min)", typical: 95 },
      { id: "m30", name: "30-minute massage", typical: 55 },
      { id: "m60", name: "60-minute massage", typical: 90 },
      { id: "m90", name: "90-minute massage", typical: 130 },
      { id: "deep", name: "Deep tissue massage (60 min)", typical: 110 },
      { id: "hotstone", name: "Hot stone massage (90 min)", typical: 150 },
      { id: "couples", name: "Couples massage (60 min)", typical: 200 },
    ],
  },
  {
    id: "ac", name: "AC Repair", sub: "HVAC service", icon: Wind, color: "#2b7fb0",
    services: [
      { id: "diag", name: "Diagnostic / service call", typical: 90 },
      { id: "repair", name: "AC repair", typical: 220, fields: [
        F("issue", "What's wrong?", "select", { options: ["Not cooling", "Won't turn on", "Leaking water", "Strange noise", "Frozen coils", "Other"], required: true }),
      ]},
      { id: "tune", name: "AC tune-up / maintenance", typical: 130 },
      { id: "recharge", name: "Refrigerant recharge", typical: 250 },
      { id: "install", name: "New AC unit installation", typical: 4500, fields: [
        F("sqft", "Home size (sq ft)", "number", { placeholder: "1800", required: true }),
        F("type", "System type", "select", { options: ["Central air", "Mini-split", "Window units", "Not sure"] }),
      ]},
      { id: "thermo", name: "Thermostat installation", typical: 160 },
    ],
  },
  {
    id: "grooming", name: "Pet Grooming", sub: "bath, cut, nails", icon: PawPrint, color: "#7a8c3a",
    services: [
      { id: "bath", name: "Bath & brush", typical: 45, fields: [ F("size", "Pet size", "select", { options: sizeOpts, required: true }) ]},
      { id: "fullgroom", name: "Full groom (bath + haircut)", typical: 80, fields: [
        F("size", "Pet size", "select", { options: sizeOpts, required: true }),
        F("breed", "Breed", "text", { placeholder: "Goldendoodle" }),
      ]},
      { id: "nails", name: "Nail trim", typical: 20 },
      { id: "deshed", name: "De-shedding treatment", typical: 60, fields: [ F("size", "Pet size", "select", { options: sizeOpts, required: true }) ]},
      { id: "cat", name: "Cat grooming", typical: 70 },
    ],
  },
  {
    id: "plumbing", name: "Plumbing", sub: "leaks, drains", icon: Droplet, color: "#2f6f8f",
    services: [
      { id: "drain", name: "Clogged drain", typical: 150, fields: [ F("where", "Which drain?", "select", { options: ["Kitchen sink", "Bathroom sink", "Shower / tub", "Toilet", "Main line"] }) ]},
      { id: "leak", name: "Leak repair", typical: 200 },
      { id: "faucet", name: "Faucet install / replace", typical: 175 },
      { id: "toilet", name: "Toilet repair / install", typical: 220 },
      { id: "wh-repair", name: "Water heater repair", typical: 280, fields: [ F("type", "Heater type", "select", { options: ["Tank", "Tankless", "Not sure"] }) ]},
      { id: "wh-install", name: "Water heater installation", typical: 1400 },
      { id: "disposal", name: "Garbage disposal install", typical: 200 },
    ],
  },
  {
    id: "electric", name: "Electrician", sub: "wiring, fixtures", icon: Zap, color: "#c79a1e",
    services: [
      { id: "outlet", name: "Outlet / switch install", typical: 150, fields: [ F("count", "How many?", "number", { placeholder: "2" }) ]},
      { id: "fan", name: "Ceiling fan installation", typical: 175 },
      { id: "fixture", name: "Light fixture install", typical: 160 },
      { id: "ev", name: "EV charger installation", typical: 800 },
      { id: "panel", name: "Electrical panel upgrade", typical: 2200 },
      { id: "troubleshoot", name: "Troubleshooting / diagnostic", typical: 120, fields: [ F("issue", "Describe the issue", "text", { placeholder: "Breaker keeps tripping" }) ]},
    ],
  },
  {
    id: "cleaning", name: "House Cleaning", sub: "deep clean", icon: Home, color: "#3a8c6e",
    services: [
      { id: "standard", name: "Standard cleaning", typical: 130, fields: [
        F("beds", "Bedrooms", "number", { placeholder: "3", required: true }),
        F("baths", "Bathrooms", "number", { placeholder: "2", required: true }),
      ]},
      { id: "deep", name: "Deep cleaning", typical: 230, fields: [
        F("beds", "Bedrooms", "number", { placeholder: "3", required: true }),
        F("baths", "Bathrooms", "number", { placeholder: "2", required: true }),
      ]},
      { id: "movein", name: "Move-in / move-out cleaning", typical: 300 },
      { id: "recurring", name: "Recurring cleaning", typical: 110, fields: [ F("freq", "How often?", "select", { options: ["Weekly", "Bi-weekly", "Monthly"], required: true }) ]},
    ],
  },
  {
    id: "detailing", name: "Car Detailing", sub: "interior, wax", icon: Car, color: "#3b5b8c",
    services: [
      { id: "interior", name: "Interior detail", typical: 120, fields: [ F("vtype", "Vehicle type", "select", { options: ["Sedan / coupe", "SUV / minivan", "Truck"], required: true }) ]},
      { id: "exterior", name: "Exterior wash & wax", typical: 90, fields: [ F("vtype", "Vehicle type", "select", { options: ["Sedan / coupe", "SUV / minivan", "Truck"], required: true }) ]},
      { id: "full", name: "Full detail (in & out)", typical: 200, fields: [ F("vtype", "Vehicle type", "select", { options: ["Sedan / coupe", "SUV / minivan", "Truck"], required: true }) ]},
      { id: "ceramic", name: "Ceramic coating", typical: 600 },
    ],
  },
  {
    id: "tutoring", name: "Tutoring", sub: "academic, music", icon: GraduationCap, color: "#8c5a3b",
    services: [
      { id: "math", name: "Math tutoring", typical: 55, fields: [ F("level", "Level", "select", { options: ["Elementary", "Middle school", "High school", "College"], required: true }) ]},
      { id: "test", name: "SAT / ACT prep", typical: 75 },
      { id: "science", name: "Science tutoring", typical: 60, fields: [ F("subject", "Subject", "select", { options: ["Biology", "Chemistry", "Physics", "General"] }) ]},
      { id: "language", name: "Language tutoring", typical: 50, fields: [ F("lang", "Language", "text", { placeholder: "Spanish", required: true }) ]},
      { id: "music", name: "Music lessons", typical: 50, fields: [ F("inst", "Instrument", "text", { placeholder: "Piano", required: true }) ]},
    ],
  },
  {
    id: "salon", name: "Hair & Beauty", sub: "cut, color, style", icon: Scissors, color: "#b5476a",
    services: [
      { id: "wcut", name: "Women's haircut", typical: 55 },
      { id: "mcut", name: "Men's haircut", typical: 35 },
      { id: "color", name: "Color / highlights", typical: 130 },
      { id: "balayage", name: "Balayage", typical: 180 },
      { id: "blowout", name: "Blowout / style", typical: 55 },
      { id: "keratin", name: "Keratin treatment", typical: 220 },
    ],
  },
  {
    id: "handyman", name: "Handyman", sub: "repairs, mounting", icon: Hammer, color: "#9a6b2f",
    services: [
      { id: "tv", name: "TV mounting", typical: 120, fields: [ F("size", "TV size (inches)", "number", { placeholder: "55" }) ]},
      { id: "furniture", name: "Furniture assembly", typical: 90, fields: [ F("items", "How many items?", "number", { placeholder: "2" }) ]},
      { id: "drywall", name: "Drywall repair", typical: 200 },
      { id: "hang", name: "Picture / shelf hanging", typical: 75 },
      { id: "general", name: "General repairs", typical: 110, fields: [ F("desc", "Describe the job", "text", { placeholder: "Fix squeaky door, patch wall", required: true }) ]},
    ],
  },
  {
    id: "pest", name: "Pest Control", sub: "ants, roaches", icon: Bug, color: "#5c7a3a",
    services: [
      { id: "general", name: "General pest treatment", typical: 140, fields: [ F("pest", "Main pest", "select", { options: ["Ants", "Roaches", "Spiders", "Multiple / not sure"], required: true }) ]},
      { id: "termite", name: "Termite inspection & treatment", typical: 350 },
      { id: "rodent", name: "Rodent control", typical: 250 },
      { id: "bedbug", name: "Bed bug treatment", typical: 500 },
      { id: "mosquito", name: "Mosquito treatment", typical: 120 },
    ],
  },
  {
    id: "painting", name: "Painting", sub: "interior, trim", icon: Paintbrush, color: "#3a6b8c",
    services: [
      { id: "interior", name: "Interior room painting", typical: 350, fields: [ F("rooms", "How many rooms?", "number", { placeholder: "2", required: true }) ]},
      { id: "exterior", name: "Exterior house painting", typical: 3000, fields: [ F("stories", "Stories", "select", { options: ["1 story", "2 story", "3+ story"], required: true }) ]},
      { id: "cabinets", name: "Cabinet painting", typical: 900 },
      { id: "trim", name: "Trim / door painting", typical: 250 },
    ],
  },
  {
    id: "wellness", name: "Wellness", sub: "PT, chiro, training", icon: Heart, color: "#b5476a",
    services: [
      { id: "pt", name: "Physical therapy session", typical: 110 },
      { id: "chiro", name: "Chiropractic adjustment", typical: 75 },
      { id: "pt-train", name: "Personal training session", typical: 65 },
      { id: "acu", name: "Acupuncture session", typical: 90 },
      { id: "nutrition", name: "Nutrition consultation", typical: 100 },
    ],
  },
  {
    id: "gardener", name: "Gardener", sub: "lawn, trees, beds", icon: Trees, color: "#3f7a3a",
    services: [
      { id: "mow", name: "Lawn mowing", typical: 50, fields: [ F("size", "Yard size", "select", { options: sizeOpts, required: true }) ]},
      { id: "hedge", name: "Hedge / bush trimming", typical: 90 },
      { id: "tree", name: "Tree trimming", typical: 250, fields: [ F("count", "How many trees?", "number", { placeholder: "2" }) ]},
      { id: "cleanup", name: "Weeding & yard cleanup", typical: 120, fields: [ F("size", "Yard size", "select", { options: sizeOpts, required: true }) ]},
      { id: "landscape", name: "Planting / landscaping", typical: 400, fields: [ F("desc", "What do you want done?", "text", { placeholder: "New flower beds out front" }) ]},
      { id: "sod", name: "Sod installation", typical: 600, fields: [ F("sqft", "Area (sq ft)", "number", { placeholder: "500" }) ]},
      { id: "leaf", name: "Leaf removal", typical: 110, fields: [ F("size", "Yard size", "select", { options: sizeOpts, required: true }) ]},
    ],
  },
  {
    id: "irrigation", name: "Irrigation", sub: "sprinklers, drip", icon: Droplets, color: "#2f86a6",
    services: [
      { id: "repair", name: "Sprinkler repair", typical: 150, fields: [
        F("zones", "How many zones affected?", "number", { placeholder: "2" }),
        F("issue", "What's wrong?", "select", { options: ["Head not spraying", "Leak / pooling", "Low pressure", "Controller / timer", "Not sure"], required: true }),
      ]},
      { id: "install", name: "New sprinkler system install", typical: 2800, fields: [
        F("size", "Yard size", "select", { options: sizeOpts, required: true }),
        F("zones", "Estimated zones", "number", { placeholder: "4" }),
      ]},
      { id: "tune", name: "System tune-up / inspection", typical: 110 },
      { id: "drip", name: "Drip irrigation install", typical: 450, fields: [ F("area", "Area / beds", "text", { placeholder: "Front flower beds" }) ]},
      { id: "backflow", name: "Backflow testing", typical: 90 },
      { id: "winter", name: "Winterization / blowout", typical: 90, fields: [ F("zones", "How many zones?", "number", { placeholder: "5" }) ]},
    ],
  },
  {
    id: "garage", name: "Garage Door", sub: "springs, openers", icon: Warehouse, color: "#6b6f76",
    services: [
      { id: "spring", name: "Spring repair / replacement", typical: 250 },
      { id: "opener-repair", name: "Opener repair", typical: 150, fields: [ F("brand", "Opener brand", "text", { placeholder: "LiftMaster" }) ]},
      { id: "opener-install", name: "New opener installation", typical: 400 },
      { id: "offtrack", name: "Off-track / cable repair", typical: 200 },
      { id: "panel", name: "Panel replacement", typical: 350 },
      { id: "newdoor", name: "New garage door installation", typical: 1200, fields: [ F("size", "Door size", "select", { options: ["Single car", "Double car"], required: true }) ]},
      { id: "tuneup", name: "Tune-up / maintenance", typical: 100 },
    ],
  },
  {
    id: "insurance", name: "Insurance", sub: "car, home, business", icon: Umbrella, color: "#2f6f8f",
    services: [
      { id: "car", name: "Car insurance quote", typical: 140, fields: [
        F("make", "Vehicle make", "text", { placeholder: "Honda", required: true }),
        F("model", "Model", "text", { placeholder: "Civic", required: true }),
        F("year", "Year", "number", { placeholder: "2019", required: true }),
        F("coverage", "Coverage", "select", { options: ["Liability only", "Full coverage"], required: true }),
        F("drivers", "Drivers on policy", "number", { placeholder: "1" }),
      ]},
      { id: "home", name: "Home insurance quote", typical: 110, fields: [
        F("proptype", "Property type", "select", { options: ["House", "Condo", "Townhome"], required: true }),
        F("built", "Year built", "number", { placeholder: "1998" }),
        F("coverage", "Coverage level", "select", { options: ["Basic", "Standard", "Premium"] }),
      ]},
      { id: "renters", name: "Renters insurance quote", typical: 20, fields: [
        F("amount", "Coverage amount", "select", { options: ["$15k", "$30k", "$50k", "$100k"], required: true }),
      ]},
      { id: "business", name: "Business insurance quote", typical: 200, fields: [
        F("biztype", "Business type", "text", { placeholder: "Coffee shop", required: true }),
        F("employees", "Employees", "number", { placeholder: "5" }),
        F("coverage", "Coverage", "select", { options: ["General liability", "Business owner's policy", "Workers' comp", "Professional liability"], required: true }),
      ]},
      { id: "life", name: "Life insurance quote", typical: 50, fields: [
        F("amount", "Coverage amount", "select", { options: ["$100k", "$250k", "$500k", "$1M"], required: true }),
        F("term", "Term", "select", { options: ["10 years", "20 years", "30 years", "Whole life"] }),
      ]},
      { id: "health", name: "Health insurance quote", typical: 350, fields: [
        F("who", "Who's covered?", "select", { options: ["Individual", "Couple", "Family"], required: true }),
      ]},
    ],
  },
  {
    id: "garbage", name: "Garbage Removal", sub: "junk, hauling", icon: Trash2, color: "#5c6b3a",
    services: [
      { id: "single", name: "Single item pickup", typical: 80, fields: [ F("item", "What item?", "text", { placeholder: "Old sofa", required: true }) ]},
      { id: "furniture", name: "Furniture removal", typical: 150 },
      { id: "appliance", name: "Appliance removal", typical: 120, fields: [ F("item", "Which appliance?", "text", { placeholder: "Refrigerator" }) ]},
      { id: "junk", name: "Full junk / haul-away", typical: 300, fields: [ F("load", "Load size", "select", { options: ["Quarter truck", "Half truck", "Full truck"], required: true }) ]},
      { id: "construction", name: "Construction debris removal", typical: 400 },
      { id: "yard", name: "Yard waste removal", typical: 120, fields: [ F("size", "Amount", "select", { options: sizeOpts, required: true }) ]},
      { id: "recurring", name: "Recurring trash pickup", typical: 40, fields: [ F("freq", "How often?", "select", { options: ["Weekly", "Bi-weekly", "Monthly"], required: true }) ]},
      { id: "cleanout", name: "Estate / full cleanout", typical: 600 },
    ],
  },
];

const NAME_A = ["Bright", "Summit", "Coastal", "Pioneer", "Liberty", "Apex", "Evergreen", "Reliant", "Anchor", "Crown", "Sunline", "Metro", "Harbor", "Ironwood", "Bluepeak", "Cypress", "Magnolia"];
const NAME_B = ["Pro", "Care", "Works", "Service", "Solutions", "Group", "Experts", "& Co", "Masters", "Hub"];
const FIRST = ["Maria", "James", "Aisha", "Tom", "Priya", "Carlos", "Dana", "Ken", "Lena", "Marcus", "Sofia", "Raj", "Nina", "Omar"];
const REVIEW_POOL = [
  "Showed up on time and finished faster than expected. Fair price.",
  "Super friendly and explained everything clearly. Would book again.",
  "Quality work, though scheduling took a couple of texts to lock in.",
  "Honestly the best value I found in the area. Highly recommend.",
  "Professional and clean. No surprise charges at the end.",
  "Great communication start to finish. Very happy with the result.",
  "Did exactly what I asked and respected my budget.",
  "Quick response and solid work. Took off a star for the wait.",
];
function rand(a) { return a[Math.floor(Math.random() * a.length)]; }
function rnd(a, b) { return Math.random() * (b - a) + a; }

function makeBusinesses(cat, bid, typical, radius) {
  const count = 5 + Math.floor(Math.random() * 4);
  const list = []; const used = new Set();
  const word = cat.name.split(" ")[0];
  for (let i = 0; i < count; i++) {
    let realName;
    do { realName = `${rand(NAME_A)} ${word} ${rand(NAME_B)}`; } while (used.has(realName));
    used.add(realName);
    const ratio = bid / typical;
    const acceptChance = Math.min(0.92, Math.max(0.07, ratio - 0.35));
    const code = "LB-" + Math.floor(rnd(1000, 9999));
    list.push({
      id: i,
      realName,                                  // hidden until job complete
      firstName: rand(FIRST),                    // revealed only after booking
      handle: `Verified ${word} Pro`,            // anonymous public label
      code,                                      // anonymous reference id
      proxy: `(555) 0${Math.floor(rnd(10, 99))}-${Math.floor(rnd(1000, 9999))}`, // masked line
      rating: +(rnd(3.7, 5)).toFixed(1),
      reviews: Math.floor(rnd(12, 480)),
      distance: +(rnd(0.6, radius)).toFixed(1),
      responseMins: Math.floor(rnd(2, 28)),
      years: Math.floor(rnd(1, 12)),
      jobs: Math.floor(rnd(40, 900)),
      responseDelay: 700 + Math.random() * 4200,
      willAccept: Math.random() < acceptChance,
      decided: false, accepted: false,
      reviewsArr: Array.from({ length: 3 }, () => ({ name: rand(FIRST), stars: Math.random() < 0.8 ? 5 : 4, text: rand(REVIEW_POOL) })),
      avatarColor: `hsl(${Math.floor(rnd(0, 360))} 45% 42%)`,
    });
  }
  return list;
}
const CHAT_REPLIES = [
  "Great! I can come out tomorrow morning — does 9am work for you?",
  "Perfect. I just need your address and I'll confirm the appointment.",
  "Yes, that price works for me. Looking forward to helping you out!",
  "Sure thing. I'll bring everything needed for the job.",
  "No problem at all. I'll send a confirmation text shortly.",
  "Happy to answer any questions before we lock in the time.",
];
// customer replies on the business-side chat
const CUST_REPLIES = [
  "Sounds good — tomorrow morning works for me.",
  "Great, thanks! What time should I expect you?",
  "Perfect. I'll be home all afternoon.",
  "Yes that works. See you then!",
  "Could you do a bit later in the day instead?",
  "Awesome, appreciate the quick response.",
];
// realistic stand-in answers for generated bid detail fields
const SAMPLES = {
  make: ["Honda", "Toyota", "Ford", "Nissan", "Chevrolet", "Hyundai", "Kia"],
  model: ["Civic", "Camry", "F-150", "Altima", "Malibu", "Elantra", "CR-V"],
  year: ["2014", "2017", "2019", "2020", "2022", "2023"],
  breed: ["Goldendoodle", "Labrador", "Poodle mix", "Shih Tzu", "Husky", "Beagle"],
  desc: ["Patch a wall hole and fix a squeaky door", "Mount 2 floating shelves", "Replace a broken cabinet hinge"],
  lang: ["Spanish", "French", "Mandarin", "German"],
  inst: ["Piano", "Guitar", "Violin", "Drums"],
  area: ["Front flower beds", "Backyard vegetable garden", "Side-yard planters"],
  brand: ["August", "Schlage", "Yale", "Kwikset"],
  item: ["Old sofa", "Refrigerator", "Mattress", "Treadmill", "Dining table"],
  biztype: ["Coffee shop", "Auto repair shop", "Hair salon", "Consulting firm", "Bakery"],
};
function now() { return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }); }
function timeAgoMs(ts, lang) {
  const m = Math.max(1, Math.round((Date.now() - ts) / 60000));
  const v = m < 60 ? `${m}m` : m < 1440 ? `${Math.floor(m / 60)}h` : `${Math.floor(m / 1440)}d`;
  return lang === "es" ? `hace ${v}` : `${v} ago`;
}
function readImageFile(file, cb) { const r = new FileReader(); r.onload = () => cb(r.result); r.readAsDataURL(file); }

/* ------------------- i18n: English / Espanol ------------------- */
const ES = {
  // chrome & hero
  "You name the price": "Tú pones el precio",
  "Set your price.": "Pon tu precio.",
  "Let pros compete.": "Deja que los profesionales compitan.",
  "Choose a service, tell us exactly what you need, and name your price. We broadcast your bid to local businesses — they accept or pass, and you pick who you like best.": "Elige un servicio, dinos exactamente qué necesitas y pon tu precio. Enviamos tu oferta a negocios locales: ellos aceptan o pasan, y tú eliges al que más te guste.",
  "Choose service": "Elige el servicio", "Bid your price": "Pon tu precio", "Pros respond": "Profesionales responden", "Chat & book": "Chatea y reserva",
  "Pick a category": "Elige una categoría", "Get started on LeadBid": "Empieza en LeadBid",
  "I'm a customer": "Soy cliente", "I'm a business": "Soy un negocio",
  "Browse freely — create an account when you're ready to place a bid, chat with pros, and book, protected end to end.": "Explora libremente: crea una cuenta cuando estés listo para ofertar, chatear con profesionales y reservar, protegido de principio a fin.",
  "Get matched to real local jobs with the price already on the table. Accept the ones you want — no cold leads.": "Recibe trabajos locales reales con el precio ya sobre la mesa. Acepta los que quieras, sin leads fríos.",
  "Sign up": "Regístrate", "Log in": "Iniciar sesión", "Log out": "Cerrar sesión",
  "Browsing": "Explorando", "Sign up / Log in": "Registrarse / Entrar", "My jobs": "Mis trabajos",
  "Prototype demo · business responses are simulated for illustration": "Demo de prototipo · las respuestas de negocios son simuladas",
  // categories
  "Locksmith": "Cerrajero", "Spa & Massage": "Spa y Masajes", "AC Repair": "Reparación de A/C", "Pet Grooming": "Peluquería de Mascotas",
  "Plumbing": "Plomería", "Electrician": "Electricista", "House Cleaning": "Limpieza del Hogar", "Car Detailing": "Detallado de Autos",
  "Tutoring": "Tutorías", "Hair & Beauty": "Peluquería y Belleza", "Handyman": "Mantenimiento", "Pest Control": "Control de Plagas",
  "Painting": "Pintura", "Wellness": "Bienestar", "Gardener": "Jardinería", "Irrigation": "Riego",
  "Garage Door": "Puerta de Garaje", "Insurance": "Seguros", "Garbage Removal": "Recolección de Basura",
  "keys, lockouts, locks": "llaves, cerraduras", "facials, massage": "faciales, masajes", "HVAC service": "servicio HVAC",
  "bath, cut, nails": "baño, corte, uñas", "leaks, drains": "fugas, desagües", "wiring, fixtures": "cableado, lámparas",
  "deep clean": "limpieza profunda", "interior, wax": "interior, encerado", "academic, music": "académico, música",
  "cut, color, style": "corte, color, estilo", "repairs, mounting": "reparaciones, montaje", "ants, roaches": "hormigas, cucarachas",
  "interior, trim": "interior, molduras", "PT, chiro, training": "fisio, quiro, entrenamiento", "lawn, trees, beds": "césped, árboles",
  "sprinklers, drip": "aspersores, goteo", "springs, openers": "resortes, motores", "car, home, business": "auto, hogar, negocio", "junk, hauling": "chatarra, acarreo",
  // services
  "Car key replacement": "Reemplazo de llave de auto", "Lockout service": "Apertura por bloqueo", "Rekey locks": "Recombinar cerraduras",
  "Apartment / house lock replacement": "Cambio de cerradura de casa/apartamento", "Smart lock installation": "Instalación de cerradura inteligente", "Safe opening / repair": "Apertura/reparación de caja fuerte",
  "Facial (60 min)": "Facial (60 min)", "30-minute massage": "Masaje de 30 minutos", "60-minute massage": "Masaje de 60 minutos", "90-minute massage": "Masaje de 90 minutos",
  "Deep tissue massage (60 min)": "Masaje de tejido profundo (60 min)", "Hot stone massage (90 min)": "Masaje con piedras calientes (90 min)", "Couples massage (60 min)": "Masaje en pareja (60 min)",
  "Diagnostic / service call": "Diagnóstico / visita de servicio", "AC repair": "Reparación de A/C", "AC tune-up / maintenance": "Mantenimiento de A/C",
  "Refrigerant recharge": "Recarga de refrigerante", "New AC unit installation": "Instalación de A/C nuevo", "Thermostat installation": "Instalación de termostato",
  "Bath & brush": "Baño y cepillado", "Full groom (bath + haircut)": "Aseo completo (baño + corte)", "Nail trim": "Corte de uñas",
  "De-shedding treatment": "Tratamiento antimuda", "Cat grooming": "Aseo de gatos",
  "Clogged drain": "Desagüe tapado", "Leak repair": "Reparación de fugas", "Faucet install / replace": "Instalación/cambio de grifo",
  "Toilet repair / install": "Reparación/instalación de inodoro", "Water heater repair": "Reparación de calentador", "Water heater installation": "Instalación de calentador",
  "Garbage disposal install": "Instalación de triturador",
  "Outlet / switch install": "Instalación de tomacorrientes", "Ceiling fan installation": "Instalación de ventilador de techo", "Light fixture install": "Instalación de lámparas",
  "EV charger installation": "Instalación de cargador EV", "Electrical panel upgrade": "Actualización de panel eléctrico", "Troubleshooting / diagnostic": "Diagnóstico de fallas",
  "Standard cleaning": "Limpieza estándar", "Deep cleaning": "Limpieza profunda", "Move-in / move-out cleaning": "Limpieza de mudanza", "Recurring cleaning": "Limpieza recurrente",
  "Interior detail": "Detallado interior", "Exterior wash & wax": "Lavado y encerado exterior", "Full detail (in & out)": "Detallado completo", "Ceramic coating": "Recubrimiento cerámico",
  "Math tutoring": "Tutoría de matemáticas", "SAT / ACT prep": "Preparación SAT/ACT", "Science tutoring": "Tutoría de ciencias", "Language tutoring": "Tutoría de idiomas", "Music lessons": "Clases de música",
  "Women's haircut": "Corte de dama", "Men's haircut": "Corte de caballero", "Color / highlights": "Color / mechas", "Blowout / style": "Secado / peinado", "Keratin treatment": "Tratamiento de keratina",
  "TV mounting": "Montaje de TV", "Furniture assembly": "Armado de muebles", "Drywall repair": "Reparación de drywall", "Picture / shelf hanging": "Colgar cuadros/repisas", "General repairs": "Reparaciones generales",
  "General pest treatment": "Tratamiento general de plagas", "Termite inspection & treatment": "Inspección y tratamiento de termitas", "Rodent control": "Control de roedores",
  "Bed bug treatment": "Tratamiento de chinches", "Mosquito treatment": "Tratamiento de mosquitos",
  "Interior room painting": "Pintura de interiores", "Exterior house painting": "Pintura exterior de casa", "Cabinet painting": "Pintura de gabinetes", "Trim / door painting": "Pintura de molduras/puertas",
  "Physical therapy session": "Sesión de fisioterapia", "Chiropractic adjustment": "Ajuste quiropráctico", "Personal training session": "Sesión de entrenamiento personal",
  "Acupuncture session": "Sesión de acupuntura", "Nutrition consultation": "Consulta de nutrición",
  "Lawn mowing": "Corte de césped", "Hedge / bush trimming": "Poda de setos/arbustos", "Tree trimming": "Poda de árboles", "Weeding & yard cleanup": "Deshierbe y limpieza de patio",
  "Planting / landscaping": "Plantación / paisajismo", "Sod installation": "Instalación de césped", "Leaf removal": "Recolección de hojas",
  "Sprinkler repair": "Reparación de aspersores", "New sprinkler system install": "Instalación de sistema de riego", "System tune-up / inspection": "Inspección y ajuste del sistema",
  "Drip irrigation install": "Instalación de riego por goteo", "Backflow testing": "Prueba de contraflujo", "Winterization / blowout": "Preparación para invierno",
  "Spring repair / replacement": "Reparación/cambio de resortes", "Opener repair": "Reparación de motor", "New opener installation": "Instalación de motor nuevo",
  "Off-track / cable repair": "Reparación de riel/cable", "Panel replacement": "Cambio de panel", "New garage door installation": "Instalación de puerta nueva", "Tune-up / maintenance": "Mantenimiento",
  "Car insurance quote": "Cotización de seguro de auto", "Home insurance quote": "Cotización de seguro de hogar", "Renters insurance quote": "Cotización de seguro de inquilino",
  "Business insurance quote": "Cotización de seguro de negocio", "Life insurance quote": "Cotización de seguro de vida", "Health insurance quote": "Cotización de seguro de salud",
  "Single item pickup": "Recogida de un artículo", "Furniture removal": "Retiro de muebles", "Appliance removal": "Retiro de electrodomésticos", "Full junk / haul-away": "Retiro completo de chatarra",
  "Construction debris removal": "Retiro de escombros", "Yard waste removal": "Retiro de residuos de jardín", "Recurring trash pickup": "Recolección recurrente", "Estate / full cleanout": "Vaciado completo",
  // field labels & options
  "Car make": "Marca del auto", "Model": "Modelo", "Year": "Año", "Key type": "Tipo de llave",
  "Standard key": "Llave estándar", "Transponder / chip key": "Llave con chip", "Smart / push-to-start fob": "Control inteligente",
  "Locked out of": "Bloqueado fuera de", "Car": "Auto", "Home / apartment": "Casa / apartamento", "Business": "Negocio",
  "How many locks?": "¿Cuántas cerraduras?", "How many doors?": "¿Cuántas puertas?", "Lock type": "Tipo de cerradura",
  "Deadbolt": "Cerrojo", "Knob lock": "Cerradura de perilla", "Mortise lock": "Cerradura embutida", "Not sure": "No estoy seguro", "Brand (if known)": "Marca (si la sabes)",
  "What's wrong?": "¿Qué falla?", "Not cooling": "No enfría", "Won't turn on": "No enciende", "Leaking water": "Gotea agua", "Strange noise": "Ruido extraño", "Frozen coils": "Serpentines congelados", "Other": "Otro",
  "Home size (sq ft)": "Tamaño de la casa (pies²)", "System type": "Tipo de sistema", "Central air": "Aire central", "Window units": "Unidades de ventana",
  "Pet size": "Tamaño de la mascota", "Small": "Pequeño", "Medium": "Mediano", "Large": "Grande", "Breed": "Raza",
  "Which drain?": "¿Cuál desagüe?", "Kitchen sink": "Fregadero de cocina", "Bathroom sink": "Lavabo de baño", "Shower / tub": "Ducha / tina", "Toilet": "Inodoro", "Main line": "Línea principal",
  "Heater type": "Tipo de calentador", "Tank": "Con tanque", "Tankless": "Sin tanque", "How many?": "¿Cuántos?", "Describe the issue": "Describe el problema",
  "Bedrooms": "Habitaciones", "Bathrooms": "Baños", "How often?": "¿Con qué frecuencia?", "Weekly": "Semanal", "Bi-weekly": "Quincenal", "Monthly": "Mensual",
  "Vehicle type": "Tipo de vehículo", "Sedan / coupe": "Sedán / cupé", "SUV / minivan": "SUV / minivan", "Truck": "Camioneta",
  "Level": "Nivel", "Elementary": "Primaria", "Middle school": "Secundaria", "High school": "Preparatoria", "College": "Universidad",
  "Subject": "Materia", "Biology": "Biología", "Chemistry": "Química", "Physics": "Física", "General": "General", "Language": "Idioma", "Instrument": "Instrumento",
  "TV size (inches)": "Tamaño de TV (pulgadas)", "How many items?": "¿Cuántos artículos?", "Describe the job": "Describe el trabajo",
  "Main pest": "Plaga principal", "Ants": "Hormigas", "Roaches": "Cucarachas", "Spiders": "Arañas", "Multiple / not sure": "Varias / no sé",
  "How many rooms?": "¿Cuántas habitaciones?", "Stories": "Pisos", "1 story": "1 piso", "2 story": "2 pisos", "3+ story": "3+ pisos",
  "Yard size": "Tamaño del patio", "How many trees?": "¿Cuántos árboles?", "What do you want done?": "¿Qué quieres hacer?", "Area (sq ft)": "Área (pies²)",
  "How many zones affected?": "¿Cuántas zonas afectadas?", "Head not spraying": "Aspersor no rocía", "Leak / pooling": "Fuga / encharcamiento", "Low pressure": "Baja presión",
  "Controller / timer": "Controlador / temporizador", "Estimated zones": "Zonas estimadas", "Area / beds": "Área / canteros", "How many zones?": "¿Cuántas zonas?",
  "Opener brand": "Marca del motor", "Door size": "Tamaño de puerta", "Single car": "Un auto", "Double car": "Dos autos",
  "Vehicle make": "Marca del vehículo", "Coverage": "Cobertura", "Liability only": "Solo responsabilidad", "Full coverage": "Cobertura completa", "Drivers on policy": "Conductores en la póliza",
  "Property type": "Tipo de propiedad", "House": "Casa", "Condo": "Condominio", "Townhome": "Casa adosada", "Year built": "Año de construcción",
  "Coverage level": "Nivel de cobertura", "Basic": "Básica", "Standard": "Estándar", "Premium": "Premium", "Coverage amount": "Monto de cobertura",
  "Business type": "Tipo de negocio", "Employees": "Empleados", "General liability": "Responsabilidad general", "Business owner's policy": "Póliza de propietario",
  "Workers' comp": "Compensación laboral", "Professional liability": "Responsabilidad profesional",
  "Term": "Plazo", "10 years": "10 años", "20 years": "20 años", "30 years": "30 años", "Whole life": "Vida entera",
  "Who's covered?": "¿Quiénes están cubiertos?", "Individual": "Individual", "Couple": "Pareja", "Family": "Familia",
  "What item?": "¿Qué artículo?", "Which appliance?": "¿Cuál electrodoméstico?", "Load size": "Tamaño de carga",
  "Quarter truck": "Cuarto de camión", "Half truck": "Medio camión", "Full truck": "Camión completo", "Amount": "Cantidad",
  // service selection / bid flow
  "All categories": "Todas las categorías", "Pick exactly what you need": "Elige exactamente lo que necesitas", "+ details": "+ detalles",
  "A few details so pros can quote accurately": "Unos detalles para que los profesionales coticen con precisión", "Select…": "Selecciona…",
  "Continue to bid": "Continuar a ofertar", "Fill the required (*) details to continue": "Completa los detalles obligatorios (*) para continuar",
  "Change service": "Cambiar servicio", "Your bid": "Tu oferta", "— what you're willing to pay": "— lo que estás dispuesto a pagar",
  "The AI coach above updates live as you change this number.": "El asesor de IA se actualiza en vivo al cambiar este número.",
  "Your name": "Tu nombre", "ZIP code": "Código postal", "Search radius": "Radio de búsqueda", "Broadcast my bid": "Enviar mi oferta",
  "Enter your price, name and a 5-digit ZIP to continue": "Ingresa tu precio, nombre y un código postal de 5 dígitos",
  // AI coach
  "AI Bid Coach": "Asesor de Ofertas IA", "From": "En", "jobs near you, the average price is about": "cerca de ti, el precio promedio ronda",
  ". Your radius of": ". Tu radio de", "miles reaches roughly": "millas alcanza unos",
  "pros — the sweet spot for strong responses while still saving:": "profesionales — el punto ideal para buenas respuestas ahorrando:",
  "Recommended bid": "Oferta recomendada", "Use this": "Usar esta", "Best deal": "Mejor precio", "Book fast": "Reserva rápida", "accept": "aceptan",
  "Your": "Tu oferta de", "bid → ~": "→ ~", "of": "de", "pros likely to accept": "profesionales probablemente acepten",
  "Low chance": "Probabilidad baja", "Fair chance": "Probabilidad media", "Strong chance": "Probabilidad alta", "Very strong": "Muy alta",
  // sending & results
  "Broadcasting your bid…": "Enviando tu oferta…", "Sending your": "Enviando tu oferta de", "bid for": "para",
  "to pros within": "a profesionales a menos de", "miles": "millas", "Found": "Se encontraron",
  "matching business nearby": "negocio compatible cerca", "matching businesses nearby": "negocios compatibles cerca",
  "Pros are responding…": "Los profesionales están respondiendo…", "Here's who accepted": "Estos aceptaron", "Start over": "Empezar de nuevo",
  "your bid": "tu oferta", "Accepted": "Aceptaron", "Passed": "Pasaron", "Deciding": "Decidiendo",
  "Waiting for the first acceptance…": "Esperando la primera aceptación…",
  "No pros accepted": "Ningún profesional aceptó", "this time. Try raising your bid or widening the radius.": "esta vez. Prueba subir tu oferta o ampliar el radio.",
  "Adjust my bid": "Ajustar mi oferta", "More pros are still deciding — new acceptances appear here live.": "Más profesionales siguen decidiendo: las nuevas aceptaciones aparecen aquí en vivo.",
  // pro cards / detail
  "Verified Locksmith Pro": "Cerrajero Verificado", "Verified Spa Pro": "Profesional de Spa Verificado", "Verified AC Pro": "Técnico de A/C Verificado",
  "Verified Pet Pro": "Peluquero de Mascotas Verificado", "Verified Plumbing Pro": "Plomero Verificado", "Verified Electrician Pro": "Electricista Verificado",
  "Verified House Pro": "Profesional de Limpieza Verificado", "Verified Car Pro": "Detallador Verificado", "Verified Tutoring Pro": "Tutor Verificado",
  "Verified Hair Pro": "Estilista Verificado", "Verified Handyman Pro": "Técnico Verificado", "Verified Pest Pro": "Fumigador Verificado",
  "Verified Painting Pro": "Pintor Verificado", "Verified Wellness Pro": "Profesional de Bienestar Verificado", "Verified Gardener Pro": "Jardinero Verificado",
  "Verified Irrigation Pro": "Técnico de Riego Verificado", "Verified Garage Pro": "Técnico de Garaje Verificado", "Verified Insurance Pro": "Agente de Seguros Verificado", "Verified Garbage Pro": "Recolector Verificado",
  "min reply": "min de respuesta", "jobs": "trabajos", "yr": "años", "accepted": "aceptado", "agreed": "acordado",
  "Name & contact hidden until you book": "Nombre y contacto ocultos hasta que reserves", "Reviews": "Reseñas", "Book this pro": "Reservar",
  "Back to results": "Volver a resultados", "mi away": "mi de distancia", "Recent reviews": "Reseñas recientes",
  "This pro's name & contact unlock after you book": "El nombre y contacto se revelan después de reservar",
  // canned content
  "Showed up on time and finished faster than expected. Fair price.": "Llegó a tiempo y terminó más rápido de lo esperado. Precio justo.",
  "Super friendly and explained everything clearly. Would book again.": "Súper amable y explicó todo con claridad. Volvería a reservar.",
  "Quality work, though scheduling took a couple of texts to lock in.": "Trabajo de calidad, aunque agendar tomó un par de mensajes.",
  "Honestly the best value I found in the area. Highly recommend.": "Honestamente el mejor precio que encontré en la zona. Muy recomendado.",
  "Professional and clean. No surprise charges at the end.": "Profesional y limpio. Sin cargos sorpresa al final.",
  "Great communication start to finish. Very happy with the result.": "Excelente comunicación de principio a fin. Muy contento con el resultado.",
  "Did exactly what I asked and respected my budget.": "Hizo exactamente lo que pedí y respetó mi presupuesto.",
  "Quick response and solid work. Took off a star for the wait.": "Respuesta rápida y buen trabajo. Una estrella menos por la espera.",
  "Great! I can come out tomorrow morning — does 9am work for you?": "¡Genial! Puedo ir mañana por la mañana, ¿te funciona a las 9?",
  "Perfect. I just need your address and I'll confirm the appointment.": "Perfecto. Solo necesito tu dirección y confirmo la cita.",
  "Yes, that price works for me. Looking forward to helping you out!": "Sí, ese precio me funciona. ¡Con gusto te ayudo!",
  "Sure thing. I'll bring everything needed for the job.": "Claro. Llevaré todo lo necesario para el trabajo.",
  "No problem at all. I'll send a confirmation text shortly.": "Sin problema. Te envío la confirmación en breve.",
  "Happy to answer any questions before we lock in the time.": "Con gusto respondo cualquier duda antes de confirmar la hora.",
  "Sounds good — tomorrow morning works for me.": "Suena bien, mañana por la mañana me funciona.",
  "Great, thanks! What time should I expect you?": "¡Gracias! ¿A qué hora te espero?",
  "Perfect. I'll be home all afternoon.": "Perfecto. Estaré en casa toda la tarde.",
  "Yes that works. See you then!": "Sí, me funciona. ¡Nos vemos!",
  "Could you do a bit later in the day instead?": "¿Podrías un poco más tarde?",
  "Awesome, appreciate the quick response.": "Genial, gracias por responder rápido.",
  // booking
  "Confirm your booking": "Confirma tu reserva", "You're protected by LeadBid": "Estás protegido por LeadBid",
  "Your pro stays anonymous until you confirm — then you get their first name and a private LeadBid line, never their personal number.": "Tu profesional permanece anónimo hasta que confirmes: entonces recibes su nombre y una línea privada de LeadBid, nunca su número personal.",
  "Calls and messages route through the app, so your booking and chat history stay protected.": "Las llamadas y mensajes pasan por la app, así tu reserva y tu historial quedan protegidos.",
  "You only pay a small booking fee now — the job amount goes straight to your pro once the work is done.": "Solo pagas una pequeña tarifa de reserva ahora; el monto del trabajo va directo a tu profesional al terminar.",
  "Your accepted bid": "Tu oferta aceptada", "paid directly to your pro when the job is done": "se paga directamente al profesional al terminar",
  "LeadBid booking fee": "Tarifa de reserva de LeadBid", "secures your booking, protected chat & support": "asegura tu reserva, chat protegido y soporte",
  "Due now": "A pagar ahora", "That's it —": "Eso es todo —", "today. The": "hoy. Los",
  "for the job goes straight to your pro on completion. The booking fee is refunded if the pro cancels.": "del trabajo van directo a tu profesional al completarse. La tarifa se reembolsa si el profesional cancela.",
  "Confirm & unlock chat": "Confirmar y abrir chat", "Demo only — no real payment is taken.": "Solo demo — no se procesa ningún pago real.",
  // chat
  "Booked at": "Reservado por", "with": "con", "via LeadBid": "vía LeadBid", "Call": "Llamar",
  "Calls & chat run through LeadBid. Personal phone numbers, emails and handles are hidden so your booking stays protected.": "Las llamadas y el chat pasan por LeadBid. Los teléfonos personales, correos y redes se ocultan para proteger tu reserva.",
  "Contact details were hidden. Keep chat & calls on LeadBid so your booking stays protected.": "Se ocultaron datos de contacto. Mantén el chat y las llamadas en LeadBid para proteger tu reserva.",
  "Contact details were hidden. Keep the conversation on LeadBid to stay eligible for payouts.": "Se ocultaron datos de contacto. Mantén la conversación en LeadBid para no perder tus pagos.",
  "Type a message…": "Escribe un mensaje…", "New bid": "Nueva oferta", "See other pros": "Ver otros profesionales", "contact hidden": "contacto oculto",
  "Hi": "¡Hola", "! This is": "! Soy", "from your booked pro (": "de tu profesional reservado (",
  "). Thanks for choosing me — I accepted your": "). Gracias por elegirme — acepté tu solicitud de", "request at": "por", ". When works best?": ". ¿Cuándo te viene bien?",
  "there": "amigo",
  // customer dashboard
  "Your requests": "Tus solicitudes", "total": "en total",
  "You haven't placed any bids yet. Browse a service and name your price to get started.": "Aún no has hecho ofertas. Explora un servicio y pon tu precio para empezar.",
  "Browse services": "Explorar servicios", "Booked with": "Reservado con",
  "business accepted": "negocio aceptó", "businesses accepted": "negocios aceptaron",
  "View": "Ver", "response": "respuesta", "responses": "respuestas", "Open chat": "Abrir chat",
  // auth modal
  "Create an account to send your bid": "Crea una cuenta para enviar tu oferta", "Log in to send your bid": "Inicia sesión para enviar tu oferta",
  "Create your LeadBid account": "Crea tu cuenta de LeadBid", "Welcome back": "Bienvenido de nuevo",
  "You're about to broadcast": "Estás a punto de enviar", "for": "para",
  ". An account lets pros respond, keeps your chats protected, and saves your bookings.": ". Una cuenta permite que los profesionales respondan, protege tus chats y guarda tus reservas.",
  "Full name": "Nombre completo", "Email": "Correo electrónico", "Phone number": "Número de teléfono", "Password": "Contraseña",
  "Create account & send bid": "Crear cuenta y enviar oferta", "Log in & send bid": "Entrar y enviar oferta", "Create account": "Crear cuenta",
  "Demo only — no real account is created.": "Solo demo — no se crea ninguna cuenta real.",
  "Fill in the fields above to continue": "Completa los campos para continuar",
  // gate (business)
  "Business account": "Cuenta de negocio", "Customer account": "Cuenta de cliente", "Create your account": "Crea tu cuenta", "Back": "Atrás",
  "Business name": "Nombre del negocio", "Service ZIP": "Código postal de servicio",
  "Services you offer": "Servicios que ofreces", "— you'll get bids in these": "— recibirás ofertas de estos",
  "Terms & responsibility": "Términos y responsabilidad", "Read": "Leer", "Hide": "Ocultar", "LeadBid Service Provider Guidelines": "las Guías para Proveedores de LeadBid",
  "Licensing & qualifications": "Licencias y calificaciones",
  "You confirm you hold all licenses, certifications, permits, and insurance required by law to perform every service you list.": "Confirmas que cuentas con todas las licencias, certificaciones, permisos y seguros que exige la ley para cada servicio que ofreces.",
  "You will keep these current and provide proof on request.": "Los mantendrás vigentes y presentarás comprobantes cuando se soliciten.",
  "Responsibility for the work": "Responsabilidad por el trabajo",
  "You are solely and fully responsible for the quality, safety, legality, and outcome of the work you perform.": "Eres el único y total responsable de la calidad, seguridad, legalidad y resultado del trabajo que realizas.",
  "Any agreement is strictly between you and the customer. You set your own terms and stand behind your work.": "Cualquier acuerdo es estrictamente entre tú y el cliente. Tú fijas tus términos y respondes por tu trabajo.",
  "LeadBid's role & liability": "Rol y responsabilidad de LeadBid",
  "LeadBid is only a platform that connects customers and providers. It does not perform, supervise, endorse, or guarantee any work.": "LeadBid es solo una plataforma que conecta clientes y proveedores. No realiza, supervisa, avala ni garantiza ningún trabajo.",
  "LeadBid bears no liability for any service performed, any damage, injury, loss, or dispute. You release LeadBid from all such claims and agree to indemnify it.": "LeadBid no asume responsabilidad por ningún servicio realizado, daño, lesión, pérdida o disputa. Liberas a LeadBid de todo reclamo y aceptas indemnizarla.",
  "Conduct": "Conducta",
  "Keep communication, scheduling, and payment on LeadBid. Soliciting customers off-platform may result in removal.": "Mantén la comunicación, agenda y pagos en LeadBid. Solicitar clientes fuera de la plataforma puede causar tu eliminación.",
  "No misrepresentation of identity, license status, or qualifications.": "Prohibido falsear identidad, estado de licencias o calificaciones.",
  "I have read and agree to LeadBid's": "He leído y acepto los", "Terms & Service Provider Guidelines": "Términos y Guías para Proveedores de LeadBid",
  ". I confirm I am": ". Confirmo que estoy", "fully licensed and insured": "debidamente licenciado y asegurado",
  "to perform the services I offer, that I am": "para realizar los servicios que ofrezco, que soy", "solely responsible": "el único responsable",
  "for the work I deliver, and that": "del trabajo que entrego, y que", "LeadBid bears no liability": "LeadBid no asume ninguna responsabilidad", "for any services provided.": "por los servicios prestados.",
  "Your business profile": "Perfil de tu negocio", "About your business": "Acerca de tu negocio", "— shown to customers you win": "— visible para los clientes que ganes",
  "Years in business": "Años en el negocio", "Add logo": "Agregar logo",
  "A clear logo helps customers recognize you after they book.": "Un logo claro ayuda a que los clientes te reconozcan después de reservar.",
  "Remove": "Quitar", "Photos of your work": "Fotos de tu trabajo", "— up to 6": "— hasta 6", "Add photos": "Agregar fotos",
  "Fill every field, pick at least one service, and agree to the terms": "Completa todos los campos, elige al menos un servicio y acepta los términos",
  // business app
  "Serving": "Sirviendo en", "service": "servicio", "services": "servicios", "yrs in business": "años en el negocio", "Edit profile": "Editar perfil",
  "New bids": "Ofertas nuevas", "Jobs won": "Trabajos ganados", "Response rate": "Tasa de respuesta", "Net pipeline": "Ingresos netos",
  "success fee": "comisión de éxito", "Upgrade to LeadBid Pro —": "Mejora a LeadBid Pro —", "/mo": "/mes",
  "Success fee drops from": "La comisión de éxito baja de", "to": "a", "+ priority placement in customer results.": "+ posición prioritaria en los resultados.",
  "Go Pro": "Hazte Pro", "New": "Nuevas", "Pending": "Pendientes", "Jobs": "Trabajos",
  "You haven't added any services yet. Add the services you offer to start receiving matching bids.": "Aún no has agregado servicios. Agrega los servicios que ofreces para empezar a recibir ofertas.",
  "Set up services": "Configurar servicios",
  "No new bids right now. New requests in your service areas will land here.": "No hay ofertas nuevas por ahora. Las nuevas solicitudes en tus áreas aparecerán aquí.",
  "Nothing pending. Bids you accept appear here while customers choose.": "Nada pendiente. Las ofertas que aceptes aparecen aquí mientras los clientes eligen.",
  "No active jobs yet. Win a bid and it shows up here with a chat.": "Aún no hay trabajos activos. Gana una oferta y aparecerá aquí con un chat.",
  "Customer pays you": "El cliente te paga", "directly. LeadBid's": "directamente. La comisión de éxito del",
  "success fee (": "de LeadBid (", ") applies": ") aplica", "only if you're booked": "solo si te reservan", "— accepting is always free.": "— aceptar siempre es gratis.",
  "Customer stays anonymous until you win the job": "El cliente permanece anónimo hasta que ganes el trabajo",
  "Decline": "Rechazar", "Accept": "Aceptar",
  "Accepted — waiting for the customer to choose": "Aceptada — esperando que el cliente elija",
  "Customer picked another pro this time — no fee charged": "El cliente eligió a otro profesional — sin cargo",
  "You won! Customer booked you —": "¡Ganaste! El cliente te reservó —", "is ready to chat": "está listo para chatear",
  "directly on completion. LeadBid success fee:": "directamente al completar. Comisión de LeadBid:", "your net:": "tu neto:",
  "Job won —": "Trabajo ganado —", "Booked": "Reservado",
  "Keep calls & chat on LeadBid. Sharing personal contact info off-platform can forfeit your payout and ranking.": "Mantén llamadas y chat en LeadBid. Compartir contacto personal fuera de la plataforma puede costarte el pago y tu posición.",
  "Message the customer…": "Escribe al cliente…", "Back to dashboard": "Volver al panel",
  "Hi! I'm": "¡Hola! Soy", ". Thanks for accepting my": ". Gracias por aceptar mi solicitud de", ". When can you come by?": ". ¿Cuándo puedes venir?",
  "Great pay": "Buen pago", "Fair": "Justo", "Low offer": "Oferta baja",
  // settings
  "Account settings": "Configuración de la cuenta", "Contact info": "Información de contacto", "Service radius": "Radio de servicio",
  "Profile & work": "Perfil y trabajo", "Remove logo": "Quitar logo", "Save changes": "Guardar cambios",
  "Add a business name, ZIP, and at least one service": "Agrega nombre del negocio, código postal y al menos un servicio",
};
const LangCtx = React.createContext({ lang: "en", setLang: () => {} });
function useLang() { return React.useContext(LangCtx); }
function tFor(lang) { return (s) => (lang === "es" && ES[s]) || s; }
function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button className="lb-logout" onClick={() => setLang(lang === "en" ? "es" : "en")}>
      <Globe size={12} /> {lang === "en" ? "Español" : "English"}
    </button>
  );
}

/* ------------------- animated category logos ------------------- */
function CatLogo({ id }) {
  const S = { width: 34, height: 34, viewBox: "0 0 48 48" };
  switch (id) {
    case "locksmith": return (
      <svg {...S}>
        <defs><linearGradient id="lgLock" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fb8c2d" /><stop offset="100%" stopColor="#d23f12" /></linearGradient></defs>
        <g className="lgA an-wiggle">
          <circle cx="17" cy="19" r="10" fill="url(#lgLock)" />
          <circle cx="17" cy="19" r="4.2" fill="#fffdf8" />
          <rect x="24" y="17" width="16" height="4.4" rx="2.2" fill="#f5a623" />
          <rect x="33.5" y="21" width="4" height="7" rx="1.8" fill="#f5a623" />
          <rect x="27" y="21" width="4" height="5" rx="1.8" fill="#f5a623" />
        </g>
      </svg>);
    case "spa": return (
      <svg {...S}>
        <defs><linearGradient id="lgSpa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f48fb1" /><stop offset="100%" stopColor="#b5476a" /></linearGradient></defs>
        <path d="M24 13c3.2 4.2 3.2 9.8 0 14-3.2-4.2-3.2-9.8 0-14Z" fill="url(#lgSpa)" />
        <path d="M13 19.5c5 .5 9.2 4.2 10.3 9.5-5-.5-9.2-4.2-10.3-9.5Z" fill="#e06a93" />
        <path d="M35 19.5c-5 .5-9.2 4.2-10.3 9.5 5-.5 9.2-4.2 10.3-9.5Z" fill="#e06a93" />
        <path d="M13.5 31c3.3 2.7 7 4.1 10.5 4.1s7.2-1.4 10.5-4.1c-3 6.4-18 6.4-21 0Z" fill="#157a5a" opacity=".85" />
        <g className="lgA an-twinkle"><path d="M36 8.5l1.1 2.7 2.7 1.1-2.7 1.1-1.1 2.7-1.1-2.7-2.7-1.1 2.7-1.1Z" fill="#f5a623" /></g>
      </svg>);
    case "ac": return (
      <svg {...S}>
        <circle cx="24" cy="24" r="16.5" fill="#dceefb" />
        <g className="lgA an-spin">
          {[0, 120, 240].map((a, i) => (
            <path key={a} d="M24 24C21.6 16.5 24.5 10 30 8.8c1.4 5.8-.8 11.3-6 15.2Z" fill={["#2b7fb0", "#46a3d6", "#1c6e9e"][i]} transform={`rotate(${a} 24 24)`} />
          ))}
        </g>
        <circle cx="24" cy="24" r="3.4" fill="#0f4c6e" />
      </svg>);
    case "grooming": return (
      <svg {...S}>
        <defs><linearGradient id="lgPaw" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b07c46" /><stop offset="100%" stopColor="#7a4d24" /></linearGradient></defs>
        <g className="lgA an-bob">
          <ellipse cx="24" cy="29.5" rx="8.6" ry="7" fill="url(#lgPaw)" />
          <circle cx="14" cy="20" r="3.7" fill="#fb5a2d" />
          <circle cx="24" cy="16.2" r="3.9" fill="#f5a623" />
          <circle cx="34" cy="20" r="3.7" fill="#157a5a" />
        </g>
      </svg>);
    case "plumbing": return (
      <svg {...S}>
        <rect x="13" y="9" width="12" height="3.4" rx="1.7" fill="#a9bcc8" />
        <rect x="15.6" y="12" width="7" height="5.5" rx="1.6" fill="#6b7f8c" />
        <path d="M11 17h15a7 7 0 0 1 7 7v4.5h-7.4V25a1.7 1.7 0 0 0-1.7-1.7H11Z" fill="#8fa3b0" />
        <g className="lgA an-drip"><path d="M29.3 31c2 2.7 3 4.4 3 5.9a3 3 0 1 1-6 0c0-1.5 1-3.2 3-5.9Z" fill="#2b9fd8" /></g>
      </svg>);
    case "electric": return (
      <svg {...S}>
        <defs><linearGradient id="lgZap" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffd34d" /><stop offset="100%" stopColor="#fb5a2d" /></linearGradient></defs>
        <g className="lgA an-flash"><path d="M27.5 7.5 14 27h8.2L19 40.5 34 21h-8.2Z" fill="url(#lgZap)" /></g>
        <circle className="lgA an-twinkle" cx="37" cy="12.5" r="1.8" fill="#f5a623" />
        <circle className="lgA an-twinkle" cx="10.5" cy="34" r="1.5" fill="#f5a623" style={{ animationDelay: ".8s" }} />
      </svg>);
    case "cleaning": return (
      <svg {...S}>
        <defs><linearGradient id="lgSpg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffd34d" /><stop offset="100%" stopColor="#f5a623" /></linearGradient></defs>
        <rect x="9" y="27" width="19" height="11.5" rx="4.5" fill="url(#lgSpg)" />
        <rect x="9" y="27" width="19" height="4.5" rx="2.2" fill="#fff" opacity=".35" />
        <g className="lgA an-rise"><circle cx="31" cy="22" r="4.6" fill="#7fd1c0" opacity=".9" /></g>
        <g className="lgA an-rise" style={{ animationDelay: ".9s" }}><circle cx="37" cy="16.5" r="3" fill="#46b39c" opacity=".85" /></g>
        <g className="lgA an-rise" style={{ animationDelay: "1.7s" }}><circle cx="25.5" cy="14.5" r="2.4" fill="#a8e3d4" opacity=".85" /></g>
      </svg>);
    case "detailing": return (
      <svg {...S}>
        <defs>
          <linearGradient id="lgCar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff7a59" /><stop offset="100%" stopColor="#d23f12" /></linearGradient>
          <clipPath id="lgCarC"><path d="M8 30c0-2.2 1-4.6 3-5l3.5-6A5 5 0 0 1 19 16h10a5 5 0 0 1 4.5 3l3.5 6c2 .4 3 2.8 3 5v3.2H8Z" /></clipPath>
        </defs>
        <path d="M8 30c0-2.2 1-4.6 3-5l3.5-6A5 5 0 0 1 19 16h10a5 5 0 0 1 4.5 3l3.5 6c2 .4 3 2.8 3 5v3.2H8Z" fill="url(#lgCar)" />
        <path d="M17.5 24.5l2.2-4.7h8.6l2.2 4.7Z" fill="#dceefb" />
        <g clipPath="url(#lgCarC)"><rect className="lgA an-sweep" x="19" y="13" width="5" height="22" fill="#fff" opacity=".5" /></g>
        <circle cx="16" cy="33" r="3.7" fill="#241d16" /><circle cx="32" cy="33" r="3.7" fill="#241d16" />
        <circle cx="16" cy="33" r="1.4" fill="#9aa7b0" /><circle cx="32" cy="33" r="1.4" fill="#9aa7b0" />
      </svg>);
    case "tutoring": return (
      <svg {...S}>
        <path d="M24 11 7.5 18.5 24 26l16.5-7.5Z" fill="#2f3c7e" />
        <path d="M14 23.5v6.5c0 2.7 4.6 4.8 10 4.8s10-2.1 10-4.8v-6.5L24 28Z" fill="#46519e" />
        <g className="an-sway" style={{ transformOrigin: "38px 19px" }}>
          <line x1="38" y1="19" x2="38" y2="28" stroke="#f5a623" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="38" cy="30" r="2.3" fill="#f5a623" />
        </g>
      </svg>);
    case "salon": return (
      <svg {...S}>
        <g className="an-snip" style={{ transformOrigin: "25px 24px" }}>
          <line x1="15" y1="13" x2="37" y2="29" stroke="#e06a93" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="13" cy="11.5" r="4" fill="none" stroke="#e06a93" strokeWidth="3" />
        </g>
        <line x1="15" y1="35" x2="37" y2="19" stroke="#b5476a" strokeWidth="3.4" strokeLinecap="round" />
        <circle cx="13" cy="36.5" r="4" fill="none" stroke="#b5476a" strokeWidth="3" />
        <circle cx="25" cy="24" r="2.1" fill="#f5a623" />
      </svg>);
    case "handyman": return (
      <svg {...S}>
        <g className="lgA an-wiggle">
          <rect x="12" y="10.5" width="19" height="8" rx="2.6" fill="#6b7f8c" />
          <rect x="30" y="11.5" width="5" height="6" rx="1.6" fill="#8fa3b0" />
          <rect x="20" y="17" width="6.2" height="21" rx="2.8" fill="#c9893d" />
        </g>
        <circle className="lgA an-twinkle" cx="38.5" cy="24" r="1.7" fill="#f5a623" />
      </svg>);
    case "pest": return (
      <svg {...S}>
        <defs><linearGradient id="lgBug" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff5a4d" /><stop offset="100%" stopColor="#c0392b" /></linearGradient></defs>
        <g className="lgA an-wiggle">
          <path d="M19 11l-4-4M29 11l4-4" stroke="#241d16" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="15" r="4.6" fill="#241d16" />
          <circle cx="24" cy="27" r="11" fill="url(#lgBug)" />
          <line x1="24" y1="16.5" x2="24" y2="38" stroke="#241d16" strokeWidth="1.7" />
          <circle cx="19" cy="23.5" r="1.9" fill="#241d16" /><circle cx="29" cy="23.5" r="1.9" fill="#241d16" />
          <circle cx="20" cy="31" r="1.9" fill="#241d16" /><circle cx="28" cy="31" r="1.9" fill="#241d16" />
        </g>
      </svg>);
    case "painting": return (
      <svg {...S}>
        <defs><linearGradient id="lgRol" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#fb5a2d" /><stop offset="50%" stopColor="#f5a623" /><stop offset="100%" stopColor="#157a5a" /></linearGradient></defs>
        <g className="lgA an-bob">
          <rect x="9.5" y="10" width="22" height="9.5" rx="3.4" fill="url(#lgRol)" />
          <path d="M31.5 14.8h5.5v7.2h-9.5" fill="none" stroke="#6b7f8c" strokeWidth="2.6" />
          <rect x="25.6" y="22" width="3.8" height="14" rx="1.9" fill="#2b7fb0" />
        </g>
        <g className="lgA an-drip" style={{ animationDelay: ".7s" }}><circle cx="14" cy="24" r="2" fill="#fb5a2d" /></g>
      </svg>);
    case "wellness": return (
      <svg {...S}>
        <defs><linearGradient id="lgHrt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff6b8a" /><stop offset="100%" stopColor="#d23f4a" /></linearGradient></defs>
        <g className="lgA an-pulse">
          <path d="M24 38.5C14 31.4 8 25.8 8 18.8 8 14 11.8 10 16.6 10c3 0 5.7 1.5 7.4 4 1.7-2.5 4.4-4 7.4-4C36.2 10 40 14 40 18.8c0 7-6 12.6-16 19.7Z" fill="url(#lgHrt)" />
          <path d="M13.5 23h5.5l2.4-4.4 3.7 8 2.5-4.8h7" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        </g>
      </svg>);
    case "gardener": return (
      <svg {...S}>
        <defs><linearGradient id="lgPot" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d2693a" /><stop offset="100%" stopColor="#a8482a" /></linearGradient></defs>
        <g className="an-sway" style={{ transformOrigin: "24px 31px" }}>
          <path d="M24 31V19" stroke="#2f7d3a" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 22.5c-7.2 1-9.4-5-9.4-9.4 7.2-1 9.4 5 9.4 9.4Z" fill="#3fae57" />
          <path d="M24 25.5c7.2 1 9.4-5 9.4-9.4-7.2-1-9.4 5-9.4 9.4Z" fill="#157a5a" />
        </g>
        <path d="M14.5 31h19l-2.3 9.2a2.6 2.6 0 0 1-2.5 2H19.3a2.6 2.6 0 0 1-2.5-2Z" fill="url(#lgPot)" />
      </svg>);
    case "irrigation": return (
      <svg {...S}>
        <rect x="21" y="25" width="6" height="11" rx="2.2" fill="#6b7f8c" />
        <rect x="14" y="22.5" width="20" height="5" rx="2.5" fill="#8fa3b0" />
        <g className="lgA an-drip"><circle cx="12.5" cy="16" r="2.4" fill="#2b9fd8" /></g>
        <g className="lgA an-drip" style={{ animationDelay: ".55s" }}><circle cx="24" cy="11.5" r="2.6" fill="#46b39c" /></g>
        <g className="lgA an-drip" style={{ animationDelay: "1.1s" }}><circle cx="35.5" cy="16" r="2.4" fill="#2b9fd8" /></g>
        <path d="M38.5 39c-9.4-4.2-19.6-4.2-29 0" stroke="#3fae57" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>);
    case "garage": return (
      <svg {...S}>
        <defs><clipPath id="lgGdC"><rect x="13" y="22" width="22" height="15" rx="1.5" /></clipPath></defs>
        <path d="M7 21 24 7.5 41 21v16a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3Z" fill="#5b6b7a" />
        <path d="M7 21 24 7.5 41 21l-2.6 2L24 11.4 9.6 23Z" fill="#41505c" />
        <rect x="13" y="22" width="22" height="15" rx="1.5" fill="#241d16" />
        <g clipPath="url(#lgGdC)">
          <g className="an-door">
            <rect x="13" y="22" width="22" height="3.5" fill="#fb5a2d" />
            <rect x="13" y="25.8" width="22" height="3.5" fill="#f5a623" />
            <rect x="13" y="29.6" width="22" height="3.5" fill="#157a5a" />
            <rect x="13" y="33.4" width="22" height="3.6" fill="#2b7fb0" />
          </g>
        </g>
      </svg>);
    case "insurance": return (
      <svg {...S}>
        <defs><clipPath id="lgUmC"><path d="M9 23c.4-8.2 7-13.8 15-13.8S38.6 14.8 39 23Z" /></clipPath></defs>
        <g className="lgA an-wiggle">
          <g clipPath="url(#lgUmC)">
            <rect x="9" y="8" width="10" height="16" fill="#fb5a2d" />
            <rect x="19" y="8" width="10" height="16" fill="#f5a623" />
            <rect x="29" y="8" width="10" height="16" fill="#157a5a" />
          </g>
          <line x1="24" y1="6.5" x2="24" y2="9.5" stroke="#5b6b7a" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M24 23v10.5a3.3 3.3 0 0 1-6.6 0" fill="none" stroke="#5b6b7a" strokeWidth="2.6" strokeLinecap="round" />
        </g>
      </svg>);
    case "garbage": return (
      <svg {...S}>
        <defs><linearGradient id="lgBin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3fae57" /><stop offset="100%" stopColor="#157a5a" /></linearGradient></defs>
        <path d="M14 20h20l-1.7 16.5a3 3 0 0 1-3 2.7H18.7a3 3 0 0 1-3-2.7Z" fill="url(#lgBin)" />
        <line x1="20" y1="24" x2="20.6" y2="34.5" stroke="#0e5c44" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="24" x2="24" y2="34.5" stroke="#0e5c44" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="24" x2="27.4" y2="34.5" stroke="#0e5c44" strokeWidth="2" strokeLinecap="round" />
        <g className="an-lid" style={{ transformOrigin: "13px 17px" }}>
          <rect x="11.5" y="14.5" width="25" height="4.4" rx="2.2" fill="#0f6e54" />
          <rect x="20" y="11" width="8" height="4" rx="2" fill="#0f6e54" />
        </g>
      </svg>);
    default: return null;
  }
}

/* ------------------- monetization -------------------
   LeadBid earns a small fee from BOTH sides at the moment of booking:
   - Customer: 5% booking fee (min $2, cap $25) — the only platform payment;
     the job amount itself is paid directly to the pro on completion
   - Business: 5% success fee — charged ONLY to the pro the customer books
     (accepting a bid is always free; this is never a per-lead fee)
   - LeadBid Pro: subscription that lowers the business success fee */
const PRO_MONTHLY = 49;
const COMMISSION = { free: 0.05, pro: 0.03 };
function customerFee(price) { return Math.min(25, Math.max(2, Math.round(Number(price) * 0.05))); }
function commissionRate(profile) { return COMMISSION[profile && profile.plan === "pro" ? "pro" : "free"]; }
function payoutFor(price, profile) {
  const rate = commissionRate(profile);
  const fee = Math.round(price * rate);
  return { rate, fee, net: price - fee };
}

/* ------------------- contact redaction -------------------
   Keeps the conversation on-platform: strips phone numbers, emails,
   links, social handles, payment apps and "call me" style asides. */
const NUM_WORDS = "(?:zero|one|two|three|four|five|six|seven|eight|nine|oh)";
const REDACTORS = [
  /\b[\w.+-]+@[\w-]+\.[\w.-]+\b/gi,                                   // email
  /\b(?:https?:\/\/|www\.)\S+/gi,                                     // url
  /\b[\w-]+\.(?:com|net|org|io|co|biz|info)\b/gi,                     // bare domain
  /(?:\+?\d[\s().-]?){7,}\d/g,                                        // phone-like digit runs
  new RegExp(`(?:${NUM_WORDS}[\\s,-]+){4,}${NUM_WORDS}`, "gi"),       // spelled-out numbers
  /@[A-Za-z0-9_.]{2,}/g,                                              // @handles
  /\b(?:insta(?:gram)?|ig|snap(?:chat)?|whats?app|telegram|venmo|cashapp|cash app|zelle|paypal|facebook|fb|messenger)\b[:\s-]*[@A-Za-z0-9_.]*/gi,
  /\b(?:call|text|reach|dm|message|email)\s+me\b[^.?!]*/gi,           // "call me at ..." asides
];
function redact(text) {
  let clean = text, hadPII = false;
  for (const re of REDACTORS) {
    if (re.test(clean)) { hadPII = true; clean = clean.replace(re, "▢▢▢"); }
    re.lastIndex = 0;
  }
  clean = clean.replace(/(?:▢▢▢[\s,.-]*)+/g, "[contact hidden]");
  return { clean: clean.trim() || "[contact hidden]", hadPII };
}

function detailTags(service, details, t) {
  const tt = t || (s => s);
  if (!service?.fields) return [];
  return service.fields
    .map(f => ({ label: f.label, val: details[f.key] }))
    .filter(x => x.val !== undefined && String(x.val).trim() !== "")
    .map(x => `${tt(x.label)}: ${tt(String(x.val))}`);
}

/* ------------------- AI bid coach engine -------------------
   The "AI" has learned the typical/average price for every service
   (service.typical). From that average + the chosen radius it predicts
   how local pros will respond to any bid and recommends a sweet spot. */
function roundNice(v) {
  if (v < 60) return Math.round(v / 5) * 5;
  if (v < 400) return Math.round(v / 10) * 10;
  return Math.round(v / 50) * 50;
}
// more area searched -> more businesses reachable
function bizCount(radius) { return Math.max(3, Math.round(4 + (radius - 5) * 0.6)); }
// likelihood a single pro accepts, given bid vs the learned average
function perProChance(bid, avg) { return Math.min(0.94, Math.max(0.04, bid / avg - 0.35)); }

function predict(bid, service, radius) {
  const n = bizCount(radius);
  const chance = perProChance(bid, service.typical);
  const accepts = Math.max(0, Math.round(n * chance));
  let label, color;
  if (chance < 0.22) { label = "Low chance"; color = "var(--red)"; }
  else if (chance < 0.48) { label = "Fair chance"; color = "#cf8a00"; }
  else if (chance < 0.72) { label = "Strong chance"; color = "var(--green)"; }
  else { label = "Very strong"; color = "var(--green)"; }
  return { n, chance, accepts, label, color };
}

function aiRecommend(service, radius) {
  const avg = service.typical;
  const n = bizCount(radius);
  // aim for ~half of reachable pros to accept: enough real choice, still a deal
  const target = Math.max(2, Math.round(n * 0.5));
  const chanceNeeded = Math.min(0.85, Math.max(0.12, target / n));
  const ratio = chanceNeeded + 0.35;
  return {
    avg, n,
    recommended: roundNice(avg * ratio),
    low: roundNice(avg * (ratio - 0.22)),   // best-deal bid
    high: roundNice(avg * (ratio + 0.18)),  // book-fast bid
  };
}

/* --------------------------- app --------------------------- */
export default function LeadBid() {
  const [lang, setLang] = useState("en");
  const t = tFor(lang);
  const [view, setView] = useState("customer"); // customer (browse) | bizauth | business
  const [account, setAccount] = useState(null);
  const [authModal, setAuthModal] = useState(null); // null | "bid" | "account"
  const [authTab, setAuthTab] = useState("signup");
  const [bizTab, setBizTab] = useState("signup");
  const [bizProfile, setBizProfile] = useState(null);
  const [screen, setScreen] = useState("home");
  const [cat, setCat] = useState(null);
  const [service, setService] = useState(null);
  const [details, setDetails] = useState({});
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [radius, setRadius] = useState(10);
  const [businesses, setBusinesses] = useState([]);
  const [dots, setDots] = useState([]);
  const [selected, setSelected] = useState(null);
  const [booked, setBooked] = useState(false);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const [myJobs, setMyJobs] = useState([]);
  const [activeJobId, setActiveJobId] = useState(null);
  const timers = useRef([]);
  const chatBody = useRef(null);

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => () => clearTimers(), []);

  const decided = businesses.filter(b => b.decided);
  const accepted = businesses.filter(b => b.accepted);
  const declinedCount = decided.filter(b => !b.accepted).length;
  const pending = businesses.length - decided.length;
  const tags = detailTags(service, details, t);

  function pickService(s) {
    setService(s); setDetails({});
  }
  const fieldsComplete = !service?.fields ? true :
    service.fields.filter(f => f.required).every(f => String(details[f.key] ?? "").trim() !== "");

  function goToBid() {
    setPrice(String(aiRecommend(service, radius).recommended));
    setScreen("bid");
  }

  function startBid() {
    if (!account) { setAuthTab("signup"); setAuthModal("bid"); return; }   // guests must sign up to place a bid
    doBroadcast();
  }
  function completeGuestAuth(profile) {
    setAccount(profile);
    if (!name && profile.name) setName(profile.name);
    if (zip.length < 5 && profile.zip) setZip(profile.zip);
    setAuthModal(null);
    doBroadcast();
  }
  function completeAccountAuth(profile) {
    setAccount(profile);
    if (!name && profile.name) setName(profile.name);
    if (zip.length < 5 && profile.zip) setZip(profile.zip);
    setAuthModal(null);
  }
  function doBroadcast() {
    clearTimers();
    const list = makeBusinesses(cat, Number(price), service.typical, radius);
    const jobId = Date.now();
    setActiveJobId(jobId);
    setMyJobs(prev => [{
      id: jobId, when: jobId, catId: cat.id, color: cat.color, Icon: cat.icon,
      serviceName: service.name, serviceId: service.id, price: Number(price),
      radius, zip, tags, status: "live", accepted: [], bookedBiz: null, messages: [],
    }, ...prev]);
    setBusinesses(list); setScreen("sending"); setDots([]);
    list.forEach((b, i) => {
      const t = setTimeout(() => {
        const a = Math.random() * Math.PI * 2; const r = 30 + Math.random() * 80;
        setDots(d => [...d, { x: 115 + Math.cos(a) * r, y: 115 + Math.sin(a) * r, id: b.id }]);
      }, 200 + i * 250);
      timers.current.push(t);
    });
    const go = setTimeout(() => {
      setScreen("results");
      list.forEach(b => {
        const t = setTimeout(() => setBusinesses(prev => prev.map(x => x.id === b.id ? { ...x, decided: true, accepted: b.willAccept } : x)), b.responseDelay);
        timers.current.push(t);
      });
    }, 2300);
    timers.current.push(go);
  }

  // keep the active job's accepted list in sync as pros respond
  useEffect(() => {
    if (!activeJobId) return;
    setMyJobs(prev => prev.map(j => j.id === activeJobId ? { ...j, accepted: businesses.filter(b => b.accepted) } : j));
  }, [businesses, activeJobId]);
  // persist the active booked job's chat
  useEffect(() => {
    if (!activeJobId || !booked) return;
    setMyJobs(prev => prev.map(j => j.id === activeJobId ? { ...j, messages } : j));
  }, [messages, booked, activeJobId]);

  function goToBook(biz) {
    setSelected(biz); setBooked(false); setScreen("book");
  }
  function confirmBooking() {
    setBooked(true);
    setMessages([{ from: "them", text: `${t("Hi")} ${name || t("there")}${t("! This is")} ${selected.firstName} ${t("from your booked pro (")}${selected.code}${t("). Thanks for choosing me — I accepted your")} ${t(service.name)} ${t("request at")} $${price}${t(". When works best?")}`, time: now() }]);
    setMyJobs(prev => prev.map(j => j.id === activeJobId ? { ...j, status: "booked", bookedBiz: selected } : j));
    setScreen("chat");
  }
  function openJob(job, target) {
    clearTimers();
    const c = CATEGORIES.find(x => x.id === job.catId);
    const s = c && c.services.find(x => x.id === job.serviceId);
    setCat(c); setService(s); setPrice(String(job.price)); setRadius(job.radius); setZip(job.zip);
    setActiveJobId(job.id);
    setBusinesses(job.accepted.map(b => ({ ...b, decided: true, accepted: true })));
    const goChat = target === "chat" && job.status === "booked" && job.bookedBiz;
    if (goChat) {
      setSelected(job.bookedBiz); setBooked(true);
      setMessages(job.messages && job.messages.length ? job.messages : []);
      setScreen("chat");
    } else {
      setSelected(null); setBooked(false); setScreen("results");
    }
  }
  function sendMsg() {
    if (!draft.trim()) return;
    const { clean, hadPII } = redact(draft.trim());
    setMessages(m => [...m, { from: "me", text: clean, time: now(), redacted: hadPII }]);
    if (hadPII) {
      setMessages(m => [...m, { from: "sys", text: "Contact details were hidden. Keep chat & calls on LeadBid so your booking stays protected." }]);
    }
    setDraft(""); setTyping(true);
    const t = setTimeout(() => { setTyping(false); setMessages(m => [...m, { from: "them", text: rand(CHAT_REPLIES), time: now() }]); }, 1100 + Math.random() * 1200);
    timers.current.push(t);
  }
  useEffect(() => { if (chatBody.current) chatBody.current.scrollTop = chatBody.current.scrollHeight; }, [messages, typing]);

  function reset() { clearTimers(); setScreen("home"); setCat(null); setService(null); setDetails({}); setPrice(""); setBusinesses([]); setSelected(null); setBooked(false); setMessages([]); setDots([]); setActiveJobId(null); }

  function handleAuth(role, profile) {
    if (role === "customer") {
      setAccount(profile);
      if (profile.name) setName(profile.name);
      if (profile.zip) setZip(profile.zip);
      reset();
      setView("customer");
    } else {
      setBizProfile(profile);
      setView("business");
    }
  }
  function logout() { reset(); setAccount(null); setBizProfile(null); setMyJobs([]); setView("customer"); setScreen("home"); }

  const priceNum = Number(price);

  return (
    <LangCtx.Provider value={{ lang, setLang }}>
    <div className="lb-root">
      <style>{CSS}</style>
      <div className="lb-shell">

        {view === "bizauth" && <Gate onAuth={handleAuth} initialRole="business" initialTab={bizTab} onBack={() => setView("customer")} />}
        {view === "business" && <BusinessApp profile={bizProfile} onExit={logout} onUpdateProfile={setBizProfile} />}

        {view === "customer" && <>
        <div className="lb-top">
          <div className="lb-logo" onClick={() => setScreen("home")} style={{ cursor: "pointer" }}>
            <span className="mark"><Tag size={17} /></span>Lead<b>Bid</b>
          </div>
          {account ? (
            <span className="lb-accountchip">
              <LangToggle />
              <button className="lb-logout" onClick={() => setScreen("dashboard")}><Briefcase size={12} /> {t("My jobs")}{myJobs.length > 0 ? ` (${myJobs.length})` : ""}</button>
              <button className="lb-logout" onClick={logout}><LogOut size={12} /> {t("Log out")}</button>
            </span>
          ) : (
            <span className="lb-accountchip">
              <LangToggle />
              <button className="lb-logout" onClick={() => { setAuthTab("signup"); setAuthModal("account"); }}><LogIn size={12} /> {t("Sign up / Log in")}</button>
            </span>
          )}
        </div>

        {/* HOME */}
        {screen === "home" && (
          <>
            <div className="lb-hero">
              <h1 className="lb-display">{t("Set your price.")}<br /><span className="hl">{t("Let pros compete.")}</span></h1>
              <p>{t("Choose a service, tell us exactly what you need, and name your price. We broadcast your bid to local businesses — they accept or pass, and you pick who you like best.")}</p>
              <div className="lb-steps">
                <span className="lb-chip"><b>1</b> {t("Choose service")}</span>
                <span className="lb-chip"><b>2</b> {t("Bid your price")}</span>
                <span className="lb-chip"><b>3</b> {t("Pros respond")}</span>
                <span className="lb-chip"><b>4</b> {t("Chat & book")}</span>
              </div>
            </div>
            <div className="lb-sec-h">{t("Pick a category")}</div>
            <div className="lb-grid">
              {CATEGORIES.map(c => (
                <button key={c.id} className="lb-cat" onClick={() => { setCat(c); setService(null); setDetails({}); setScreen("service"); }}>
                  <span className="ic"><CatLogo id={c.id} /></span>
                  <div className="nm">{t(c.name)}</div>
                  <div className="sub">{t(c.sub)}</div>
                </button>
              ))}
            </div>

            {!account && (
              <div style={{ marginTop: 38 }}>
                <div className="lb-sec-h">{t("Get started on LeadBid")}</div>
                <div className="lb-roles">
                  <div className="lb-role cust">
                    <span className="ic"><User size={24} /></span>
                    <h3>{t("I'm a customer")}</h3>
                    <p>{t("Browse freely — create an account when you're ready to place a bid, chat with pros, and book, protected end to end.")}</p>
                    <div className="acts">
                      <button className="lb-btn sm" style={{ flex: 1 }} onClick={() => { setAuthTab("signup"); setAuthModal("account"); }}><UserPlus size={15} /> {t("Sign up")}</button>
                      <button className="lb-btn ghost sm" style={{ flex: 1 }} onClick={() => { setAuthTab("login"); setAuthModal("account"); }}><LogIn size={15} /> {t("Log in")}</button>
                    </div>
                  </div>
                  <div className="lb-role biz">
                    <span className="ic"><Building2 size={24} /></span>
                    <h3>{t("I'm a business")}</h3>
                    <p>{t("Get matched to real local jobs with the price already on the table. Accept the ones you want — no cold leads.")}</p>
                    <div className="acts">
                      <button className="lb-btn sm" style={{ flex: 1, background: "var(--ink)", boxShadow: "none" }} onClick={() => { setBizTab("signup"); setView("bizauth"); }}><UserPlus size={15} /> {t("Sign up")}</button>
                      <button className="lb-btn ghost sm" style={{ flex: 1 }} onClick={() => { setBizTab("login"); setView("bizauth"); }}><LogIn size={15} /> {t("Log in")}</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="lb-note">{t("Prototype demo · business responses are simulated for illustration")}</div>
          </>
        )}

        {/* CUSTOMER DASHBOARD */}
        {screen === "dashboard" && (
          <>
            <div className="lb-head-row" style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div className="lb-display" style={{ fontSize: 27, fontWeight: 800 }}>{t("My jobs")}</div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{t("Your requests")} · {myJobs.length} {t("total")}</div>
              </div>
              <button className="lb-btn sm" onClick={() => setScreen("home")}><Plus size={15} /> {t("New bid")}</button>
            </div>

            {myJobs.length === 0 && (
              <div className="lb-empty-tab">
                <Briefcase size={30} /><br />{t("You haven't placed any bids yet. Browse a service and name your price to get started.")}
                <div style={{ marginTop: 16 }}><button className="lb-btn sm" onClick={() => setScreen("home")} style={{ margin: "0 auto" }}>{t("Browse services")}</button></div>
              </div>
            )}

            {myJobs.map(job => {
              const accCount = job.accepted.length;
              return (
                <div className="lb-bid" key={job.id}>
                  <div className="lb-bid-top">
                    <span className="lb-avatar" style={{ background: job.color, width: 44, height: 44 }}><job.Icon size={20} /></span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="svc">{t(job.serviceName)}</div>
                      <div className="cust">
                        <span><Clock size={12} /> {timeAgoMs(job.when, lang)}</span>
                        <span><MapPin size={12} /> {job.radius} mi · {job.zip}</span>
                      </div>
                    </div>
                    <div className="lb-bid-price">
                      <div className="pp">${job.price.toLocaleString()}</div>
                      <div style={{ fontSize: 10.5, color: "var(--ink-soft)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em" }}>{t("your bid")}</div>
                    </div>
                  </div>
                  {job.tags && job.tags.length > 0 && <div className="lb-bid-fields">{job.tags.map((t, i) => <span className="lb-tag" key={i}>{t}</span>)}</div>}
                  {job.status === "booked"
                    ? <div className="lb-statusbadge won"><CheckCircle2 size={14} /> {t("Booked with")} {job.bookedBiz && job.bookedBiz.firstName} ({job.bookedBiz && job.bookedBiz.code})</div>
                    : <div className="lb-statusbadge pending"><Radio size={14} /> {accCount} {accCount === 1 ? t("business accepted") : t("businesses accepted")}</div>}
                  <div className="lb-bid-acts">
                    <button className="lb-btn ghost sm" style={{ flex: 1 }} onClick={() => openJob(job, "results")}>{t("View")} {accCount} {accCount === 1 ? t("response") : t("responses")} <ChevronRight size={15} /></button>
                    {job.status === "booked" && <button className="lb-btn sm" style={{ flex: 1 }} onClick={() => openJob(job, "chat")}><MessageCircle size={15} /> {t("Open chat")}</button>}
                  </div>
                </div>
              );
            })}
          </>
        )}

        {/* SERVICE SELECTION */}
        {screen === "service" && cat && (
          <>
            <button className="lb-back" onClick={() => setScreen("home")}><ArrowLeft size={16} /> {t("All categories")}</button>
            <div className="lb-head-row">
              <span className="lb-avatar" style={{ background: cat.color }}><cat.icon size={22} /></span>
              <div>
                <div className="lb-display" style={{ fontSize: 26, fontWeight: 800 }}>{t(cat.name)}</div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{t("Pick exactly what you need")}</div>
              </div>
            </div>

            {cat.services.map(s => (
              <div key={s.id}>
                <button className={`lb-srv ${service?.id === s.id ? "sel" : ""}`} onClick={() => pickService(s)}>
                  <span className="radio" />
                  <span>
                    <span className="nm">{t(s.name)}</span>
                  </span>
                  {s.fields && <span className="more">{t("+ details")} <ChevronRight size={12} /></span>}
                </button>
                {service?.id === s.id && s.fields && (
                  <div className="lb-fields">
                    <div className="ttl"><Tag size={14} /> {t("A few details so pros can quote accurately")}</div>
                    {s.fields.map(f => (
                      <div className="lb-field" key={f.key}>
                        <label className="lb-label">{t(f.label)} {f.required && <span style={{ color: "var(--accent-deep)" }}>*</span>}</label>
                        {f.type === "select" ? (
                          <select className="lb-select" value={details[f.key] ?? ""} onChange={e => setDetails(d => ({ ...d, [f.key]: e.target.value }))}>
                            <option value="">{t("Select…")}</option>
                            {f.options.map(o => <option key={o} value={o}>{t(o)}</option>)}
                          </select>
                        ) : (
                          <input className="lb-input" type={f.type === "number" ? "number" : "text"}
                            inputMode={f.type === "number" ? "numeric" : "text"}
                            placeholder={f.placeholder || ""} value={details[f.key] ?? ""}
                            onChange={e => setDetails(d => ({ ...d, [f.key]: e.target.value }))} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="lb-btn" style={{ marginTop: 8 }} disabled={!service || !fieldsComplete} onClick={goToBid}>
              {t("Continue to bid")} <ChevronRight size={18} />
            </button>
            {service && !fieldsComplete && <div className="lb-price-note" style={{ textAlign: "center", marginTop: 10 }}>{t("Fill the required (*) details to continue")}</div>}
          </>
        )}

        {/* BID */}
        {screen === "bid" && cat && service && (
          <>
            <button className="lb-back" onClick={() => setScreen("service")}><ArrowLeft size={16} /> {t("Change service")}</button>
            <div className="lb-panel">
              <div className="lb-head-row" style={{ marginBottom: 16 }}>
                <span className="lb-avatar" style={{ background: cat.color }}><cat.icon size={22} /></span>
                <div>
                  <div className="lb-display" style={{ fontSize: 21, fontWeight: 800 }}>{t(service.name)}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{t(cat.name)}</div>
                </div>
              </div>
              {tags.length > 0 && <div className="lb-tags" style={{ marginBottom: 18 }}>{tags.map((t, i) => <span className="lb-tag" key={i}>{t}</span>)}</div>}

              <AICoach service={service} radius={radius} price={price} setPrice={setPrice} />

              <div className="lb-field">
                <label className="lb-label">{t("Your bid")} <span className="lb-hint">{t("— what you're willing to pay")}</span></label>
                <div className="lb-price-wrap">
                  <span className="cur">$</span>
                  <input className="lb-price" type="number" value={price} min="1" onChange={e => setPrice(e.target.value)} placeholder="0" />
                </div>
                <div className="lb-price-note">{t("The AI coach above updates live as you change this number.")}</div>
              </div>

              <div className="lb-row">
                <div className="lb-field">
                  <label className="lb-label">{t("Your name")}</label>
                  <input className="lb-input" value={name} onChange={e => setName(e.target.value)} placeholder="Jordan" />
                </div>
                <div className="lb-field">
                  <label className="lb-label">{t("ZIP code")}</label>
                  <input className="lb-input" value={zip} maxLength={5} inputMode="numeric" onChange={e => setZip(e.target.value.replace(/\D/g, ""))} placeholder="33319" />
                </div>
              </div>

              <div className="lb-field">
                <label className="lb-label">{t("Search radius")} <span className="lb-radius-val" style={{ marginLeft: 6 }}>{radius} mi</span></label>
                <input className="lb-range" type="range" min="5" max="15" step="1" value={radius} onChange={e => setRadius(Number(e.target.value))} />
                <div className="lb-ticks"><span>5 mi</span><span>10 mi</span><span>15 mi</span></div>
              </div>

              <button className="lb-btn" disabled={!priceNum || !name || zip.length < 5} onClick={startBid}><Radio size={18} /> {t("Broadcast my bid")}</button>
              {(!priceNum || !name || zip.length < 5) && <div className="lb-price-note" style={{ textAlign: "center", marginTop: 10 }}>{t("Enter your price, name and a 5-digit ZIP to continue")}</div>}
            </div>
          </>
        )}

        {/* SENDING */}
        {screen === "sending" && cat && service && (
          <div className="lb-panel" style={{ textAlign: "center" }}>
            <div className="lb-display" style={{ fontSize: 26, fontWeight: 800 }}>{t("Broadcasting your bid…")}</div>
            <p style={{ color: "var(--ink-soft)", marginTop: 8, fontSize: 15 }}>
              {t("Sending your")} <b style={{ color: "var(--ink)" }}>${price}</b> {t("bid for")} <b style={{ color: "var(--ink)" }}>{t(service.name)}</b> {t("to pros within")} <b style={{ color: "var(--ink)" }}>{radius} {t("miles")}</b> {t("of")} {zip}
            </p>
            <div className="lb-radar">
              <div className="lb-sweep" /><div className="ring" /><div className="ring r2" /><div className="ring r3" />
              {dots.map(d => <span key={d.id} className="lb-dot" style={{ left: d.x, top: d.y }} />)}
              <div className="core"><Radio size={22} /></div>
            </div>
            <div style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 10 }}>{t("Found")} {dots.length} {dots.length === 1 ? t("matching business nearby") : t("matching businesses nearby")}</div>
          </div>
        )}

        {/* RESULTS */}
        {screen === "results" && cat && service && (
          <>
            <button className="lb-back" onClick={reset}><ArrowLeft size={16} /> {t("Start over")}</button>
            <div className="lb-display" style={{ fontSize: 27, fontWeight: 800, marginBottom: 12 }}>
              {pending > 0 ? t("Pros are responding…") : t("Here's who accepted")}
            </div>
            <div className="lb-summary">
              <b>{t(service.name)}</b> · {t("your bid")} <b style={{ color: "var(--green)" }}>${price}</b> · {radius} mi · {zip}
              {tags.length > 0 && <div className="lb-tags">{tags.map((t, i) => <span className="lb-tag" key={i}>{t}</span>)}</div>}
            </div>

            <div className="lb-counts">
              <div className="lb-count acc"><div className="n">{accepted.length}</div><div className="l">{t("Accepted")}</div></div>
              <div className="lb-count dec"><div className="n">{declinedCount}</div><div className="l">{t("Passed")}</div></div>
              <div className="lb-count"><div className="n">{pending}</div><div className="l">{t("Deciding")}</div></div>
            </div>

            {accepted.length === 0 && pending > 0 && (
              <div className="lb-empty"><Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /><br />{t("Waiting for the first acceptance…")}</div>
            )}
            {accepted.length === 0 && pending === 0 && (
              <div className="lb-panel lb-empty">
                {t("No pros accepted")} ${price} {t("this time. Try raising your bid or widening the radius.")}
                <div style={{ marginTop: 16 }}><button className="lb-btn sm" onClick={() => setScreen("bid")} style={{ margin: "0 auto" }}>{t("Adjust my bid")}</button></div>
              </div>
            )}
            {accepted.map(b => (
              <BizCard key={b.id} b={b} price={price} onReviews={() => { setSelected(b); setScreen("detail"); }} onChoose={() => goToBook(b)} />
            ))}
            {accepted.length > 0 && pending > 0 && <div className="lb-note">{t("More pros are still deciding — new acceptances appear here live.")}</div>}
          </>
        )}

        {/* DETAIL */}
        {screen === "detail" && selected && service && (
          <>
            <button className="lb-back" onClick={() => setScreen("results")}><ArrowLeft size={16} /> {t("Back to results")}</button>
            <div className="lb-panel">
              <div className="lb-biz-top">
                <span className="lb-avatar lb-anon-av"><ShieldCheck size={22} /></span>
                <div style={{ flex: 1 }}>
                  <div className="lb-biz-name">{t(selected.handle)} <span className="lb-code">{selected.code}</span></div>
                  <div className="lb-stars">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill={i <= Math.round(selected.rating) ? "#f5a623" : "none"} color="#f5a623" />)}
                    <b>{selected.rating}</b> · {selected.reviews} reviews
                  </div>
                  <div className="lb-meta">
                    <span><MapPin size={13} /> {selected.distance} {t("mi away")}</span>
                    <span><Clock size={13} /> ~{selected.responseMins} {t("min reply")}</span>
                    <span><BadgeCheck size={13} /> {selected.jobs} {t("jobs")} · {selected.years} {t("yr")}</span>
                  </div>
                </div>
                <div className="lb-priceTag"><div className="pp">${price}</div><div className="ll">{t("accepted")}</div></div>
              </div>
              <span className="lb-locked"><Lock size={12} /> {t("This pro's name & contact unlock after you book")}</span>
              <div style={{ marginTop: 20 }} className="lb-sec-h">{t("Recent reviews")}</div>
              {selected.reviewsArr.map((r, i) => (
                <div className="lb-review" key={i}>
                  <div className="lb-rev-head">
                    <span className="lb-rev-av">{r.name[0]}</span><b>{r.name}</b>
                    <span style={{ display: "flex" }}>{Array.from({ length: r.stars }).map((_, k) => <Star key={k} size={12} fill="#f5a623" color="#f5a623" />)}</span>
                  </div>
                  <div className="lb-rev-body">{t(r.text)}</div>
                </div>
              ))}
              <button className="lb-btn" style={{ marginTop: 22 }} onClick={() => goToBook(selected)}><Check size={18} /> {t("Book this pro")}</button>
            </div>
          </>
        )}

        {/* BOOKING / DEPOSIT GATE */}
        {screen === "book" && selected && cat && service && (
          <>
            <button className="lb-back" onClick={() => setScreen("results")}><ArrowLeft size={16} /> {t("Back to results")}</button>
            <div className="lb-panel">
              <div className="lb-display" style={{ fontSize: 25, fontWeight: 800, marginBottom: 16 }}>{t("Confirm your booking")}</div>

              <div className="lb-book-card">
                <span className="lb-avatar lb-anon-av"><ShieldCheck size={22} /></span>
                <div style={{ flex: 1 }}>
                  <div className="lb-biz-name">{t(selected.handle)} <span className="lb-code">{selected.code}</span></div>
                  <div className="lb-stars">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={13} fill={i <= Math.round(selected.rating) ? "#f5a623" : "none"} color="#f5a623" />)}
                    <b>{selected.rating}</b> ({selected.reviews}) · {selected.distance} mi
                  </div>
                </div>
                <div className="lb-priceTag"><div className="pp">${price}</div><div className="ll">{t("agreed")}</div></div>
              </div>

              <div className="lb-protect">
                <div className="ph"><ShieldCheck size={17} /> {t("You're protected by LeadBid")}</div>
                <ul>
                  <li><Lock size={15} /> {t("Your pro stays anonymous until you confirm — then you get their first name and a private LeadBid line, never their personal number.")}</li>
                  <li><Phone size={15} /> {t("Calls and messages route through the app, so your booking and chat history stay protected.")}</li>
                  <li><Check size={15} /> {t("You only pay a small booking fee now — the job amount goes straight to your pro once the work is done.")}</li>
                </ul>
              </div>

              <div className="lb-breakdown">
                <div className="lb-brow">
                  <span className="k">{t("Your accepted bid")}<small>{t("paid directly to your pro when the job is done")}</small></span>
                  <span className="v">${Number(price).toLocaleString()}</span>
                </div>
                <div className="lb-brow">
                  <span className="k">{t("LeadBid booking fee")}<small>{t("secures your booking, protected chat & support")}</small></span>
                  <span className="v">${customerFee(price)}</span>
                </div>
                <div className="lb-brow total"><span className="k">{t("Due now")}</span><span className="v">${customerFee(price)}</span></div>
              </div>

              <div className="lb-deposit">
                <div className="dl">{t("That's it —")} <b>${customerFee(price)}</b> {t("today. The")} <b>${Number(price).toLocaleString()}</b> {t("for the job goes straight to your pro on completion. The booking fee is refunded if the pro cancels.")}</div>
                <div className="dv">${customerFee(price)}</div>
              </div>

              <button className="lb-btn" onClick={confirmBooking}><Lock size={17} /> {t("Confirm & unlock chat")}</button>
              <div className="lb-price-note" style={{ textAlign: "center", marginTop: 10 }}>{t("Demo only — no real payment is taken.")}</div>
            </div>
          </>
        )}

        {/* CHAT */}
        {screen === "chat" && selected && cat && service && (
          <>
            <button className="lb-back" onClick={() => setScreen("results")}><ArrowLeft size={16} /> {t("Back to results")}</button>
            <div className="lb-deal"><Check size={18} /> {t("Booked at")} ${price} {t("with")} {selected.firstName} ({selected.code})</div>
            <div className="lb-chat">
              <div className="lb-chat-head">
                <span className="lb-avatar lb-anon-av" style={{ width: 42, height: 42 }}><ShieldCheck size={18} /></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 5 }}>{selected.firstName} <BadgeCheck size={14} color="var(--green)" /></div>
                  <div className="lb-proxy"><Phone size={11} /> {selected.proxy} · {t("via LeadBid")}</div>
                </div>
                <button className="lb-callbtn" style={{ marginLeft: "auto" }} onClick={() => {}}><Phone size={12} /> {t("Call")}</button>
              </div>
              <div className="lb-protect-strip">
                <ShieldCheck size={15} />
                <span>{t("Calls & chat run through LeadBid. Personal phone numbers, emails and handles are hidden so your booking stays protected.")}</span>
              </div>
              <div className="lb-chat-body" ref={chatBody}>
                {messages.map((m, i) => (
                  m.from === "sys"
                    ? <div key={i} className="lb-redact-note"><EyeOff size={12} /> {t(m.text)}</div>
                    : <div key={i} className={`lb-msg ${m.from}`}>
                        {m.redacted
                          ? m.text.split(/(\[contact hidden\])/g).map((part, k) => part === "[contact hidden]" ? <span key={k} className="redacted">{t("contact hidden")}</span> : part)
                          : t(m.text)}
                        <span className="t">{m.time}</span>
                      </div>
                ))}
                {typing && <div className="lb-typing"><i /><i /><i /></div>}
              </div>
              <div className="lb-chat-input">
                <input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMsg()} placeholder={t("Type a message…")} />
                <button className="lb-iconbtn" onClick={sendMsg} disabled={!draft.trim()}><Send size={18} /></button>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              <button className="lb-btn ghost sm" onClick={reset} style={{ flex: 1 }}><Plus size={16} /> {t("New bid")}</button>
              <button className="lb-btn ghost sm" onClick={() => setScreen("results")} style={{ flex: 1 }}>{t("See other pros")}</button>
            </div>
          </>
        )}

        {authModal && (
          <AuthModal
            mode={authModal} initialTab={authTab}
            defName={name} defZip={zip} service={service} price={price}
            onClose={() => setAuthModal(null)}
            onAuthed={authModal === "bid" ? completeGuestAuth : completeAccountAuth}
          />
        )}
        </>}
      </div>
    </div>
    </LangCtx.Provider>
  );
}

function BizCard({ b, price, onReviews, onChoose }) {
  const { lang } = useLang(); const t = tFor(lang);
  return (
    <div className="lb-biz">
      <div className="lb-biz-top">
        <span className="lb-avatar lb-anon-av"><ShieldCheck size={22} /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="lb-biz-name">{t(b.handle)} <span className="lb-code">{b.code}</span></div>
          <div className="lb-stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={13} fill={i <= Math.round(b.rating) ? "#f5a623" : "none"} color="#f5a623" />)}
            <b>{b.rating}</b> ({b.reviews})
          </div>
        </div>
        <div className="lb-priceTag"><div className="pp">${price}</div><div className="ll">{t("accepted")}</div></div>
      </div>
      <div className="lb-meta">
        <span><MapPin size={13} /> {b.distance} mi</span>
        <span><Clock size={13} /> ~{b.responseMins} {t("min reply")}</span>
        <span><BadgeCheck size={13} /> {b.jobs} {t("jobs")} · {b.years} {t("yr")}</span>
      </div>
      <div className="lb-quote">“{t(b.reviewsArr[0].text)}”</div>
      <span className="lb-locked"><Lock size={12} /> {t("Name & contact hidden until you book")}</span>
      <div className="lb-biz-actions">
        <button className="lb-btn ghost sm" style={{ flex: 1 }} onClick={onReviews}>{t("Reviews")} <ChevronRight size={15} /></button>
        <button className="lb-btn sm" style={{ flex: 1 }} onClick={onChoose}><Check size={15} /> {t("Book this pro")}</button>
      </div>
    </div>
  );
}

function AICoach({ service, radius, price, setPrice }) {
  const { lang } = useLang(); const t = tFor(lang);
  const ai = aiRecommend(service, radius);
  const bid = Number(price);
  const pred = bid > 0 ? predict(bid, service, radius) : null;
  return (
    <div className="lb-ai">
      <div className="lb-ai-head"><Wand2 size={15} /> {t("AI Bid Coach")}</div>
      <div className="lb-ai-sub">
        {t("From")} <b>{t(service.name)}</b> {t("jobs near you, the average price is about")} <b>${ai.avg.toLocaleString()}</b>{t(". Your radius of")} <b>{radius}</b> {t("miles reaches roughly")} <b>{ai.n}</b> {t("pros — the sweet spot for strong responses while still saving:")}
      </div>
      <div className="lb-ai-rec">
        <div>
          <div className="num"><small>$</small>{ai.recommended.toLocaleString()}</div>
          <div className="lbl">{t("Recommended bid")}</div>
        </div>
        <button className="lb-ai-use" onClick={() => setPrice(String(ai.recommended))}>
          <Check size={15} /> {t("Use this")}
        </button>
      </div>
      <div className="lb-ai-alts">
        <button className="lb-ai-chip" onClick={() => setPrice(String(ai.low))}>
          <div className="c-t">💰 {t("Best deal")}</div>
          <div className="c-p">${ai.low.toLocaleString()}</div>
          <div className="c-n">~{predict(ai.low, service, radius).accepts} {t("accept")}</div>
        </button>
        <button className="lb-ai-chip" onClick={() => setPrice(String(ai.high))}>
          <div className="c-t">⚡ {t("Book fast")}</div>
          <div className="c-p">${ai.high.toLocaleString()}</div>
          <div className="c-n">~{predict(ai.high, service, radius).accepts} {t("accept")}</div>
        </button>
      </div>
      {pred && (
        <div className="lb-meter">
          <div className="lb-meter-top">
            <span className="lk" style={{ color: pred.color }}><TrendingUp size={13} style={{ verticalAlign: "-2px" }} /> {t(pred.label)}</span>
            <span className="ex">{t("Your")} ${bid.toLocaleString()} {t("bid → ~")}{pred.accepts} {t("of")} {pred.n} {t("pros likely to accept")}</span>
          </div>
          <div className="lb-meter-bar">
            <div className="lb-meter-fill" style={{ width: `${Math.round(pred.chance * 100)}%`, background: pred.color }} />
          </div>
        </div>
      )}
    </div>
  );
}
/* ====================== BUSINESS AUTH SCREEN ====================== */
function Gate({ onAuth, initialRole, initialTab, onBack }) {
  const { lang } = useLang(); const t = tFor(lang);
  const [role, setRole] = useState(initialRole || null);   // null | "customer" | "business"
  const [tab, setTab] = useState(initialTab || "signup");   // signup | login
  const [f, setF] = useState({ name: "", email: "", phone: "", zip: "", pw: "", bizName: "", bio: "", years: "", radius: 12 });
  const [cats, setCats] = useState([]);
  const [logo, setLogo] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const set = (k, v) => setF(s => ({ ...s, [k]: v }));
  const back = () => onBack ? onBack() : setRole(null);
  const readImg = readImageFile;

  function open(r, t) { setRole(r); setTab(t); setCats([]); setLogo(null); setPhotos([]); setAgreed(false); setShowPolicy(false); setF({ name: "", email: "", phone: "", zip: "", pw: "", bizName: "", bio: "", years: "", radius: 12 }); }

  // ---- role chooser (fallback) ----
  if (!role) {
    return (
      <>
        <div className="lb-top">
          <div className="lb-logo"><span className="mark"><Tag size={17} /></span>Lead<b>Bid</b></div>
          <span className="lb-badge">You name the price</span>
        </div>
        <div className="lb-roles">
          <div className="lb-role cust">
            <span className="ic"><User size={24} /></span>
            <h3>I'm a customer</h3>
            <p>Name your price, get pros to accept, compare reviews, and book — protected end to end.</p>
            <div className="acts">
              <button className="lb-btn sm" style={{ flex: 1 }} onClick={() => open("customer", "signup")}><UserPlus size={15} /> {t("Sign up")}</button>
              <button className="lb-btn ghost sm" style={{ flex: 1 }} onClick={() => open("customer", "login")}><LogIn size={15} /> {t("Log in")}</button>
            </div>
          </div>
          <div className="lb-role biz">
            <span className="ic"><Building2 size={24} /></span>
            <h3>I'm a business</h3>
            <p>Get matched to real local jobs with the price already on the table.</p>
            <div className="acts">
              <button className="lb-btn sm" style={{ flex: 1, background: "var(--ink)", boxShadow: "none" }} onClick={() => open("business", "signup")}><UserPlus size={15} /> {t("Sign up")}</button>
              <button className="lb-btn ghost sm" style={{ flex: 1 }} onClick={() => open("business", "login")}><LogIn size={15} /> {t("Log in")}</button>
            </div>
          </div>
        </div>
        <div className="lb-note">Prototype demo · no real accounts or payments are created</div>
      </>
    );
  }

  const isBiz = role === "business";
  const isSignup = tab === "signup";
  const valid = isSignup
    ? (isBiz ? (f.bizName && f.email && f.zip && f.pw && cats.length > 0 && agreed) : (f.name && f.email && f.zip && f.pw))
    : (f.email && f.pw);

  function submit() {
    if (!valid) return;
    if (isBiz) {
      const profile = isSignup
        ? { name: f.bizName, owner: f.name, email: f.email, phone: f.phone, cats, zip: f.zip, radius: Number(f.radius), bio: f.bio, years: f.years, logo, photos, plan: "free", rating: +(4.4 + Math.random() * 0.5).toFixed(1) }
        : { name: "Your Business", cats: [], zip: "33319", radius: 12, plan: "free", rating: 4.8 };
      onAuth("business", profile);
    } else {
      onAuth("customer", isSignup ? { name: f.name, email: f.email, zip: f.zip } : { name: "", email: f.email });
    }
  }

  return (
    <>
      <div className="lb-top">
        <div className="lb-logo" onClick={back} style={{ cursor: "pointer" }}><span className="mark"><Tag size={17} /></span>Lead<b>Bid</b></div>
        <span className="lb-accountchip"><LangToggle /><button className="lb-logout" onClick={back}><ArrowLeft size={12} /> {t("Back")}</button></span>
      </div>
      <div className="lb-head-row">
        <span className="lb-avatar" style={{ background: isBiz ? "var(--ink)" : "var(--accent)" }}>{isBiz ? <Building2 size={22} /> : <User size={22} />}</span>
        <div>
          <div className="lb-display" style={{ fontSize: 24, fontWeight: 800 }}>{isBiz ? t("Business account") : t("Customer account")}</div>
          <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{isSignup ? t("Create your account") : t("Welcome back")}</div>
        </div>
      </div>
      <div className="lb-panel">
        <div className="lb-auth-tabs">
          <button className={`lb-auth-tab ${isSignup ? "on" : ""}`} onClick={() => setTab("signup")}>{t("Sign up")}</button>
          <button className={`lb-auth-tab ${!isSignup ? "on" : ""}`} onClick={() => setTab("login")}>{t("Log in")}</button>
        </div>

        {isSignup && isBiz && (
          <div className="lb-field"><label className="lb-label">{t("Business name")}</label>
            <input className="lb-input" value={f.bizName} onChange={e => set("bizName", e.target.value)} placeholder="Summit Plumbing & Co" /></div>
        )}
        {isSignup && (
          <div className="lb-field"><label className="lb-label">{isBiz ? t("Your name") : t("Full name")}</label>
            <input className="lb-input" value={f.name} onChange={e => set("name", e.target.value)} placeholder="Jordan Rivera" /></div>
        )}
        <div className="lb-field"><label className="lb-label">{t("Email")}</label>
          <input className="lb-input" type="email" value={f.email} onChange={e => set("email", e.target.value)} placeholder="you@email.com" /></div>

        {isSignup && (
          <div className="lb-field"><label className="lb-label">{t("Phone number")}</label>
            <input className="lb-input" type="tel" inputMode="tel" value={f.phone} onChange={e => set("phone", e.target.value)} placeholder="(555) 123-4567" /></div>
        )}
        {isSignup && (
          <div className="lb-row">
            <div className="lb-field"><label className="lb-label">{isBiz ? t("Service ZIP") : t("ZIP code")}</label>
              <input className="lb-input" value={f.zip} maxLength={5} inputMode="numeric" onChange={e => set("zip", e.target.value.replace(/\D/g, ""))} placeholder="33319" /></div>
            <div className="lb-field"><label className="lb-label">{t("Password")}</label>
              <input className="lb-input" type="password" value={f.pw} onChange={e => set("pw", e.target.value)} placeholder="••••••••" /></div>
          </div>
        )}
        {!isSignup && (
          <div className="lb-field"><label className="lb-label">{t("Password")}</label>
            <input className="lb-input" type="password" value={f.pw} onChange={e => set("pw", e.target.value)} placeholder="••••••••" /></div>
        )}

        {isSignup && isBiz && (
          <div className="lb-field">
            <label className="lb-label">{t("Services you offer")} <span className="lb-hint">{t("— you'll get bids in these")}</span></label>
            <div className="lb-multi">
              {CATEGORIES.map(c => {
                const on = cats.includes(c.id);
                return (
                  <button key={c.id} className={`lb-mchip ${on ? "on" : ""}`} onClick={() => setCats(p => on ? p.filter(x => x !== c.id) : [...p, c.id])}>
                    <c.icon size={13} /> {t(c.name)}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {isSignup && isBiz && (
          <>
            <div className="lb-subhead">{t("Your business profile")}</div>
            <div className="lb-field">
              <label className="lb-label">{t("About your business")} <span className="lb-hint">{t("— shown to customers you win")}</span></label>
              <textarea className="lb-textarea" value={f.bio} onChange={e => set("bio", e.target.value)} placeholder="Family-owned, licensed & insured. Fast, friendly service with upfront pricing…" />
            </div>
            <div className="lb-field"><label className="lb-label">{t("Years in business")}</label>
              <input className="lb-input" type="number" value={f.years} onChange={e => set("years", e.target.value)} placeholder="8" /></div>

            <div className="lb-field">
              <label className="lb-label">Logo</label>
              <div className="lb-upload-row">
                <label className="lb-logo-drop">
                  {logo ? <img src={logo} alt="logo" /> : <span style={{ fontSize: 11 }}><ImageIcon size={20} /><br />{t("Add logo")}</span>}
                  <input type="file" accept="image/*" hidden onChange={e => { const file = e.target.files && e.target.files[0]; if (file) readImg(file, setLogo); e.target.value = ""; }} />
                </label>
                <div style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.45 }}>
                  {t("A clear logo helps customers recognize you after they book.")}
                  {logo && <><br /><button className="lb-logout" style={{ marginTop: 8 }} onClick={() => setLogo(null)}><X size={11} /> {t("Remove")}</button></>}
                </div>
              </div>
            </div>

            <div className="lb-field">
              <label className="lb-label">{t("Photos of your work")} <span className="lb-hint">{t("— up to 6")}</span></label>
              <label className="lb-uploadbtn"><ImagePlus size={16} /> {t("Add photos")}
                <input type="file" accept="image/*" multiple hidden onChange={e => {
                  const files = Array.from(e.target.files || []);
                  files.slice(0, 6 - photos.length).forEach(file => readImg(file, url => setPhotos(p => p.length < 6 ? [...p, url] : p)));
                  e.target.value = "";
                }} />
              </label>
              {photos.length > 0 && (
                <div className="lb-photos">
                  {photos.map((src, i) => (
                    <div className="lb-photo-wrap" key={i}>
                      <img src={src} alt={`work ${i + 1}`} />
                      <button className="lb-photo-rm" onClick={() => setPhotos(p => p.filter((_, k) => k !== i))}><X size={11} /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {isSignup && isBiz && (
          <>
            <div className="lb-subhead">{t("Terms & responsibility")}</div>
            <button className="lb-policy-toggle" onClick={() => setShowPolicy(p => !p)}>
              {showPolicy ? t("Hide") : t("Read")} {t("LeadBid Service Provider Guidelines")}
            </button>
            {showPolicy && (
              <div className="lb-policy">
                <h4>{t("Licensing & qualifications")}</h4>
                <ul>
                  <li>{t("You confirm you hold all licenses, certifications, permits, and insurance required by law to perform every service you list.")}</li>
                  <li>{t("You will keep these current and provide proof on request.")}</li>
                </ul>
                <h4>{t("Responsibility for the work")}</h4>
                <ul>
                  <li>{t("You are solely and fully responsible for the quality, safety, legality, and outcome of the work you perform.")}</li>
                  <li>{t("Any agreement is strictly between you and the customer. You set your own terms and stand behind your work.")}</li>
                </ul>
                <h4>{t("LeadBid's role & liability")}</h4>
                <ul>
                  <li>{t("LeadBid is only a platform that connects customers and providers. It does not perform, supervise, endorse, or guarantee any work.")}</li>
                  <li>{t("LeadBid bears no liability for any service performed, any damage, injury, loss, or dispute. You release LeadBid from all such claims and agree to indemnify it.")}</li>
                </ul>
                <h4>{t("Conduct")}</h4>
                <ul>
                  <li>{t("Keep communication, scheduling, and payment on LeadBid. Soliciting customers off-platform may result in removal.")}</li>
                  <li>{t("No misrepresentation of identity, license status, or qualifications.")}</li>
                </ul>
              </div>
            )}
            <div className={`lb-agree ${agreed ? "on" : ""}`} onClick={() => setAgreed(a => !a)}>
              <span className="lb-check">{agreed && <Check size={15} />}</span>
              <span className="txt">
                {t("I have read and agree to LeadBid's")} <b>{t("Terms & Service Provider Guidelines")}</b>{t(". I confirm I am")} <b>{t("fully licensed and insured")}</b> {t("to perform the services I offer, that I am")} <b>{t("solely responsible")}</b> {t("for the work I deliver, and that")} <b>{t("LeadBid bears no liability")}</b> {t("for any services provided.")}
              </span>
            </div>
          </>
        )}

        <button className="lb-btn" disabled={!valid} onClick={submit} style={isBiz ? { background: "var(--ink)", boxShadow: "none" } : {}}>
          {isSignup ? t("Create account") : t("Log in")} <ArrowRight size={17} />
        </button>
        {!valid && <div className="lb-price-note" style={{ textAlign: "center", marginTop: 10 }}>
          {isBiz && isSignup ? t("Fill every field, pick at least one service, and agree to the terms") : t("Fill in the fields above to continue")}
        </div>}
      </div>
    </>
  );
}

/* ====================== BUSINESS SIDE ====================== */
function fillFields(service) {
  if (!service.fields) return [];
  return service.fields.map(f => {
    let val;
    if (f.type === "select") val = rand(f.options);
    else if (SAMPLES[f.key]) val = rand(SAMPLES[f.key]);
    else if (f.type === "number") val = f.placeholder || String(Math.floor(rnd(1, 5)));
    else val = f.placeholder || "—";
    return { label: f.label, val };
  });
}
function genBids(profile) {
  const cats = (profile && profile.cats && profile.cats.length) ? profile.cats : [];
  const out = []; let id = 0;
  const total = cats.length ? 6 + Math.floor(Math.random() * 4) : 0;
  for (let i = 0; i < total; i++) {
    const catId = rand(cats);
    const cat = CATEGORIES.find(c => c.id === catId);
    if (!cat) continue;
    const service = rand(cat.services);
    const avg = service.typical;
    const price = roundNice(avg * (0.62 + Math.random() * 0.55));
    out.push({
      id: id++, catName: cat.name, color: cat.color, Icon: cat.icon,
      serviceName: service.name, fields: fillFields(service),
      price, avg,
      distance: +(rnd(0.5, profile?.radius || 14)).toFixed(1),
      zip: String(33000 + Math.floor(rnd(100, 999))),
      postedMins: Math.floor(rnd(1, 95)),
      status: "new",
      customerFirst: rand(FIRST),
      proxy: `(555) 0${Math.floor(rnd(10, 99))}-${Math.floor(rnd(1000, 9999))}`,
    });
  }
  return out.sort((a, b) => a.postedMins - b.postedMins);
}
function dealIndicator(price, avg) {
  const r = price / avg;
  if (r >= 0.95) return { t: "Great pay", bg: "var(--green-soft)", c: "var(--green)" };
  if (r >= 0.8) return { t: "Fair", bg: "#fff6e6", c: "#b07400" };
  return { t: "Low offer", bg: "#f9e6e3", c: "var(--red)" };
}
function ago(m, lang) { const v = m < 60 ? `${m}m` : `${Math.floor(m / 60)}h`; return lang === "es" ? `hace ${v}` : `${v} ago`; }

function BusinessApp({ profile, onExit, onUpdateProfile }) {
  const { lang } = useLang(); const t = tFor(lang);
  const [tab, setTab] = useState("new");
  const [bids, setBids] = useState(() => genBids(profile));
  const [view, setView] = useState("dash"); // dash | chat | settings
  const [active, setActive] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const timers = useRef([]);
  const body = useRef(null);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => { if (body.current) body.current.scrollTop = body.current.scrollHeight; }, [messages, typing]);

  const newBids = bids.filter(b => b.status === "new");
  const pendingBids = bids.filter(b => b.status === "accepted" || b.status === "lost");
  const wonBids = bids.filter(b => b.status === "won");
  const earnings = wonBids.reduce((s, b) => s + payoutFor(b.price, profile).net, 0);
  const accRate = bids.length ? Math.round((bids.filter(b => b.status !== "new" && b.status !== "declined").length) / bids.length * 100) : 0;

  function setStatus(id, patch) { setBids(prev => prev.map(b => b.id === id ? { ...b, ...patch } : b)); }
  function accept(b) {
    setStatus(b.id, { status: "accepted" });
    const t = setTimeout(() => {
      const won = Math.random() < 0.55;
      setStatus(b.id, { status: won ? "won" : "lost" });
    }, 2600 + Math.random() * 4200);
    timers.current.push(t);
  }
  function openJob(b) {
    setActive(b);
    setMessages([{ from: "them", text: `${t("Hi! I'm")} ${b.customerFirst}${t(". Thanks for accepting my")} ${t(b.serviceName)} ${t("request at")} $${b.price}${t(". When can you come by?")}`, time: now() }]);
    setView("chat");
  }
  function saveSettings(updated) {
    const prevCats = (profile.cats || []).slice().sort().join(",");
    const newCats = (updated.cats || []).slice().sort().join(",");
    if (onUpdateProfile) onUpdateProfile(updated);
    if (prevCats !== newCats) setBids(genBids(updated));   // refresh feed only if services changed
    setView("dash");
  }
  function send() {
    if (!draft.trim()) return;
    const { clean, hadPII } = redact(draft.trim());
    setMessages(m => [...m, { from: "me", text: clean, time: now(), redacted: hadPII }]);
    if (hadPII) setMessages(m => [...m, { from: "sys", text: "Contact details were hidden. Keep the conversation on LeadBid to stay eligible for payouts." }]);
    setDraft(""); setTyping(true);
    const t = setTimeout(() => { setTyping(false); setMessages(m => [...m, { from: "them", text: rand(CUST_REPLIES), time: now() }]); }, 1100 + Math.random() * 1100);
    timers.current.push(t);
  }

  // ---- settings view ----
  if (view === "settings") {
    return (
      <>
        <BizTop profile={profile} onExit={onExit} />
        <BizSettings profile={profile} onSave={saveSettings} onCancel={() => setView("dash")} />
      </>
    );
  }

  // ---- chat view ----
  if (view === "chat" && active) {
    return (
      <>
        <BizTop profile={profile} onExit={onExit} />
        <button className="lb-back" onClick={() => setView("dash")}><ArrowLeft size={16} /> {t("Back to dashboard")}</button>
        <div className="lb-deal"><Check size={18} /> {t("Job won —")} ${active.price} · {t(active.serviceName)}</div>
        <div className="lb-chat">
          <div className="lb-chat-head">
            <span className="lb-avatar lb-anon-av" style={{ width: 42, height: 42 }}><User size={18} /></span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{active.customerFirst}</div>
              <div className="lb-proxy"><Phone size={11} /> {active.proxy} · {t("via LeadBid")}</div>
            </div>
            <span className="lb-statusbadge won" style={{ marginLeft: "auto", marginTop: 0 }}><CheckCircle2 size={14} /> {t("Booked")}</span>
          </div>
          <div className="lb-protect-strip">
            <ShieldCheck size={15} />
            <span>{t("Keep calls & chat on LeadBid. Sharing personal contact info off-platform can forfeit your payout and ranking.")}</span>
          </div>
          <div className="lb-chat-body" ref={body}>
            {messages.map((m, i) => (
              m.from === "sys"
                ? <div key={i} className="lb-redact-note"><EyeOff size={12} /> {t(m.text)}</div>
                : <div key={i} className={`lb-msg ${m.from}`}>
                    {m.redacted ? m.text.split(/(\[contact hidden\])/g).map((p, k) => p === "[contact hidden]" ? <span key={k} className="redacted">{t("contact hidden")}</span> : p) : t(m.text)}
                    <span className="t">{m.time}</span>
                  </div>
            ))}
            {typing && <div className="lb-typing"><i /><i /><i /></div>}
          </div>
          <div className="lb-chat-input">
            <input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder={t("Message the customer…")} />
            <button className="lb-iconbtn" onClick={send} disabled={!draft.trim()}><Send size={18} /></button>
          </div>
        </div>
      </>
    );
  }

  // ---- dashboard ----
  const list = tab === "new" ? newBids : tab === "accepted" ? pendingBids : wonBids;
  return (
    <>
      <BizTop profile={profile} onExit={onExit} />
      <div className="lb-bizhead">
        <span className="lb-bizlogo">{profile?.logo ? <img src={profile.logo} alt="logo" /> : <Building2 size={24} />}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="lb-display" style={{ fontSize: 25, fontWeight: 800 }}>{profile?.name || "Your Business"}</div>
          <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{t("Serving")} {profile?.zip || "—"} · {(profile?.cats || []).length} {(profile?.cats || []).length === 1 ? t("service") : t("services")}{profile?.years ? ` · ${profile.years} ${t("yrs in business")}` : ""}</div>
        </div>
        <button className="lb-editbtn" onClick={() => setView("settings")}><Settings size={14} /> {t("Edit profile")}</button>
      </div>
      {profile?.bio && <div className="lb-bizbio">{profile.bio}</div>}
      {profile?.photos && profile.photos.length > 0 && (
        <div className="lb-gallery">{profile.photos.map((src, i) => <img key={i} src={src} alt={`work ${i + 1}`} />)}</div>
      )}

      <div className="lb-stats">
        <div className="lb-stat"><div className="n">{newBids.length}</div><div className="l">{t("New bids")}</div></div>
        <div className="lb-stat"><div className="n">{wonBids.length}</div><div className="l">{t("Jobs won")}</div></div>
        <div className="lb-stat"><div className="n">{accRate}%</div><div className="l">{t("Response rate")}</div></div>
        <div className="lb-stat"><div className="n">${earnings.toLocaleString()}</div><div className="l">{t("Net pipeline")}</div></div>
      </div>

      {profile && profile.plan === "pro" ? (
        <div style={{ marginBottom: 16 }}>
          <span className="lb-probadge"><Star size={11} fill="currentColor" /> LEADBID PRO · {Math.round(COMMISSION.pro * 100)}% {t("success fee")}</span>
        </div>
      ) : (
        <div className="lb-pro">
          <span className="star"><Star size={19} fill="currentColor" /></span>
          <div>
            <div className="tt">{t("Upgrade to LeadBid Pro —")} ${PRO_MONTHLY}{t("/mo")}</div>
            <div className="dd">{t("Success fee drops from")} <b>{Math.round(COMMISSION.free * 100)}%</b> {t("to")} <b>{Math.round(COMMISSION.pro * 100)}%</b> {t("+ priority placement in customer results.")}</div>
          </div>
          <button onClick={() => onUpdateProfile && onUpdateProfile({ ...profile, plan: "pro" })}>{t("Go Pro")}</button>
        </div>
      )}

      <div className="lb-tabbar">
        <button className={`lb-tabbtn ${tab === "new" ? "on" : ""}`} onClick={() => setTab("new")}><Inbox size={15} /> {t("New")} {newBids.length > 0 && <span className="cnt">{newBids.length}</span>}</button>
        <button className={`lb-tabbtn ${tab === "accepted" ? "on" : ""}`} onClick={() => setTab("accepted")}><Bell size={15} /> {t("Pending")}</button>
        <button className={`lb-tabbtn ${tab === "jobs" ? "on" : ""}`} onClick={() => setTab("jobs")}><Briefcase size={15} /> {t("Jobs")} {wonBids.length > 0 && <span className="cnt">{wonBids.length}</span>}</button>
      </div>

      {list.length === 0 && (
        <div className="lb-empty-tab">
          {tab === "new"
            ? ((profile?.cats || []).length === 0
                ? <><Settings size={30} /><br />{t("You haven't added any services yet. Add the services you offer to start receiving matching bids.")}
                    <div style={{ marginTop: 16 }}><button className="lb-btn sm" onClick={() => setView("settings")} style={{ margin: "0 auto" }}><Settings size={15} /> {t("Set up services")}</button></div></>
                : <><Inbox size={30} /><br />{t("No new bids right now. New requests in your service areas will land here.")}</>)
            : tab === "accepted" ? <><Bell size={30} /><br />{t("Nothing pending. Bids you accept appear here while customers choose.")}</>
              : <><Briefcase size={30} /><br />{t("No active jobs yet. Win a bid and it shows up here with a chat.")}</>}
        </div>
      )}

      {list.map(b => {
        const di = dealIndicator(b.price, b.avg);
        return (
          <div className="lb-bid" key={b.id}>
            <div className="lb-bid-top">
              <span className="lb-avatar" style={{ background: b.color, width: 44, height: 44 }}><b.Icon size={20} /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="svc">{t(b.serviceName)}</div>
                <div className="cust">
                  <span><Tag size={12} /> {t(b.catName)}</span>
                  <span><MapPin size={12} /> ~{b.distance} mi · {b.zip}</span>
                  <span><Clock size={12} /> {ago(b.postedMins, lang)}</span>
                </div>
              </div>
              <div className="lb-bid-price">
                <div className="pp">${b.price.toLocaleString()}</div>
                {b.status === "new" && <span className="ind" style={{ background: di.bg, color: di.c }}>{t(di.t)}</span>}
              </div>
            </div>

            {b.fields.length > 0 && (
              <div className="lb-bid-fields">{b.fields.map((fld, i) => <span className="lb-tag" key={i}>{t(fld.label)}: {t(String(fld.val))}</span>)}</div>
            )}

            {b.status === "new" && (
              <>
                <div className="lb-payout">
                  <CircleDollarSign size={14} />
                  <span>{t("Customer pays you")} <b>${b.price.toLocaleString()}</b> {t("directly. LeadBid's")} {Math.round(payoutFor(b.price, profile).rate * 100)}% {t("success fee (")}${payoutFor(b.price, profile).fee.toLocaleString()}{t(") applies")} <b>{t("only if you're booked")}</b> {t("— accepting is always free.")}</span>
                </div>
                <span className="lb-locked" style={{ marginTop: 12 }}><Lock size={12} /> {t("Customer stays anonymous until you win the job")}</span>
                <div className="lb-bid-acts">
                  <button className="lb-btn ghost sm" style={{ flex: 1 }} onClick={() => setStatus(b.id, { status: "declined" })}><XCircle size={15} /> {t("Decline")}</button>
                  <button className="lb-btn sm" style={{ flex: 1 }} onClick={() => accept(b)}><Check size={15} /> {t("Accept")} ${b.price.toLocaleString()}</button>
                </div>
              </>
            )}
            {b.status === "accepted" && <div className="lb-statusbadge pending"><Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> {t("Accepted — waiting for the customer to choose")}</div>}
            {b.status === "lost" && <div className="lb-statusbadge lost"><XCircle size={14} /> {t("Customer picked another pro this time — no fee charged")}</div>}
            {b.status === "won" && (
              <>
                <div className="lb-statusbadge won"><CheckCircle2 size={14} /> {t("You won! Customer booked you —")} {b.customerFirst} {t("is ready to chat")}</div>
                <div className="lb-payout">
                  <CircleDollarSign size={14} />
                  <span>{t("Customer pays you")} <b>${b.price.toLocaleString()}</b> {t("directly on completion. LeadBid success fee:")} ${payoutFor(b.price, profile).fee.toLocaleString()} ({Math.round(payoutFor(b.price, profile).rate * 100)}%) → {t("your net:")} <b>${payoutFor(b.price, profile).net.toLocaleString()}</b></span>
                </div>
                <div className="lb-bid-acts"><button className="lb-btn sm" style={{ flex: 1 }} onClick={() => openJob(b)}><MessageCircle size={15} /> {t("Open chat")}</button></div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

function BizTop({ profile, onExit }) {
  const { lang } = useLang(); const t = tFor(lang);
  return (
    <div className="lb-top">
      <div className="lb-logo"><span className="mark"><Tag size={17} /></span>Lead<b>Bid</b> <span style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-soft)", letterSpacing: ".04em", marginLeft: 2 }}>PRO</span></div>
      <span className="lb-accountchip">
        <Building2 size={14} /> {profile?.name ? profile.name.split(" ")[0] : "Business"}
        <LangToggle />
        <button className="lb-logout" onClick={onExit}><LogOut size={12} /> {t("Log out")}</button>
      </span>
    </div>
  );
}

function BizSettings({ profile, onSave, onCancel }) {
  const { lang } = useLang(); const t = tFor(lang);
  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [zip, setZip] = useState(profile?.zip || "");
  const [radius, setRadius] = useState(profile?.radius || 12);
  const [bio, setBio] = useState(profile?.bio || "");
  const [years, setYears] = useState(profile?.years || "");
  const [cats, setCats] = useState(profile?.cats || []);
  const [logo, setLogo] = useState(profile?.logo || null);
  const [photos, setPhotos] = useState(profile?.photos || []);
  const valid = name && zip.length >= 5 && cats.length > 0;

  return (
    <>
      <button className="lb-back" onClick={onCancel}><ArrowLeft size={16} /> {t("Back to dashboard")}</button>
      <div className="lb-display" style={{ fontSize: 26, fontWeight: 800, marginBottom: 16 }}>{t("Account settings")}</div>
      <div className="lb-panel">
        <div className="lb-field"><label className="lb-label">{t("Business name")}</label>
          <input className="lb-input" value={name} onChange={e => setName(e.target.value)} placeholder="Summit Plumbing & Co" /></div>

        <div className="lb-subhead" style={{ paddingTop: 0, borderTop: "none", marginTop: 0 }}>{t("Contact info")}</div>
        <div className="lb-field"><label className="lb-label">{t("Email")}</label>
          <input className="lb-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" /></div>
        <div className="lb-field"><label className="lb-label">{t("Phone number")}</label>
          <input className="lb-input" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 123-4567" /></div>
        <div className="lb-row">
          <div className="lb-field"><label className="lb-label">{t("Service ZIP")}</label>
            <input className="lb-input" value={zip} maxLength={5} inputMode="numeric" onChange={e => setZip(e.target.value.replace(/\D/g, ""))} placeholder="33319" /></div>
          <div className="lb-field"><label className="lb-label">{t("Service radius")} <span className="lb-radius-val" style={{ fontSize: 15 }}>{radius} mi</span></label>
            <input className="lb-range" type="range" min="5" max="25" step="1" value={radius} onChange={e => setRadius(Number(e.target.value))} style={{ marginTop: 18 }} /></div>
        </div>

        <div className="lb-subhead">{t("Services you offer")}</div>
        <div className="lb-multi">
          {CATEGORIES.map(c => {
            const on = cats.includes(c.id);
            return (
              <button key={c.id} className={`lb-mchip ${on ? "on" : ""}`} onClick={() => setCats(p => on ? p.filter(x => x !== c.id) : [...p, c.id])}>
                <c.icon size={13} /> {t(c.name)}
              </button>
            );
          })}
        </div>

        <div className="lb-subhead">{t("Profile & work")}</div>
        <div className="lb-field"><label className="lb-label">{t("About your business")}</label>
          <textarea className="lb-textarea" value={bio} onChange={e => setBio(e.target.value)} placeholder="Family-owned, licensed & insured…" /></div>
        <div className="lb-field"><label className="lb-label">{t("Years in business")}</label>
          <input className="lb-input" type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="8" /></div>

        <div className="lb-field">
          <label className="lb-label">Logo</label>
          <div className="lb-upload-row">
            <label className="lb-logo-drop">
              {logo ? <img src={logo} alt="logo" /> : <span style={{ fontSize: 11 }}><ImageIcon size={20} /><br />{t("Add logo")}</span>}
              <input type="file" accept="image/*" hidden onChange={e => { const file = e.target.files && e.target.files[0]; if (file) readImageFile(file, setLogo); e.target.value = ""; }} />
            </label>
            {logo && <button className="lb-logout" onClick={() => setLogo(null)}><X size={11} /> {t("Remove logo")}</button>}
          </div>
        </div>

        <div className="lb-field">
          <label className="lb-label">{t("Photos of your work")} <span className="lb-hint">{t("— up to 6")}</span></label>
          <label className="lb-uploadbtn"><ImagePlus size={16} /> {t("Add photos")}
            <input type="file" accept="image/*" multiple hidden onChange={e => {
              const files = Array.from(e.target.files || []);
              files.slice(0, 6 - photos.length).forEach(file => readImageFile(file, url => setPhotos(p => p.length < 6 ? [...p, url] : p)));
              e.target.value = "";
            }} />
          </label>
          {photos.length > 0 && (
            <div className="lb-photos">
              {photos.map((src, i) => (
                <div className="lb-photo-wrap" key={i}>
                  <img src={src} alt={`work ${i + 1}`} />
                  <button className="lb-photo-rm" onClick={() => setPhotos(p => p.filter((_, k) => k !== i))}><X size={11} /></button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="lb-btn" disabled={!valid} onClick={() => onSave({ ...profile, name, email, phone, zip, radius: Number(radius), bio, years, cats, logo, photos })} style={{ background: "var(--ink)", boxShadow: "none" }}>
          <Check size={17} /> {t("Save changes")}
        </button>
        {!valid && <div className="lb-price-note" style={{ textAlign: "center", marginTop: 10 }}>{t("Add a business name, ZIP, and at least one service")}</div>}
      </div>
    </>
  );
}

/* ====================== SIGN-UP MODAL (shown when a guest places a bid) ====================== */
function AuthModal({ mode, initialTab, defName, defZip, service, price, onClose, onAuthed }) {
  const { lang } = useLang(); const t = tFor(lang);
  const [tab, setTab] = useState(initialTab || "signup");
  const [name, setName] = useState(defName || "");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState(defZip || "");
  const [pw, setPw] = useState("");
  const isSignup = tab === "signup";
  const isBidGate = mode === "bid";
  const valid = isSignup ? (name && email && phone && zip.length >= 5 && pw) : (email && pw);
  function submit() {
    if (!valid) return;
    onAuthed(isSignup ? { name, email, phone, zip } : { name: defName || "", email, zip: defZip });
  }
  const heading = isBidGate
    ? (isSignup ? t("Create an account to send your bid") : t("Log in to send your bid"))
    : (isSignup ? t("Create your LeadBid account") : t("Welcome back"));
  const cta = isBidGate
    ? (isSignup ? t("Create account & send bid") : t("Log in & send bid"))
    : (isSignup ? t("Create account") : t("Log in"));
  return (
    <div className="lb-modal-overlay" onClick={onClose}>
      <div className="lb-modal" onClick={e => e.stopPropagation()}>
        <button className="lb-modal-close" onClick={onClose} aria-label="Close"><X size={17} /></button>
        <h3>{heading}</h3>
        {isBidGate && service && (
          <div className="sumline">
            {t("You're about to broadcast")} <b>${Number(price).toLocaleString()}</b> {t("for")} <b>{t(service.name)}</b>{t(". An account lets pros respond, keeps your chats protected, and saves your bookings.")}
          </div>
        )}
        <div className="lb-auth-tabs" style={!isBidGate ? { marginTop: 18 } : {}}>
          <button className={`lb-auth-tab ${isSignup ? "on" : ""}`} onClick={() => setTab("signup")}>{t("Sign up")}</button>
          <button className={`lb-auth-tab ${!isSignup ? "on" : ""}`} onClick={() => setTab("login")}>{t("Log in")}</button>
        </div>
        {isSignup && (
          <div className="lb-field"><label className="lb-label">{t("Full name")}</label>
            <input className="lb-input" value={name} onChange={e => setName(e.target.value)} placeholder="Jordan Rivera" /></div>
        )}
        <div className="lb-field"><label className="lb-label">{t("Email")}</label>
          <input className="lb-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" /></div>
        {isSignup && (
          <div className="lb-field"><label className="lb-label">{t("Phone number")}</label>
            <input className="lb-input" type="tel" inputMode="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 123-4567" /></div>
        )}
        {isSignup ? (
          <div className="lb-row">
            <div className="lb-field"><label className="lb-label">{t("ZIP code")}</label>
              <input className="lb-input" value={zip} maxLength={5} inputMode="numeric" onChange={e => setZip(e.target.value.replace(/\D/g, ""))} placeholder="33319" /></div>
            <div className="lb-field"><label className="lb-label">{t("Password")}</label>
              <input className="lb-input" type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="••••••••" /></div>
          </div>
        ) : (
          <div className="lb-field"><label className="lb-label">{t("Password")}</label>
            <input className="lb-input" type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="••••••••" /></div>
        )}
        <button className="lb-btn" disabled={!valid} onClick={submit}>
          {cta} <ArrowRight size={17} />
        </button>
        <div className="lb-price-note" style={{ textAlign: "center", marginTop: 10 }}>{t("Demo only — no real account is created.")}</div>
      </div>
    </div>
  );
}
