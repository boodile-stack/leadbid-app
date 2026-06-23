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

/* How it works showcase */
.lb-hiw-nudge{ display:inline-flex; align-items:center; gap:7px; margin-top:18px;
  background:var(--card); border:1px solid var(--line); border-radius:999px; padding:9px 16px;
  font-family:'Bricolage Grotesque'; font-weight:700; font-size:13px; color:var(--ink); cursor:pointer;
  box-shadow:0 6px 16px -10px rgba(26,22,19,.4); transition:transform .15s ease, box-shadow .15s ease;}
.lb-hiw-nudge:hover{ transform:translateY(-1px); box-shadow:0 10px 22px -10px rgba(26,22,19,.5);}
.lb-hiw-nudge .arr{ color:var(--accent-deep); font-size:14px; animation:nudgeBounce 1.6s ease-in-out infinite;}
@keyframes nudgeBounce{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(3px);} }
.lb-hiw{ margin-top:40px; padding-top:30px; border-top:1px solid var(--line);}
.lb-hiw-head{ text-align:center; margin-bottom:20px;}
.lb-hiw-eyebrow{ font-family:'Bricolage Grotesque'; font-weight:700; font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:var(--accent-deep);}
.lb-hiw-title{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:24px; letter-spacing:-.02em; line-height:1.05; margin-top:8px; color:var(--ink);}
.lb-hiw-title .hl{ color:var(--accent-deep);}
.lb-hiw-stage{ display:flex; flex-direction:column; align-items:center;
  background:linear-gradient(160deg,#fffaf2,#f1e7d6); border:1px solid var(--line); border-radius:24px; padding:26px 20px 20px;
  box-shadow:0 1px 2px rgba(26,22,19,.04),0 20px 50px -28px rgba(26,22,19,.3); overflow:hidden;}
.lb-hiw-phone{ position:relative; width:200px; height:418px; border-radius:26px; overflow:hidden; background:#fff;
  box-shadow:0 20px 44px -16px rgba(26,22,19,.5),0 0 0 6px #1a1613,0 0 0 7px #2c2620;}
.lb-hiw-img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top center; opacity:0; transform:scale(1.04); transition:opacity .6s ease, transform 2.6s ease;}
.lb-hiw-img.on{ opacity:1; transform:scale(1);}
.lb-hiw-cap{ text-align:center; margin-top:18px; min-height:84px; animation:hiwIn .5s ease;}
.lb-hiw-step{ font-family:'Bricolage Grotesque'; font-weight:700; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--accent-deep);}
.lb-hiw-st{ font-family:'Bricolage Grotesque'; font-weight:800; font-size:19px; color:var(--ink); margin-top:5px;}
.lb-hiw-ss{ font-size:13.5px; color:var(--ink-soft); margin-top:5px; line-height:1.45; max-width:30ch;}
.lb-hiw-dots{ display:flex; gap:8px; margin-top:16px;}
.lb-hiw-dot{ width:8px; height:8px; border-radius:50%; border:none; background:var(--paper-2); cursor:pointer; padding:0; transition:.25s;}
.lb-hiw-dot.on{ background:var(--accent); transform:scale(1.25);}
@keyframes hiwIn{ from{ opacity:0; transform:translateY(8px);} to{ opacity:1; transform:none;} }
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
    id: "locksmith", loc: "mobile", name: "Locksmith", sub: "keys, lockouts, locks", icon: Wrench, color: "#b5651d",
    services: [
      { id: "carkey", name: "Car key replacement", typical: 230, fields: [
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
      { id: "aptlock", name: "Apartment / house lock replacement", typical: 165, fields: [
        F("count", "How many doors?", "number", { placeholder: "1", required: true }),
        F("type", "Lock type", "select", { options: ["Deadbolt", "Knob lock", "Mortise lock", "Not sure" ] }),
      ]},
      { id: "smart", name: "Smart lock installation", typical: 210, fields: [
        F("brand", "Brand (if known)", "text", { placeholder: "August, Schlage…" }),
      ]},
      { id: "safe", name: "Safe opening / repair", typical: 250 },
    ],
  },
  {
    id: "spa", loc: "fixed", name: "Spa", sub: "facials, aesthetics", icon: Sparkles, color: "#a8557a",
    services: [
      { id: "botox", name: "Botox", typical: 360 },
      { id: "lipfiller", name: "Lip Filler", typical: 600 },
      { id: "hydrafacial", name: "Hydra-Facial", typical: 225 },
      { id: "peel", name: "Chemical Peel", typical: 200 },
      { id: "microneedling", name: "Microneedling", typical: 320 },
      { id: "liftingfacial", name: "Lifting Facial", typical: 175 },
      { id: "rffacial", name: "RF Facial", typical: 300 },
      { id: "salmondna", name: "Salmon DNA Treatment", typical: 400 },
      { id: "morpheus", name: "Morpheus Treatment", typical: 1100 },
      { id: "bodycontour", name: "Body Contouring Treatment", typical: 650 },
      { id: "facial", name: "Facial (60 min)", typical: 110 },
    ],
  },
  {
    id: "massage", loc: "either", name: "Massage", sub: "relaxation, deep tissue", icon: Heart, color: "#7a6aa8",
    services: [
      { id: "m30", name: "30-minute massage", typical: 55 },
      { id: "m60", name: "60-minute massage", typical: 90 },
      { id: "m90", name: "90-minute massage", typical: 135 },
      { id: "deep", name: "Deep tissue massage (60 min)", typical: 115 },
      { id: "hotstone", name: "Hot stone massage (90 min)", typical: 150 },
      { id: "couples", name: "Couples massage (60 min)", typical: 200 },
      { id: "prenatal", name: "Prenatal massage (60 min)", typical: 110 },
    ],
  },
  {
    id: "ac", loc: "mobile", name: "AC Repair", sub: "HVAC service", icon: Wind, color: "#2b7fb0",
    services: [
      { id: "diag", name: "Diagnostic / service call", typical: 95 },
      { id: "repair", name: "AC repair", typical: 260, fields: [
        F("issue", "What's wrong?", "select", { options: ["Not cooling", "Won't turn on", "Leaking water", "Strange noise", "Frozen coils", "Other"], required: true }),
      ]},
      { id: "tune", name: "AC tune-up / maintenance", typical: 110 },
      { id: "recharge", name: "Refrigerant recharge", typical: 300 },
      { id: "install", name: "New AC unit installation", typical: 5500, fields: [
        F("sqft", "Home size (sq ft)", "number", { placeholder: "1800", required: true }),
        F("type", "System type", "select", { options: ["Central air", "Mini-split", "Window units", "Not sure"] }),
      ]},
      { id: "thermo", name: "Thermostat installation", typical: 175 },
    ],
  },
  {
    id: "grooming", loc: "either", name: "Pet Grooming", sub: "bath, cut, nails", icon: PawPrint, color: "#7a8c3a",
    services: [
      { id: "bath", name: "Bath & brush", typical: 50, fields: [ F("size", "Pet size", "select", { options: sizeOpts, required: true }) ]},
      { id: "fullgroom", name: "Full groom (bath + haircut)", typical: 85, fields: [
        F("size", "Pet size", "select", { options: sizeOpts, required: true }),
        F("breed", "Breed", "text", { placeholder: "Goldendoodle" }),
      ]},
      { id: "nails", name: "Nail trim", typical: 20 },
      { id: "deshed", name: "De-shedding treatment", typical: 70, fields: [ F("size", "Pet size", "select", { options: sizeOpts, required: true }) ]},
      { id: "cat", name: "Cat grooming", typical: 75 },
    ],
  },
  {
    id: "plumbing", loc: "mobile", name: "Plumbing", sub: "leaks, drains", icon: Droplet, color: "#2f6f8f",
    services: [
      { id: "drain", name: "Clogged drain", typical: 200, fields: [ F("where", "Which drain?", "select", { options: ["Kitchen sink", "Bathroom sink", "Shower / tub", "Toilet", "Main line"] }) ]},
      { id: "leak", name: "Leak repair", typical: 325 },
      { id: "faucet", name: "Faucet install / replace", typical: 250 },
      { id: "toilet", name: "Toilet repair / install", typical: 275 },
      { id: "wh-repair", name: "Water heater repair", typical: 350, fields: [ F("type", "Heater type", "select", { options: ["Tank", "Tankless", "Not sure"] }) ]},
      { id: "wh-install", name: "Water heater installation", typical: 1300 },
      { id: "disposal", name: "Garbage disposal install", typical: 250 },
    ],
  },
  {
    id: "electric", loc: "mobile", name: "Electrician", sub: "wiring, fixtures", icon: Zap, color: "#c79a1e",
    services: [
      { id: "outlet", name: "Outlet / switch install", typical: 200, fields: [ F("count", "How many?", "number", { placeholder: "2" }) ]},
      { id: "fan", name: "Ceiling fan installation", typical: 250 },
      { id: "fixture", name: "Light fixture install", typical: 200 },
      { id: "ev", name: "EV charger installation", typical: 1000 },
      { id: "panel", name: "Electrical panel upgrade", typical: 2800 },
      { id: "troubleshoot", name: "Troubleshooting / diagnostic", typical: 150, fields: [ F("issue", "Describe the issue", "text", { placeholder: "Breaker keeps tripping" }) ]},
    ],
  },
  {
    id: "cleaning", loc: "mobile", name: "House Cleaning", sub: "deep clean", icon: Home, color: "#3a8c6e",
    services: [
      { id: "standard", name: "Standard cleaning", typical: 175, fields: [
        F("beds", "Bedrooms", "number", { placeholder: "3", required: true }),
        F("baths", "Bathrooms", "number", { placeholder: "2", required: true }),
      ]},
      { id: "deep", name: "Deep cleaning", typical: 320, fields: [
        F("beds", "Bedrooms", "number", { placeholder: "3", required: true }),
        F("baths", "Bathrooms", "number", { placeholder: "2", required: true }),
      ]},
      { id: "movein", name: "Move-in / move-out cleaning", typical: 400 },
      { id: "recurring", name: "Recurring cleaning", typical: 140, fields: [ F("freq", "How often?", "select", { options: ["Weekly", "Bi-weekly", "Monthly"], required: true }) ]},
    ],
  },
  {
    id: "detailing", loc: "either", name: "Car Detailing", sub: "interior, wax", icon: Car, color: "#3b5b8c",
    services: [
      { id: "interior", name: "Interior detail", typical: 180, fields: [ F("vtype", "Vehicle type", "select", { options: ["Sedan / coupe", "SUV / minivan", "Truck"], required: true }) ]},
      { id: "exterior", name: "Exterior wash & wax", typical: 130, fields: [ F("vtype", "Vehicle type", "select", { options: ["Sedan / coupe", "SUV / minivan", "Truck"], required: true }) ]},
      { id: "full", name: "Full detail (in & out)", typical: 280, fields: [ F("vtype", "Vehicle type", "select", { options: ["Sedan / coupe", "SUV / minivan", "Truck"], required: true }) ]},
      { id: "ceramic", name: "Ceramic coating", typical: 700 },
    ],
  },
  {
    id: "salon", loc: "either", name: "Hair & Beauty", sub: "cut, color, style", icon: Scissors, color: "#b5476a",
    services: [
      { id: "wcut", name: "Women's haircut", typical: 65 },
      { id: "mcut", name: "Men's haircut", typical: 35 },
      { id: "color", name: "Color / highlights", typical: 150 },
      { id: "balayage", name: "Balayage", typical: 180 },
      { id: "blowout", name: "Blowout / style", typical: 55 },
      { id: "keratin", name: "Keratin treatment", typical: 250 },
    ],
  },
  {
    id: "handyman", loc: "mobile", name: "Handyman", sub: "repairs, mounting", icon: Hammer, color: "#9a6b2f",
    services: [
      { id: "tv", name: "TV mounting", typical: 175, fields: [ F("size", "TV size (inches)", "number", { placeholder: "55" }) ]},
      { id: "furniture", name: "Furniture assembly", typical: 120, fields: [ F("items", "How many items?", "number", { placeholder: "2" }) ]},
      { id: "drywall", name: "Drywall repair", typical: 250 },
      { id: "hang", name: "Picture / shelf hanging", typical: 110 },
      { id: "general", name: "General repairs", typical: 250, fields: [ F("desc", "Describe the job", "text", { placeholder: "Fix squeaky door, patch wall", required: true }) ]},
    ],
  },
  {
    id: "pest", loc: "mobile", name: "Pest Control", sub: "ants, roaches", icon: Bug, color: "#5c7a3a",
    services: [
      { id: "general", name: "General pest treatment", typical: 170, fields: [ F("pest", "Main pest", "select", { options: ["Ants", "Roaches", "Spiders", "Multiple / not sure"], required: true }) ]},
      { id: "termite", name: "Termite inspection & treatment", typical: 600 },
      { id: "rodent", name: "Rodent control", typical: 350 },
      { id: "bedbug", name: "Bed bug treatment", typical: 600 },
      { id: "mosquito", name: "Mosquito treatment", typical: 120 },
    ],
  },
  {
    id: "painting", loc: "mobile", name: "Painting", sub: "interior, trim", icon: Paintbrush, color: "#3a6b8c",
    services: [
      { id: "interior", name: "Interior room painting", typical: 450, fields: [ F("rooms", "How many rooms?", "number", { placeholder: "2", required: true }) ]},
      { id: "exterior", name: "Exterior house painting", typical: 3500, fields: [ F("stories", "Stories", "select", { options: ["1 story", "2 story", "3+ story"], required: true }) ]},
      { id: "cabinets", name: "Cabinet painting", typical: 1200 },
      { id: "trim", name: "Trim / door painting", typical: 400 },
    ],
  },
  {
    id: "wellness", loc: "either", name: "Wellness", sub: "PT, chiro, training", icon: Heart, color: "#b5476a",
    services: [
      { id: "pt", name: "Physical therapy session", typical: 120 },
      { id: "chiro", name: "Chiropractic adjustment", typical: 65 },
      { id: "pt-train", name: "Personal training session", typical: 65 },
      { id: "acu", name: "Acupuncture session", typical: 90 },
      { id: "nutrition", name: "Nutrition consultation", typical: 110 },
    ],
  },
  {
    id: "gardener", loc: "mobile", name: "Gardener", sub: "lawn, trees, beds", icon: Trees, color: "#3f7a3a",
    services: [
      { id: "mow", name: "Lawn mowing", typical: 50, fields: [ F("size", "Yard size", "select", { options: sizeOpts, required: true }) ]},
      { id: "hedge", name: "Hedge / bush trimming", typical: 120 },
      { id: "tree", name: "Tree trimming", typical: 350, fields: [ F("count", "How many trees?", "number", { placeholder: "2" }) ]},
      { id: "cleanup", name: "Weeding & yard cleanup", typical: 150, fields: [ F("size", "Yard size", "select", { options: sizeOpts, required: true }) ]},
      { id: "landscape", name: "Planting / landscaping", typical: 400, fields: [ F("desc", "What do you want done?", "text", { placeholder: "New flower beds out front" }) ]},
      { id: "sod", name: "Sod installation", typical: 600, fields: [ F("sqft", "Area (sq ft)", "number", { placeholder: "500" }) ]},
      { id: "leaf", name: "Leaf removal", typical: 120, fields: [ F("size", "Yard size", "select", { options: sizeOpts, required: true }) ]},
    ],
  },
  {
    id: "irrigation", loc: "mobile", name: "Irrigation", sub: "sprinklers, drip", icon: Droplets, color: "#2f86a6",
    services: [
      { id: "repair", name: "Sprinkler repair", typical: 150, fields: [
        F("zones", "How many zones affected?", "number", { placeholder: "2" }),
        F("issue", "What's wrong?", "select", { options: ["Head not spraying", "Leak / pooling", "Low pressure", "Controller / timer", "Not sure"], required: true }),
      ]},
      { id: "install", name: "New sprinkler system install", typical: 2800, fields: [
        F("size", "Yard size", "select", { options: sizeOpts, required: true }),
        F("zones", "Estimated zones", "number", { placeholder: "4" }),
      ]},
      { id: "tune", name: "System tune-up / inspection", typical: 90 },
      { id: "drip", name: "Drip irrigation install", typical: 400, fields: [ F("area", "Area / beds", "text", { placeholder: "Front flower beds" }) ]},
      { id: "backflow", name: "Backflow testing", typical: 100 },
      { id: "winter", name: "Winterization / blowout", typical: 75, fields: [ F("zones", "How many zones?", "number", { placeholder: "5" }) ]},
    ],
  },
  {
    id: "garage", loc: "mobile", name: "Garage Door", sub: "springs, openers", icon: Warehouse, color: "#6b6f76",
    services: [
      { id: "spring", name: "Spring repair / replacement", typical: 250 },
      { id: "opener-repair", name: "Opener repair", typical: 175, fields: [ F("brand", "Opener brand", "text", { placeholder: "LiftMaster" }) ]},
      { id: "opener-install", name: "New opener installation", typical: 450 },
      { id: "offtrack", name: "Off-track / cable repair", typical: 180 },
      { id: "panel", name: "Panel replacement", typical: 350 },
      { id: "newdoor", name: "New garage door installation", typical: 1200, fields: [ F("size", "Door size", "select", { options: ["Single car", "Double car"], required: true }) ]},
      { id: "tuneup", name: "Tune-up / maintenance", typical: 110 },
    ],
  },
  {
    id: "insurance", loc: "remote", name: "Insurance", sub: "car, home, business", icon: Umbrella, color: "#2f6f8f",
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
    id: "garbage", loc: "mobile", name: "Garbage Removal", sub: "junk, hauling", icon: Trash2, color: "#5c6b3a",
    services: [
      { id: "single", name: "Single item pickup", typical: 100, fields: [ F("item", "What item?", "text", { placeholder: "Old sofa", required: true }) ]},
      { id: "furniture", name: "Furniture removal", typical: 175 },
      { id: "appliance", name: "Appliance removal", typical: 150, fields: [ F("item", "Which appliance?", "text", { placeholder: "Refrigerator" }) ]},
      { id: "junk", name: "Full junk / haul-away", typical: 400, fields: [ F("load", "Load size", "select", { options: ["Quarter truck", "Half truck", "Full truck"], required: true }) ]},
      { id: "construction", name: "Construction debris removal", typical: 450 },
      { id: "yard", name: "Yard waste removal", typical: 175, fields: [ F("size", "Amount", "select", { options: sizeOpts, required: true }) ]},
      { id: "recurring", name: "Recurring trash pickup", typical: 45, fields: [ F("freq", "How often?", "select", { options: ["Weekly", "Bi-weekly", "Monthly"], required: true }) ]},
      { id: "cleanout", name: "Estate / full cleanout", typical: 700 },
    ],
  },
  {
    id: "towing", loc: "mobile", name: "Towing", sub: "tow, jumpstart, fuel", icon: Car, color: "#8c5a3b",
    services: [
      { id: "localtow", name: "Local tow", typical: 110, fields: [
        F("vehicle", "Vehicle type", "select", { options: ["Sedan / coupe", "SUV / minivan", "Truck", "Motorcycle"], required: true }),
        F("from", "Pickup location", "text", { placeholder: "Address or cross streets", required: true }),
        F("to", "Drop-off location", "text", { placeholder: "Shop or address", required: true }),
      ]},
      { id: "longtow", name: "Long-distance tow", typical: 300, fields: [
        F("miles", "Approx. miles", "number", { placeholder: "40", required: true }),
      ]},
      { id: "jumpstart", name: "Jump start", typical: 70 },
      { id: "tirechange", name: "Flat tire change", typical: 75 },
      { id: "lockout", name: "Vehicle lockout", typical: 85 },
      { id: "fuel", name: "Fuel delivery", typical: 75 },
      { id: "winch", name: "Winch-out / recovery", typical: 200 },
      { id: "flatbed", name: "Flatbed / luxury vehicle tow", typical: 175 },
    ],
  },
  {
    id: "moving", loc: "mobile", name: "Moving", sub: "movers, hauling", icon: Warehouse, color: "#b5651d",
    services: [
      { id: "studio", name: "Studio / 1-bedroom move", typical: 500, fields: [
        F("from", "Moving from (ZIP)", "text", { placeholder: "33319", required: true }),
        F("to", "Moving to (ZIP)", "text", { placeholder: "33324", required: true }),
        F("stairs", "Stairs / elevator?", "select", { options: ["Ground floor", "Stairs", "Elevator"] }),
      ]},
      { id: "2bed", name: "2-bedroom move", typical: 800 },
      { id: "3bed", name: "3+ bedroom move", typical: 1400 },
      { id: "labor", name: "Loading / unloading help", typical: 250, fields: [
        F("hours", "Hours needed", "number", { placeholder: "3" }),
      ]},
      { id: "singleitem", name: "Single heavy item", typical: 175, fields: [ F("item", "What item?", "text", { placeholder: "Piano, safe…", required: true }) ]},
      { id: "packing", name: "Packing service", typical: 300 },
      { id: "office", name: "Office / commercial move", typical: 1500 },
      { id: "longmove", name: "Long-distance move", typical: 2500, fields: [ F("miles", "Approx. miles", "number", { placeholder: "200" }) ]},
    ],
  },
  {
    id: "roofing", loc: "mobile", name: "Roofing", sub: "repair, replace", icon: Home, color: "#9a5b3b",
    services: [
      { id: "repair", name: "Roof leak repair", typical: 1200, fields: [
        F("roof", "Roof type", "select", { options: ["Shingle", "Tile", "Metal", "Flat / TPO", "Not sure"], required: true }),
        F("stories", "Stories", "select", { options: ["1 story", "2 story", "3+ story"] }),
      ]},
      { id: "inspect", name: "Roof inspection", typical: 175 },
      { id: "replace", name: "Full roof replacement", typical: 11000, fields: [
        F("roof", "Roof type", "select", { options: ["Shingle", "Tile", "Metal", "Flat / TPO"], required: true }),
        F("sqft", "Approx. roof size (sq ft)", "number", { placeholder: "1800" }),
      ]},
      { id: "gutters", name: "Gutter repair / install", typical: 450 },
      { id: "tarp", name: "Emergency tarp / storm damage", typical: 450 },
      { id: "coating", name: "Roof coating / sealing", typical: 1200 },
      { id: "skylight", name: "Skylight repair / install", typical: 700 },
    ],
  },
  {
    id: "windows", loc: "mobile", name: "Windows & Doors", sub: "install, repair", icon: Home, color: "#3a6b8c",
    services: [
      { id: "winrepair", name: "Window repair", typical: 250, fields: [
        F("count", "How many windows?", "number", { placeholder: "2", required: true }),
      ]},
      { id: "winreplace", name: "Window replacement", typical: 650, fields: [
        F("count", "How many windows?", "number", { placeholder: "4", required: true }),
        F("type", "Window type", "select", { options: ["Single-hung", "Double-hung", "Sliding", "Impact / hurricane", "Not sure"] }),
      ]},
      { id: "doorrepair", name: "Door repair", typical: 200 },
      { id: "doorinstall", name: "Interior door install", typical: 350, fields: [ F("count", "How many doors?", "number", { placeholder: "1", required: true }) ]},
      { id: "frontdoor", name: "Front / entry door install", typical: 800 },
      { id: "slider", name: "Sliding glass door install", typical: 1300 },
      { id: "screen", name: "Screen repair / replacement", typical: 130 },
      { id: "impact", name: "Impact / hurricane windows", typical: 900, fields: [ F("count", "How many openings?", "number", { placeholder: "6", required: true }) ]},
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

function makeBusinesses(cat, bid, typical, radius, locContext) {
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
      locContext: locContext || null,            // "home" = mobile pro, "business" = in-shop
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
  "Set Your Budget.": "Define tu presupuesto.",
  "Choose Your Business.": "Elige tu negocio.",
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
  "Locksmith": "Cerrajero", "Spa": "Spa", "Massage": "Masajes", "Towing": "Grúa", "Moving": "Mudanzas", "Roofing": "Techos", "Windows & Doors": "Ventanas y Puertas", "AC Repair": "Reparación de A/C", "Pet Grooming": "Peluquería de Mascotas",
  "Plumbing": "Plomería", "Electrician": "Electricista", "House Cleaning": "Limpieza del Hogar", "Car Detailing": "Detallado de Autos",
  "Hair & Beauty": "Peluquería y Belleza", "Handyman": "Mantenimiento", "Pest Control": "Control de Plagas",
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
// --- added: new categories, services, and location-matching strings ---
Object.assign(ES, {
  // category subs
  "facials, aesthetics": "faciales, estética", "relaxation, deep tissue": "relajación, tejido profundo",
  "tow, jumpstart, fuel": "grúa, arranque, combustible", "movers, hauling": "mudanza, acarreo",
  "repair, replace": "reparar, reemplazar", "install, repair": "instalar, reparar",
  // spa services
  "Botox": "Bótox", "Lip Filler": "Relleno de Labios", "Hydra-Facial": "Hydra-Facial", "Chemical Peel": "Peeling Químico",
  "Microneedling": "Microagujas", "Lifting Facial": "Facial Lifting", "RF Facial": "Facial de Radiofrecuencia",
  "Salmon DNA Treatment": "Tratamiento de ADN de Salmón", "Morpheus Treatment": "Tratamiento Morpheus", "Body Contouring Treatment": "Contorno Corporal",
  "Prenatal massage (60 min)": "Masaje prenatal (60 min)",
  // towing
  "Local tow": "Grúa local", "Long-distance tow": "Grúa de larga distancia", "Jump start": "Arranque con cables",
  "Flat tire change": "Cambio de llanta", "Vehicle lockout": "Apertura de vehículo", "Fuel delivery": "Entrega de combustible",
  "Winch-out / recovery": "Rescate con winche", "Flatbed / luxury vehicle tow": "Grúa de plataforma / vehículo de lujo",
  "Approx. miles": "Millas aprox.", "Pickup location": "Lugar de recogida", "Drop-off location": "Lugar de entrega", "Motorcycle": "Motocicleta",
  // moving
  "Studio / 1-bedroom move": "Mudanza estudio / 1 habitación", "2-bedroom move": "Mudanza de 2 habitaciones", "3+ bedroom move": "Mudanza de 3+ habitaciones",
  "Loading / unloading help": "Ayuda de carga / descarga", "Single heavy item": "Artículo pesado individual", "Packing service": "Servicio de empaque",
  "Office / commercial move": "Mudanza de oficina / comercial", "Long-distance move": "Mudanza de larga distancia",
  "Moving from (ZIP)": "Mudanza desde (C.P.)", "Moving to (ZIP)": "Mudanza a (C.P.)", "Stairs / elevator?": "¿Escaleras / ascensor?",
  "Ground floor": "Planta baja", "Stairs": "Escaleras", "Elevator": "Ascensor", "Hours needed": "Horas necesarias",
  // roofing
  "Roof leak repair": "Reparación de gotera", "Roof inspection": "Inspección de techo", "Full roof replacement": "Reemplazo total de techo",
  "Gutter repair / install": "Reparación / instalación de canaletas", "Emergency tarp / storm damage": "Lona de emergencia / daño por tormenta",
  "Roof coating / sealing": "Recubrimiento / sellado de techo", "Skylight repair / install": "Reparación / instalación de tragaluz",
  "Roof type": "Tipo de techo", "Shingle": "Teja asfáltica", "Tile": "Teja", "Metal": "Metal", "Flat / TPO": "Plano / TPO",
  "Approx. roof size (sq ft)": "Tamaño aprox. (pies²)",
  // windows & doors
  "Window repair": "Reparación de ventana", "Window replacement": "Reemplazo de ventana", "Door repair": "Reparación de puerta",
  "Interior door install": "Instalación de puerta interior", "Front / entry door install": "Instalación de puerta de entrada",
  "Sliding glass door install": "Instalación de puerta corrediza", "Screen repair / replacement": "Reparación / cambio de mosquitero",
  "Impact / hurricane windows": "Ventanas de impacto / huracán", "How many windows?": "¿Cuántas ventanas?", "How many openings?": "¿Cuántas aberturas?",
  "Window type": "Tipo de ventana", "Single-hung": "Guillotina simple", "Double-hung": "Guillotina doble", "Sliding": "Corrediza", "Impact / hurricane": "De impacto / huracán",
  // location matching UI
  "Where do you serve customers?": "¿Dónde atiendes a los clientes?",
  "— for services that can be mobile or in-shop": "— para servicios que pueden ser a domicilio o en el local",
  "At my shop / location": "En mi local / ubicación", "I travel to the customer": "Viajo al cliente", "Both": "Ambos",
  "Where do you want the service?": "¿Dónde quieres el servicio?",
  "At my home": "En mi casa", "At the business": "En el negocio",
  "Only pros who travel to you will get this bid.": "Solo los profesionales que viajan a ti recibirán esta oferta.",
  "Only pros at their own location will get this bid.": "Solo los profesionales en su propio local recibirán esta oferta.",
  "At customer's home": "En casa del cliente", "At your location": "En tu local",
  "Adjusted for local prices in": "Ajustado a precios locales en",
  "See how it works": "Mira cómo funciona",
  "Step 1": "Paso 1", "Step 2": "Paso 2", "Step 3": "Paso 3", "Step 4": "Paso 4",
  "Set your budget": "Define tu presupuesto", "The AI Coach guides you": "El Asesor de IA te guía",
  "Nearby pros get pinged": "Los profesionales cercanos reciben aviso", "Pros compete — you pick": "Los profesionales compiten — tú eliges",
  "Pick a service and name the price you want to pay.": "Elige un servicio y pon el precio que quieres pagar.",
  "See the local average and your odds, live as you bid.": "Ve el promedio local y tus probabilidades, en vivo al ofertar.",
  "Your bid broadcasts to matching businesses around you.": "Tu oferta se envía a los negocios compatibles cerca de ti.",
  "Compare who accepted by rating, then book & chat.": "Compara quién aceptó por calificación, luego reserva y chatea.",
  // new verified pro labels
  "Verified Massage Pro": "Masajista Verificado", "Verified Towing Pro": "Grúa Verificada",
  "Verified Moving Pro": "Mudancero Verificado", "Verified Roofing Pro": "Techador Verificado", "Verified Windows Pro": "Instalador Verificado",
});
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
const HIW_SHOTS = {
  home: "data:image/jpeg;base64,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s0NrpYGso4YuhbHjbTjGFqo+EtNL1N94uElFHC+GGnLmgRtc0t3IGX4B21Zx61RLQ8V0NXb3T6anpY2ROfE2nkLv3gy0tGMlpwcHlslNxVSVt4oqKlhnljq4JJhN0bg1pY4NLTkbEHIOeRAHaFHWcH0tYwg1MzSY4Ixs1zf3WrTlpBDgdZyDtsFfbOFae0y0L6aqnHVBM3Dg3EjZX6y04G2HAYxjlhT2ekV74mltfEVDbI4IpOstD/PeQ541YdpwMDQ3LyXYGBssu8X9lqmtpEZnhrZHM1RNdI7Ajc4aWtB1ZwPasK9cF0t7qaqSWsqIWVjWCZjGsOSwENLXEEt58gd9+8rPrrGayK36K6alnoDqjlhYwZOgs3aQRjB5YQ9IZOMLNHBDN1l745Y+m1Mhe4Rx50lz8DzACCN+49xU0vElujuDqISvMod0Wro3dF0mnUI9eNOojfGVgO4JpRStp4a+shY+A01SWuaTUsLnOOokbEl7924+EVkO4VpzXmVtVUMpTOKo0g09H0oaAHZxqxsDjOMjKHpLw9xBDfqCKRg/f9DHJMGAlkbnNzo1ciRnlzGRnmtrMzpIXt7xt4rUWLhmk4dAbQySNiMLI3xnGl7m7dIcD4ZGxxz27ltp5Ojhc7txges9ifT2MJp1NB7xlVVGjS0DuGFVc2xERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQGudG/WwgHkQeRWQKxuPOY9p9QyPwWOisTSUyetxdz/uFOtxdz/uFYyJykqGT1uLuf9wp1uLuf9wrGROUlQyetxdz/ALhTrcXc/wC4VjInKSoZPW4u5/3CnW4u5/3CsZE5SVDINYzHmse4/Vx71A97pXhz8bcmjkPzVESZsoREUUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEG5Hiicig4S28VXKousUQrYKuR9xkpZKFlNh8UIcR0mscsAA781nVHE9dS2a+1WIpJaS4mip9TcNaCWNaXY54LiSukoaCmt0D4aWPo43yPlcNROXOOXHf1qE2S3Opa2mfStfDXyOlqGOJIe44yfVyHLuQYcT7rb47lHX3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",
  bid: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAMUAXwDASIAAhEBAxEB/8QAHAABAAMAAwEBAAAAAAAAAAAAAAIDBQEEBgcI/8QAVBAAAQMCAwIICQkGBAQGAgEFAQACAwQRBRIhBjETFCJBUVNykQcVMjRSYXGSsTVVdIGUobPB0RYXY5PS4SMzQqIIQ2KyJCU3VHOCNoPwJkRFo/H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAOREBAAECAgYGCQQCAgMAAAAAAAECEQMxBBIhUXHBIjJSgaHRBRMUM0GRorHwFUJTYRZDBiM0YvH/2gAMAwEAAhEDEQA/APvqIuFzNwkNFybDpUmQzSC7WWHS42VlJCJDwrtWg2aPzXdVopupNTo8Un6Y+8pxOfpj7yu8itqwjWl0eJz+lH3lOJz+lH3ld5E1YNaXQ4nP6Uf3pxOf0o/vXfRNWDWl0OJTelH3lOJT+lH3ld9FGrBrS6HEp/Sj7ynEp/Sj+9d9E1YNaXQ4lP6UfeU4lP6UfeV30TVg1pdDiU/pR95TiU/pR95XfRNWDWl0OJT+lH3lOJT+lH3ld9E1YNaXQ4lN6UfeVxxGf0o/vWgiasGtLP4jP6Uf3pxGf0o/vWgiasGtLocSn9KP71xxGf0o/vWgiasGtLP4jP6Uf3pxGf0o/vWgiasGtLP4jP6Uf3pxGf0o/vWgiasJ15Z/EZvSj+9OIzelH960ETUhGtLP4jP6Uf3pxGb0o/vWgiakGtLP4jN6Uf3pxGb0o+8rQRNSE68s/iM3pR95TiM/pR95WgiakGvLP4jP6Uf3pxGf0o/vWgiakGvLP4jP6Uf3pxGf0o/vWgiakGvLP4jP6Uf3oaKcDQsPsJC0ETUg15ZDg5jsr2lrugotSWJs0ZY8acx5x61llpY9zHeU02KpVTZemq4llyiqssUXGzSpKDzyT7FZRoUwDaWID0QrVXB5vH2R8FYtYZCLhzmsaXOIa0C5JNgAvj21Phgq3VslNs62OKnjOXjUjM7pPW0HQD23J9S1w8KrEm1LHFxqcKL1PsSL87fvN2v+eHfyY/6U/ebtf88O/kx/0rp9ir3w5vb8PdL9Eovzt+83a/54d/Jj/pXpNmPDDWxVjKfaFsc9M82NTGzK+P1kDQj2WPtVatExIi+a1OnYdU2nY+yoose2SNr2ODmOALXA3BHSpLkdoiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLOrQBWX6WD4rRWdX+dt7H5qlWS9Oam6ldRC5WbVMqD/IPsVhCqk8k+xWZtODzePsj4KxVwebx9kfBWLSGbzHhGqpKPwe4tJE4te6MR3HQ5wafuJX5yX6G8KP8A6cYn/wDr/EavzyvW0PqTxeNp/vI4C5V1HR1GIVsNHSROmqJ3BjGN3uJXtgzAmYQdin1kPG3P4w7Eb/4LavcI7+hl5ObpXVVXquOijWeCRdivoanDK+airIjDUQOyPYeY/n7V11fNnMWfonwZ1UlX4PMMdK4udGHxAnoa8gfcAo+FDaKv2T8G+KY1hhiFZSiMxmVmdusjWm459CVV4Kf/AE6oe3L+I5U+GTDa7GPBNjNDh1JNWVcoiyQwsL3utK0mwG/QErwcX3k8X0mBN8OnhDZwLaBsng9w7aHGJ4oGvw+OrqZbZWNuwOcbcw36LyeFeHPZ3E8Uoqd+HYxQ0eIS8BSYhVUuSnmfe1g6+munxsvKxV+1W1Pg2b4P3bDYxhcrsNFK3EKrkQ54mAi+mgeWZd+mZebwrZ3EcQocC2erdjNr6irpZ4xO2sxCSKggDdOFjOrR0gAdIF9Fm2fUse8NmA4LjdfhsGG4vizsLNq6ahpw+Km6cziRu1vzaHVY2023dVW+EXwcvwHFpm4NjWaSWNnJbM240cCLgjUEc2q85iNHtttJjW1uF4xhe0BkldM2i4o4U2H8EA7KZC0B0pPJs27sxNjbVZDfB7jmNYX4M8MrsIxalghZUw18kcRY+la6ckFxI5Nx08xUj7dsr4RcI2yx3FMOweGrmjwx2SWtLG8Xe69rMde5J1O7cL9F+jtL4W9n9lcYxPDcQirTUYdTxVDuDja4S8I4Naxmty6557CwOqxvBhR7SbKbXY1sjXUc8uz9MOFw2v4o2Jh3XaXMABJDvbdpXWGzeIy/8UMuMzYVUOwxuGgR1bojwQlDABZ27NqVCGnX+G3A6XiMNLhWMYnXVVIytfSUdOJJKeNzQ4cJrYGxBsL/AHhd4+GDZc4Bg2MxvqZKPF6viTCGAGCTn4UE8kDntfpF1852n2ZxbZzwu43jc+F7TV2FYsxr4qjZ+d0crHAN5D8pva459NxHPbzm1uAy4V4L9nIZsDlwF9btCZuLVdS6odymBoe+4Bbe2rfr57Il9j2e8Muz20G1jNnxS4lQVNQC6lfW0/BMqRYkFutxcAkXAv7dFn1nh82ZpqqpMOHYxW4bSTcBPidPS5qaN17eVe57tea+i83iNPtRt94Ztna47J1uCw7PZnzzVQGR7gc2Vrxo5pIAFuYk6LzNXhW3G1mxePUuM4PtI/GWPdMY9IKCwc0hscTAOFkOtr3Ftb6C8j6RiG02GxeGmie3H8ce04Q6sbQwhpopY+De7Nq4HMQL7t4Gq0cE8M2zu0GNYHhdBTYg6oxiMytzRtAgby7cIc2hPBmwF+ZeAg2X2gPhA2frHYJXiCHZEUkkhhOVk3F3t4MnmdcgW9a9r4BMArcA8GUVPieGzYfXPqZXSRzxlkhFwGkg62sNEQ+mIiKAREQEREBERAREQEREBERAREQEREBERAWdX+dt7H5rRWbX+ds7H5qtWS1OaoLlcBcrJqmVCTyT7FYVVJ5J9iso04PN4+yPgrFXB5vH2R8FYtIZvI+FH/04xP8A/X+I1fnlfo3wjUslZ4PcWjiaXPbGJLDoa4OP3Ar85L1tD6k8Xjaf7yODf2Kraeh2phdUzimZNFLTic7onPYWtf6rE7/WoHYnaMYh4v8AE9S6W+UPDDwRG7Nn8nL67rDXbGK4iKLiYxCrFLu4HhnZPdvZdUxN7w44qptapq7a1cFVtIWU87altLTw0r52m4lexga5wPPrpf1Lz6IrUxaLK1Va0zL9BeCn/wBOqHty/iOXpcUxFuGUrJTBJUOklZCyOO13OcbDeQPvWD4M6WSk8HmGNlaWukD5QD0OeSPuIWxjmFnF6OGn5ORtRFK8OJF2tdcgEc68LF95VxfRYEWw6b7oQo9oqSrqXQPjlppWNkMgmyjgyxzQQSCR/raQRpYrvzVtLThxmqYYgwgOzyBuU2vrfdpqsDE9ljKOBw5lPT07qSaAg3GV7nNeHWsc1y3XW+t9UGA11XifHa5lI3NWxVJiY4vAayJzLXLRc5jfcsmzWqsboKWinqBURzinYJHshe1zg07ja/PdWHE6ZzYnU72VTJJhCXRSNIadd+vNbcNfUvNzbHTnBxSQcUZJxeqhcbENPCyte29hqABr9y7bNn6yXExXSR0dMeMQPMUBJblja8Zr2HKOfo0DRqg3I8RopmyOirKd4iGaQtlacg6Trop01XTVkZfTVEU7AbF0bw4X37wvG4js1Ph+ztOImQl9PQsppOCaTd3CxuzaNN2jK43IO/cdQtzZQN8VzERSMc6oe5732tK42Je2zW8nm3Dcfag3FjbRbJ4JtXDSxY1QirZSTCeEF7m5Hjn5JF/rWyilAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAs3EPO29j81pLNxDztnY/NVqyWpzVA6KV1EKVlk1SKhJ5B9isKqk8k+xWUacHm8fZHwVirg83j7I+CsWkM3Dmte0tcA5pFiCLghfHtqfA/VtrZKnZ10ctPIc3FZH5HR+ppOhHtsR619iRa4eLVhzelji4NOLFqn52/dltf8AM7v50f8AUn7str/md386P+pfolF0+217oc3sGHvl+dv3ZbX/ADO7+dH/AFL0mzHgerZaxlRtC6OCmYbmmjfmfJ6iRoB7Ln2L7KirVpeJMWyWp0HDpm+aLGNjjaxjQ1jQAGgWAHQpIi5HaIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICzq/ztnY/NaKzq/wA7b2PzVaslqc1QClZRCms2jkquTyT7FYVXJ5J9ilVpQebx9kfBWKuDzePsj4KxaQzF0a7F6ehlZBlkqKp4uynhbmeR023Aes2CnidaMNwuoqy3PwTCQ30nbgPrNgurhlAaGncZncLWTnPUS873/oNwHMAs6qpvq0ujDop1devL4Rv/APiHjLF3atwVoHRJWMB+4H4p4wxn5mh+2j+laCKurV2p8PJfXo7EfV5s/wAYYz8zQ/bR/SnjDGfmaH7aP6VoImrV2p8PI16OxH1ebP8AGGM/M0P20f0p4wxn5mh+2j+laCJq1dqfDyNejsR9Xmz/ABhjPzND9tH9KeMMZ+Zofto/pWgiatXanw8jXo7EfV5s/wAYYz8zQ/bR/SnjDGfmaH7aP6VoImrV2p8PI16OxH1ebP8AGGM/M0P20f0p4wxn5mh+2j+laCJq1dqfDyNejsR9Xmz/ABhjPzND9tH9KeMMZ+Zofto/pWgiatXanw8jXo7EfV5s/wAYYz8zQ/bR/SnjDGfmaH7aP6VoImrV2p8PI16OxH1ebP8AGGM/M0P20f0p4wxn5mh+2j+laCJq1dqfDyNejsR9Xmz/ABhjPzND9tH9KeMMZ+Zofto/pWgiatXanw8jXo7EfV5s/wAYYz8zQ/bR/SnjDGfmaH7aP6VoImrV2p8PI16OxH1ebP8AGGM/M0P20f0p4wxn5mh+2j+laCJq1dqfDyNejsR9Xmz/ABhjPzND9tH9KeMMZ+Zofto/pWgiatXanw8jXo7EfV5s/wAY4z8zQ/bR/SuPGWMD/wDw0P20f0rQKgVFqu1Ph5LRVR2I+rzdHxpjHzND9tH9KeNcX+Zofto/pXbKiVHS7U+HktE4fYj6vN1fG2LfM8P20f0p43xb5ni+2j+lXkqJKjpdqfDyW/6+xH1eanxvi3zPF9tH9KeN8W+Z4vto/pVt1zdRertT4eSbYfYj6vNV43xb5nh+2j+lcjaB9PysRw6eli55mOEzG9rLqB67WVoKmCpvX2vsiYw/jRHdM85n7NCORksbZI3tex4u1zTcEdIKksHDv/K8a4izSjrGuliZzRyN1e0dAIOa3MQelby2oq1ocmNh+rq2ZTtgWdX+dt7H5rRWdX+dt7H5q1WTOnNUFJcBSWbRyVXJ5J9isKrk8k+xSq0oPN4+yPgrFXB5vH2R8FYtIZsnaX5GtzGogH/+5i77vKPtXQ2k+Rh9Ip/xmLQPlH2rL988I5ur/TTxn7UorOqMcpaaVxkD+KMje+SrbYxMLXZSwm9819wAXfmkZDA+WQ2jY0ucbXsALnRfPKLC4doHPpsOpY6bDi4zFjLFsObXMTudO4HkjURNIO+yzxa5ptFOct9Hwaa4mqvZEfn5/wDIn2mEYzHjDajLTT00lPJwb45gAQSA4biRexFxvB0K7lTVU9HCZqqeKniBAL5XhrbncLlZ+zUc0OBxwz4aMNMb3tEIkz3GY2cTzk7yTqd/Os/avCa/G6ygo4aWGWhjEk05neWsLspYxulzcZnO3W0CnWqjDvnKPV0VY003tHHd5vQvnijdG18rGOlOWMOcAXm17DpNtVCqraWhiEtXUw00ZOUPleGAnouV5umw/F5qLZTjlMRUYdUHjRzA2a2N7A/frfknp1Xa2voKutp8MdSU805pqxszxCIy8NDHC4D+SdSN6j1lWrNViMGjXiiat/hM/e3i2hXUjqeOobVQOhkcGskEgLXEmwAO4klQGJ0BrjRCupjVA2MPCtz36Mt7rykOBYl+zMNNxAxyDGI6vI5zM5j4QOL3hpyh2/RumgsFViGA4jWVuMUrMJOasxGOpgxBzmBsLGiO7hrmvySAAOdUnFrtfVbU6NhTMxNf23x5+D3LnBrS5xDWgXJJsAFRSV9HXxOlo6uCpjabF0UgeAegkLpbVYdUYtsxXUVJl4aZgytc7KH2cCWk81wCPrWXJh9XiuGY3DT4KzBH1lIIGPe5okkfZwsQwkBoBAB36laVVzFVohhh4VFVGtNVpv8A1sy27/j8Nz0NJiFFX5+J1lPU8Gcr+Bka/Keg2OinDVU9S+VkFRFM6F2SQMeHFjug23FeXw6jr48WGKQ4G7DhSYaaYU+aO9RLcFoGU2yjLoTbyl19lsBxrBcSidUQwtjrKMsqZYZC4tnDi8PeDbU53DS+4KkYtV4izSrR8OIqmKssovHf+f3Z62HEKKoqpKWCsp5aiL/MiZI1z2e0A3C5bW0r2QvZUwubO7LEQ8ESHXRvSdDu6F5jZjDazDzhVHUYBHFLQMkZNiDnsIdfnjIOZxebE5gLarp4PszjFJDs26eWd7aSrfJLSuEeSnaRJZwIFz5Q5zvSMWrZ0fzZ5+CatHwomenlw257uEfPhf3SLlF0OFwi5RBwi5RBwi5RBwi5RBwi5QoIFQKmVAqsrQgVEqR3KJVZawgVAlTKgVSWkOLoColchQsmCphQCmFaFJdSq+WsG+kP/Bet9YFV8tYN9If+C9b6vhfu48oZaTlRw5yLOr/O29j81orOrvO29j81rVk5qc1YClZRCks13JVcnkn2KwquTyT7FKGlB5vH2R8FYq4PN4+yPgrFpDNk7SfIw+kU/wCMxaB8o+1Z+0nyMPpFP+MxaB8o+1ZfvnhHN1f6aeM/alwq4YIaaIRwRRwxgk5Y2houTcmwUnvbHG57jZrQXH2DVdHDcZhxTIYKatZHIwSMklp3MY4G1rE9N1azO/waCIikEXRxrGKPZ/BKvFsQe6OkpIzJK5rC4hvqA1O9d0EOaHDcRdLDlEXRwzGKPFzWike53Eap9HNmaW2kbbMBfeNRqlkO8iIiREXVkxCKPFYcPdHOZZonyteInGMBpAIL9wOugOp1Sw7SKqonbTU0kz2yObGLlsbC9x9gGpKtGptzlARUUdZDX0jKmnJdE+9iRY6Ejd7QVegIic1+bpQETciAiIgIqp6mGmMQmkDDNIImX/1ONyB9xXFJVw1sJlgcSwPfGbi2rXFp+8FBciIgiVAhWFQKrK0KyoFWEa2UCRfeFWWkSrIUSFaQoWVLLxKuy5AUWTNfPLEGvBiDSXFpDTfoO47tehW2UWWu4AUwFwApgK0KzLpVfy1g30h/4L1vLBqx/wCc4N9Jf+C9byvhZ1ceUM9Iyo4c5FnV3nbex+ZWis+u87b2PzK0qyc0ZqwpKIKldUWCq5PJPsVhVcnkn2INKDzePsj4KxVwebx9kfBWLSGbJ2k+Rh9Ip/xmLQO8+1Z+0nyMPpNP+MxaJ3n2rL988I5ur/TTxn7UqalhkpJmNF3OY4AesgrzQ2amZsjBR5quWocymZLFJVOc1oa9heG3NhYA7l6lzg1pc4gNAuSTYAIx7ZGNexwc1wuHA3BHSFdk8nimASioq4qPDWv4SONlBPG9rG0RG/S4LeVyuSDmvYqUuzRqMSdUzUbXl+KmV7i4cqnMdrHXVpcByfuXq1FsjHlwY9rspymxvY9B9aIeL2l2exKu8EWL4FSU3CVs0M0VPDwgFwZSWC5NhybbysHbHDdqNr6TC3v2ZqqaloJn8PQSTU05qA6OzJA0vDDlN9HEEZrjcvqiEgC5IAS5Z8P2m2E2vqsPw+Ckw99XU0eGU8dPWPliNRHMx5c5r5C8ZSBYB0YObW5W7g+xu0GHeEibHammFZhs2LVTo6Vz2jirZGty1bdeUSWlpB5QB0G9fSsRxGkwnDajEK+dlPS0zDJLK82DWjeVUMbwvxZBiJxGlZR1IaYp3zNax+bdYk2JPQpvKLPLYrsc/GPCZLi9TTB1PBhUcdFO592xVTZXuDsl9S0FpBIXzKp2QxzZ3we4/NilNU0zzRQU854WJsVXNxmMmTMxxe5x1/xHAGzrW0X3ubEaKnq4KWasp4qio/yYnyta+TstJufqUX1mHVFY/DJKillqcoe6lc9rn5eYlm+3rslx8ok2Mx5uC4zHRbMso8PrMSppI8IlnZUOjjY0iaVgLxGXOdlOVzrEAki66UWwW142VfQvoniVmF4tSRR8Yjs0yzRugYLOsBlDrczbW00X218jI8ud7W5iGjMbXJ3AetBIwyOjD2l7QCW31AO42+opdNnlqzBsP2a8HVbRUMDKOMwlzhnN3SuAuS4m5cT3qZwis8d8JxI8Y8YcY8Y8ILCC/wDl783k8jLa3OvTSRxytyyMa8Ag2cARcbipKCzxWF4FWQcUaMKdSzxcYNRUCdo4djg/KwEEnUlp1Fm5dFr7LUFTh9PUQy0vF4czeCztY2R3Jsc2Qlp5uVoTrcLeREvEx7MV1Pg8EVHCKaqkw18NS4SAF8mZhAcb6mweAea6t8TVYw1zGYe8wyVTXvppIoeQ0MIzMjDsmpte59drr1rKiGR+Rk0bnEE5Q4E2BsT9R09qsRDyWB7PVDamgfilK14paeRrQ9wcGO4cuZYA20Za3RuXZ2lppZMSo4qWTJJiTXUMwDrEReWXj1tAcP8A7r0iqnlp4A2WeSKMXytfIQ3U8wJ6ehB5p+DVQxdzmUN5uOxzRV4e0CKBuW8dr5hyQ5uUCxzXVVKzEcLZRSVGHSiLC6epa54laRM5xGQNAJOvrAsSvVzzw00fCTyshZcNzPcGi5NgLnnJICrlxCihroqKWsp46uYExwOlaJHgby1pNz9SDNx/DnV8eGzOoGVL6aqZK+PkkhtiHAF1gdSD67LPptnqinqKephhEFW6rq3Szhwvwb+EyX11Fyw25u9eqUXyRxhud7WZnBozEC5O4e1B5vZXCKrD5nPqYZoHCBsUlxGGSvBuX8kkuO/lOsTddR2BVtVtHwk9C2OCWadtRJGGAPhexzW8q5e4+SSCAAdw0Xr2SMkYHxva9p3FpuFJB46TA8YnwuSSrHCVQlhidGC13C08VxuccpLiS8tJ6AVbQ7PF9VhxrKV76aFtQ8xzZLROc9hYMrSRbRxA1svWKJChMPBVOHYnST1Ve+lFIGwVZnliyMDszSWEOBL3bgbuGh3Bdajw01VO9tPC0zskgkqaWOGMNdGGODbAvc15zcogu1tu6fohCohipoS+KnZDHY3eyMBtiekBQtZ5nEqSSk8HdVA9sgeIzZkjmtc0GQENu3QAXsLHQexUvwKWollbHhhoqGSppnGlMjdcjncI+zSQAQWjfc2uV657GvaWuaHA7wRcJZVXeXrcGnFbKYqIS0DZKY8WY5oEsbGPBaASBoS02NgbLq1+CVc7afg8PkjphTvjZTsdHI6neXk5gXkBptbVt8trDReyslkTZXEwsiY1zi8taAXHedN5VgC5suQEsXdCtH/nOC/SX/gvW4sSuH/nGC/SX/gvW2pw86uPKEaR1aOHORZ9d523sfmVoLPrfO29j81pVk5oVhSsohSVFwquTyT7FYVXJ5J9iDSg83j7I+CsVcHm8fZHwVi0hmydpPkcfSaf8Zi0TvPtWdtJ8jj6TT/jMWifKPtWX754RzdX+mnjP2pdeuJGHVJbqRE8jS+uU8y8vR4lVxYnhUT6mR7JYKdppom5C0uZynFpZZzb7y1wy2tZevS56SrsXktrcXrKCd4pJp4pIacTMZcBszsx0Dcji8gDUXAAI9qoiq5abHK1lPWzipkxUBtHwXIljdkD3Xy3Nm5jmvplt7faXI3Epc9JQeNbieJyPLYauokxB/GG1FHwQy04a1/BlummoYASTmzd3WxXFJMawqqbBV1DoIqGnmkMbLf4nCHPe7d4A1HNZe719a5uekoPDeE1mHT7GUpr6qripmVcEzK6KnFSyBzbuZLMw6OiuNdOcbt68BW41gT9haKXE9n6KTEHvrKPDBFSSMw97HuAdWmMtORpvfcXHUN0N190mhjqIJIZo2yxSNLHscLhzSLEEc4IUo2NijbHGMjGgNDW6AAbgpuiz8+4nRULKSvoI458UxGtoMKh2drTSvc+URWa5zHFv+GQ8FzrkaHVbNJSx/t5BRNoZBtPHtXNXT1HF3BxoSx9ncLa3Blha0C+/Sy+13PSe9cXNrXNlNyzoVEFLj2C5GyEw1DQ6OVoIc03u14vqCCAR7F5ijmnhoqCtxCulohijX1FZVxMDTwgDRHHqDlaG5rDnI9evtkuekqqXiZ9ocRpcJqDWSyw1ktBFJTN4GxdJmeHEC2htkJHNdb2DcbnrMRqKirnexlVLDFCQAxrARY7rk79brYuekog8vJVV0VBi1dLW1hyVb6eKNgY1sTM7QHXLTu1u43sL6Lo02M1skEbKrEJqeibWyRPrGAOdkEbXMGcsAsXEjNl1sBz3Xtlzc9JQfP6OsrKPDI5oHS8mGaV0nF7PLeOjMSLXF2Fxt9dl3q7HJ521s9LiJipWVgbG7WMSM4Bps2TI4DlEkXFnbrr2Nz0lc3PSe9Bh4nX1LdnqSpjdPTNmdDxiQxjhYY3eU4ixAI0B00uTzLJjE+JYhhbn1lVPSw4jI2CYgDhWCBxzHk62dmaHaXHevYpf1oPCeFfB6eu2eo64wSS1dJiFGIi177NBqY812A2OnOQbepeP2xpWO2z2ipJaGWXaKvxHDpcGnFO5xETDHmLJALMDS2Uu1G/1r7Wlz0lTcswcfkrnYjFDS1k9LHxSonJiaDme0syakHpOnOsyOqxIS0TJ6iWpE3Eal3CRNIY573B4bydBoPWOlexTVQPn0eJ11Lh1NTw1PEoo21HLJLLziZ3IdyHXsCDl0vfnW5DiNYzayOnnqXSiSzTBDoIv8O5LmuZctzA2eHc4BC9Nc9J71xc9KDArpMSdjOImlqJ8tJRsmgp2tGWWU8JoTa5HJboCFk02MV3impldXvnj/wWmRsgL4Xuccxc4xAMba1xYlvqXtVzc9J70HiKbGKyWkhFbiE9JSCoqI3VbG3c7KGmMFxYNDd2uUZsoHPrzIayGrxHEYKuoDmcROXgQwTXADi5pF9xOgtZe2uekri3rQeMpsSxSTFqmN9YIZGGoD4HAvMbG5uDc2MM7JvmOa59QGlsxWTVdLUNmmkqXRPaOGLw9j7tBOV2Vp37wRcE2uvQa9JXB136qtloV2SynZc2Sy10LLkBSsubKbIuzcQ+WMF+kv8AwXrZWPiI/wDN8F+kv/BethRh51ceULY3Vo4c5Fn1vnbex+ZWgs+t87b2PzKvVk54QCkohSVF3BVcnkn2KwquTyT7EGlB5vH2R8FYq4PN4+yPgrFpDNk7SfI4+k0/4zFpHefas3aT5HH0mn/GYtI7z7Vl++eEc3V/pp4z9qVVTKYKSaUAExsc8A89hdYNPjGL1EGGs4GhjqsSjM7LueWRsDGkg87nXcN1ha/QvQvY2RjmPAc1wIIPOCurUYVQVdHFSz0kUkENuDYRoywsLdGmnsV2LEZtZJJhdbV8Xia6moRU5S8kF+eRhF+dt49Dz3XMmP1s+NTUMEMQiilfFIcry9jWx5jJmHJAJs228E/UNWpwHCaxsTajDqaRsLOCYDGLNZ6Nuj1LpM2ZDMafXNqy1skxme1rSHPu22RxDspb/wDW+m9BisxnFG7PUkFSWNklpKWojmikdntwsbXBxO8nNvHSQt1mNzvxrxXwEYqW1Dw8XNhAG5hJ7Tma3ovfoXelwfDpqcQSUUL4hDxcNLdBHcHL7LgdwXEGGMhxeoxAuzSSxRwNGW3Bsbc2vz3JJ7kHhvCThTqqvw+lw3FsYpcbxqZtNA2mxCWOKGNgzSzGMG3JZf2uc1ewxKsq6CXDKGhEUklU50QfUuccobGXXNtXHTdzruuw2jdijMSdTRGtjiMDZy3ltYSCWg8wJAP1KjE8Gp8WnpHVQD46Zzn8G5tw4lpbv5rXvcKSzMpMexGuq6amip6Vji2Z1Q5znOAMUojdktvvqRfcoQ7R4g+np5+J08gxCmknpI45CHAtAcGvJ01BGotY6etb1Ph9JSmI09NFFwMfBMyNtlZcHKPVcAqlmB4XG6dzMPpwahpbL/hizwTci3QTqR0qBVhGJyV1BNJK0OngeWPjZG6NwNgQC1+oNiOcjUG6n40n+Z8Q92P+tdmjoaaggMNLAyGMnMQ0bz0npV6DpmpqJ8PqHx08lLM1pyCpAte178lx0XlabFcajho6oSQ1D24MKuVsjnBr7EHcP9RGl93qXtl04cIw+niMUVHCxhjdDlDdMhNy32XO5BkHaSqlxMxUtA6WCN0LZAI3uceEa1xIcBlAaHDfvsd2i7WN4vU4XUwlsUYpLZpp3hzgzUCxy6tFrnMQRou4/BsOkq4al1FAZ4QBG8t1aB5PdzdClV4XQV8sctVSRTyReS57bkC97esX5jogwavbB9DVzRT0zMtK+VtS4OPI38D7/wAVbFtDiT8SFOcPzCF8MNQGRyOIc9rXOIdbKA3ONDqbHdotqXDKGczmWkhkNQWGXMwHhCzyb9NuZcS4VQT4gyulpIX1TLZZS3lC27u5uhB59m0eJV1LPJT0nBxPimdFKYn2iLL2LnHkuvY+TuNhqtGCtxGLY+mq+DZV1roI3WFxmzW1te5Njew3kWG9d6HCMPgrJaqKihZPKCHvDdXX39/P0rkYVQjDRh/FIuKAWEJF2jW4t0a9yDGix7Ea2elpqFtC6WSGaSR0vCMDXRvDS3KRmB5Wt93r56/2pqqmgkrqSlgbDTUcdZO2aQ5nBwccrCNNA08o6E2WhNsvhk9VA6SlidTwQvibAWcm7nBxdfffTXpubrt1GDYbVyQvnoYJHQANjLmDkgbh7B0bkHTwWqrqnFcXFRLG6CKZjYWhpBYDEx1te1r678yycOxDFW4rU0+eCWqq6yaNj5HScHGyIC4Db+sWAtzkk2XqWUdPHWS1bIWtnmAbJIBq8DddUz4Rh9TC6Kajiex8hmILf9Z3u9vrQZOG49X4rXwQQ09NEwQ8LO5z3OsRK+NwZbeDkJBK7OKYvU4ficEZijZRODc872ucA5zsuUlvkc1i4WJNrhaUFDS0zmugp44i2MQtyNAswG4b7ASVCowuhq6qOpqKSKWeO2V7m3Isbj22OovuQeepMWxpjTETSVE9Ric1LGX5mtja0PPNqQMosPvXbOO1rah8hgpjSQ1jKGQZnCUvcWtLhzWzOGh1I1utZmGUUdS6oZSxtmdJwxeBrnylub22JF/WuHYVQPxEV7qOE1TbWlLeVcCwPttpfepGBFtVXx0TKyqo6cxTU1RPEyJ7swMR3EnTlDo3etaeA4lWYlxp1SyIRRua2KSON7BJybuNn66E2+o+wXVuB0dXhjqJkbYG8E+KNzGi8Yf5VgennUcGwh2FCcGp4RspaRG0ObHHYW5Ic5xF+fW2g0UDTSyIiXFlzZEQLIiIM3EvlfBfpL/wXrXWRiXyvgv0l/4L1rqtGdXHlDTG6tHDnIs+t87b2PzK0Fn1vnbex+ZV6snPCAUlEKSou4Krk8k+xWFVyeSfYg0oPN4+yPgrFXB5vH2R8FYtIZsnaT5HH0mn/GYtI7z7VnbSfI4+k0/4zFonyj7Vn++eEc3TPuaeM/alXNI2GB8rr5WNLjboAusYbU05o6aoNHVM44M0Eb+DY6RmUOLtXAAagakG53LZmibPBJE4kNkaWG2+xFlm1Oz9NUUlFC2WWJ9Czg4pQGOdlyhpBDmlpvYc28K7JGn2loqutpqambLMamJkzXtygBrr2NiQTuN7A251XS7VUdQIpJKeqpaeYSGOeZgDH5AS4aEkaNJ1AuAbK6bAIJ6ikfJU1Do6V0b2xnIRmYbh18t2k8+UgFdLCNlxDQU0eJTzVHAtkApy8GJhfmDiLAE8lxAuTa5soFz9qqWGmfNPSVsFomzRsfGM0rHODQWgE87m3BsRcaLmbammgjPC0tTHOJ+LmB+Rrg7Jn3l2XVpBGuu7euf2Yp3x5Kisq6ktjZFG6Rzbxsa9rw0WAvctbcm5NgrazAIat1W4VM8Rq3h8oaGOa7kBli1zSCLNB150EajaWhpq/isjZGlpjbI85QInPtlBBOa+ovYG1xdXYdjMGKVFRHBFKBA5zC92WxIcWkWBJabjc4C41VEWzNJT1cU1PLNEGNja5lmPEmQBrblzS4aAA2IvZXUmCxUuKvxA1E88zmGNpky8lpcHWuAC7UC2Ymw3IK3bSUEdcykk4WOV9RJT8pujXMaHEk30BBbY/wDUF0abaxr6uZ8lNUGiy0z2yCMf4QlGhfr0kbr2G9dvENlsPxKavlmMzX18TIpCx9suU3Bb0E2Fz/0hXTYDSTMq2XkY2r4IODSAGiO2W2nqQdCHaExVcxq5m8VhgqJXv4LKQY5yy1rm+gt69+m5aeF4xBirpo42Pilgy543lpIDr5TdpI1sefmK6smzFFK5+eSYskZPHIy4s9srzIea4s46Efeu5huGjDo5G8YknLzcue1jbabrMaAgyanawOwOoxCgopphE9jRmLLG78utnXBHQbHUaKx2NVPjhtM0jKaiSNzHxgOZanEgFwTfU7/q9am7ZWlkZV8NVVMslVG2IyuLQ9oa7M3UNGYg87rlXnAIDWNqjUT8MJ+Hc7k8smIROBFtxaObn3IOIcaEOydLi1aLmSCJ7xGABmeB0mwFzvJsOcris2ihoqCKrlpKjg5GuedY+QG79S+zukBpNxuV8OEinwOLDY6yoa2FoYyW7c4A3A6WItpYjUb1nv2NoH0zIWzzstHLE9zQzlNkdmdYFtm6nTKBZB3RtBRF5Y0SOfw0ULWhur+EAc1w/wCmxJv/ANLuhZ8G1kMdDHJNFVVOWnbUzTRQhrWRl7m5iM3NlOgubarSjwKjjxKjrhwhlpIOAYCeSQBYOI53AFwB/wCorrs2Yoo6CekEk/Bz0oo3EuFwwF5uNN/LP3IJO2igGJCjZS1Ml5nU4laG5C9rC9w1N9AOjU7lqQS8PTxy5Hx8I0OySNyubcXsRzFeapsDxCm2nnrGMiayed7nzHI4iNzbANNs4dcDeS3TosF6WCMw08cbpHyljQ0vfbM6w3m3OUE0RFIIiICIiAiIoBERSCIiAiIoBERSM3EvlfBfpL/wXrXWRiXyvgv0l/4L1rqlGdXHlDTG6tHDnIs+t87b2PzK0Fn1vnbex+ZV6smEIBSUQpKi7gquTyT7FYVXJ5J9iDSg83j7I+CsVcHm8fZHwVi0hmytpPkcfSaf8Zi0T5R9qztpPkcfSaf8Zi0T5R9qz/fPCObpn3NPGftS4REV2QiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIM3EvlfBfpL/wAF611kYl8r4L9Jf+C9a6pRnVx5Q0xurRw5yLPrfO29j8ytBZ9b523sfmVerJhCAUlEKSou4Krk8k+xWFVyeSfYg0oPN4+yPgrFXB5vH2R8FYtIZsraT5HH0mn/ABmLSPlH2rN2j+Rx9Jp/xmLSPlH2rP8AfPCObpn3NPGftS4RF5HGfCHhWE7SUWG8apHxPc5tXKZTemIGlwAQbnT1K7FpbVbY4HsVhjK/HKs00Mj+Djyxue57rE5QGg62B3r5HsX4ecc2r8JFBgjsNw+HDq2oexrg1/DNYGuc25zWzaC+lt6+j7ebCYf4TsBoaaXE5aenim4zHLS5X57tLd50tqvzR4IoxD4bMCiBJEdXIwE89mPH5KYhF33/AMKvhcp/B42noaWjbX4vVR8K2N7i2OJl7BzyNTcg2A6DqF8hPh/8Ikkbq9lLQija6xcKB5iHqL835r0f/ELsBjNfjUO1OHQ8Zo20rYKgNeA6EtLiHWJFwQ7m5wo4J4e9nMO8GdNgc2A1b6unohSGBrWcXlIbluTfcd50vqd6mB67wU+Gpm3eIuwXFaKOhxXgzJE6FxMU4HlAA6tcBra5uL9C9D4S/Cbh3g6wqJ8sJrMRqr8WpGuy3A3vceZouPWToPV8b8AGwOMS7XUm1dRCKfC6ON5jeXi8z3MLQAAbgAEkk25l57w6V82K+GTEqdzzlpRDSRA/6RkBP+55KWLtt3/EH4QJGuxGPDaBtA1+UkUUjogfRMmbf9a+veC3wsUXhEp5qaWnFBi9K0Plpw7Mx7N2dhOtr6EHUXG+69fR7OYbSbKxbOiljOGspxSmEjkuZaxuOk6m/SV+TvBjNLs54csLponmzK+Sgf8A9TSXM17gfqTMfsVEG5FVIiIgIiICIiAiIgIiFAusfEtqsGwmcw1dcxsw3xsBe4e0Dcq9rsVlwjZqpqYDlmNo43eiXG1/qF18XLi5xc4kkm5JNySvN0zTJwJiimNr6D0V6Jp0ymcTEm1MbNj69+8DZ3/3cv8AIf8Aon7wNnv/AHcv8h36L5Ai4P1LG3R+d72/8e0XfV848n1/94Gz3/u5f5Dv0T94Gz3/ALuX+Q79F8gRR+pY26PzvP8AHtF31fOPJ9f/AHgbPf8Au5f5Dv0T94Gz3/u5f5Dv0XyBE/UsbdH53n+PaLvq+ceT6/8AvA2e/wDdy/yHfon7wNnv/dy/yHfovkCJ+pY26PzvP8e0XfV848n1/wDeBs7/AO7l/kO/RWQbdbPTyiMV+QncZI3NHeQvjiKY9J4u6PzvRP8Ax7RbbKqvnHk/QbHtkYHscHNcLgg3BCkvnngzxaZ5qcLkcXRxt4aK/wDp1s4D1ag96+hhe1gY0Y1EVw+R03RatExpwpm9mbifyvgv0l/4L1rLJxP5XwX6S/8ABetZaUZ1ceUMMbq0cOciz63ztvY/MrQWfW+dt7H5lXqyYQgFJRCkqLuCq5PJPsVhVcnkn2INKDzePsj4KxVwebx9kfBWLSGbK2j+Rx9Jp/xmLSPlH2rN2j+Rx9Jp/wAZi0yNT7VnHXnhHN0z7mnjP2pQdbKbnKLb+hfKcMwvGNnsMq6amwXDdqcInkeTPTvaZXcxHPcj1XsV9YLQ4EEXB0IPOvnVXsFXYbjNNSbP4jilHg9Y97qtsMzQ2DTTKDrru59FeWL0Hg/qcKqdkaYYPHPDTRPcwxTvzPY+93An67/Wvy94KP8A1zwb6bN/2yL9aYBgNFs5hMeH0DXCJhLi55u57jvJPSvnGy/gEoNmNtKTaKLHquokpZnzCF8DA1xcHC1xr/qUwiXyHw+Y1iGI+FKtw6slk4lhwjZTw35LQWNcXgbiSSdfUAvqWH7P+AyTZaOoz4K6n4IF0s9URUXtrflZg71Ab16zb/wS4B4QHR1NYZqPEYmcG2rp7Zi3ma5p0cBrbnF96+bO/wCFv/Hu3az/AA+k0PK/71KHzzwYYxLgvhlw+PAJ5zh9ZXmlLHacNTucQM45yG2dfmIWh4f8HqMJ8K9TX5CIsSijqYX8xc1oY4fUWjvC+47A+BfZ/YSuGJMlnxLE2tLWVFQABEDocjBoCRpc3K9HtlsRgu3WDeLsYgc4MOeGaM5ZIXdLT8QdDzpdLIw/ws7KVGxEe0M+L0sQbCHzU5lHDNkA1jyby6+g0137l+evA/h1TtT4aqOv4M5KeeTEqgjczUkD63OAX0A/8LdNxvMNqpeAvuNE3hLdF81vuX1fYjYDBNgcKfR4RC8vmIdPUynNLMRuuega2A0F0HpRuRc2SyqOEXNksg4Rc2SyDhFzZLIOEXNksg4Q7lzZcFEvIeEU/wD9KPH8eP4lfKV9V8Iv/wCLO/8Amj+JXypfOekffdz770D/AOJ3zyTiglncWwxvkc1peQ0XIAFyfqXbpMPa+ikrquQwUrbtYQLumfbyWjntzncB67Lq09RNS1DJ4JHRSxnM17TYgq6vxGoxKoEtQW8luVjGNDGMHQ1o0AvquGnViLzm9muMSZtTsjf8XOE0QxLF6Sic8xiolbGXAXtfnXbp8EFRS4vK2V2fD3MaxuUf4hdJk16F0KKrkoK+CrhtwkEgkbfdcHnWtW7RU0lFVQUOFNpDXSNkqXGZ0mezs2UDTKLrTD9Xq9LPb9tniwxvX68Rh5Tbds27fnG7wVVOzFfTVUVKH009RJKITFFMC9jyL2INu/d6118TwWowtkUkklPNDK5zGywSZ25m+U0nmIWxLtq8GldT0bg+nmEzTUTmbLYEFjSRcNIPOSs3GsbbisUUTIZ42Ruc8maqdMSTzC9gAPZf1rTEpwIidWdrHBr0uaqYxKbR8cvPhv5tKLY8R4nT0s9ZFNw9I+oAp5AXBwbmH/1OmvPqurDs1NCXOqGx1MT6OWpjkp6gZeRa5vY3seb71Nu1LGy0lR4vHGYKQ0j5BKbSNy5Wm1tCN/rVdJtM6lwqnohSh3A01RTZ89r8KQb2tzW3c6vfR/zu/riytpttu35f+22LTw+brVmz9XQUQqJ5aUOyNkdCJhwrWu3HLz/Veyy1vVG0rJtn3YY2jeMzGsvJUGRkeX/UxpF2k+2ywVzYsURMaku7R5xZpn10Wm/h4vYeDU22iqPox/7mr6o06L5V4N//AMhqPo5/7mr6ozcve9He5fFenv8Ay54Qz8T+V8F+kv8AwXrWWTifyvgv0l/4L1rLuozq48oeNi9WjhzkWfW+dt7H5laCz63ztvY/Mq9WTCEApKIUlRdwVXJ5J9isKrk8k+xBpQebx9kfBWKuDzePsj4KxaQzZW0fyOPpNP8AjMWmd59qzNo/kcfSaf8AGYtM7z7VnHXnhHN0z7mnjP2pE+orrYgHnDKoRhxeYX5Q3ffKbW9a+eUuHYtS7IYjTTxVQmeKORkbGzPaW3bnO8uzeUHtBHkjpV2L6Z9RReGkpoxR4WKumrJcJbw/Dx00FQz/ABSRkLmEmTLbN6rkHoUq6BpdQeMaPGpcLFERFGDI+Zk2bTPkN82WwaTu1vqiHt0Xz6Sl2pjraGpjbUS1jMMippml3IL5HPDnk7i5hyONtbX6VRBRY9h9Pgk1HDW1M+Gw1JMUjnDh/wDGDQ1xOly05hfo0RL6Rr0FPqXzGTC8TpsOoqar41OIq+q4WSSKeUOBbo4tjIcWl17a2Xax6lxpr8RqMNjq5Kd1DTU/AsD23BzctgOuZptcb7E31CD6In1FeIEFV+1lS+CnxBtYcTY4TWkEHFcjM4JPII8qwGt1n0VJWNwXHhwNTx59PUhg4CobIbyHLZ5OR2lrZQCg+jp9S87svG+OrrTBDWQYYRFwDKvODwljwhaH8oN8nfz3svM0tNirMYxZzIK0iRle11mTNGriYjmccruhoYARfnRD6R9SL55NTV/HXmOmxPxlxWjFHIwSCNjwDwmc+Rb0g74r6HzoCIiAiIgIiIC4K5REsLafCjjGB1FI0gSOAdGTuzA3H6fWvjNRTy0tQ+CeN0UrDZzHCxC+/vbcLMrsJpK63GaWGa27OwGy87S9D9fMVRNpe96M9KzodM4dUXpl8PRfYHbL4Xf5Opv5YUP2Xwz5vpv5YXn/AKbXve5+v4PZl8iRfXf2Xwz5vpv5YT9l8M+b6b+WE/Tq95+v4PZl8iRfXf2Xwz5vpv5YT9l8M+b6b+WE/Tq95+v4PZl8iRfXf2Xwz5vpv5YT9l8M+b6b+WE/Tq95+v4PZl8iRfXhsvhnzfTfywu1S7P4dTyiSKgp2PG5wjFwpj0bXvVq/wCQYURsol57we4FPRxzYjUxmN07QyNjhY5b3ufabdy960aKuOPKrgLL2sDCjBoiiHyWmaTVpWLOLV8WZifyvgv0l/4L1rLJxP5XwX6S/wDBetZXozq48oY4vVo4c5Fn1vnbex+ZWgs+t87b2PzKvVkwhAKSiFJUXcFVyeSfYrCq5PJPsQaUHm8fZHwVirg83j7I+CsWkM2VtJ8jj6TT/jMWmRqVmbSfI4+k0/4zFqc5WcdeeEc3RV7mnjP2pcWSy5XDnNaLuIA6SVoxEsq+MQ9a3vTjEPWt71FxZZLKvjEPWt704xD1re9LixLKvjEPWt704xD1re9LiyyKvjEPWt704xD1re9LiyyWVfGIetb3pxiHrW96XFlksq+MQ9a3vTjEPWt70uLLJZV8Yh61venGIetb3pcWWSy4a9j/ACHB3sKkpHFksuVWaiEGxlZ3qBOyWVfGIetb3pxiHrW96XFllEtUeMQ9a3vTjEPWt70HPBhccGE4xD1re9OMQ9a3vTYm8nBhODCcYh61venGIetb3psLycGE4MJxiHrW96cYh61vemwvJwYTgwnGIetb3pxiHrW96bC8nBhSDLKPGIetb3qTZo3mzZGk9F0Ly5AXNlyilDKxP5XwX6S/8F61lk4p8sYL9Jf+C9ayzozq48obYvUo4c5Fn1vnbex+ZWgs+t87b2PzKvVkwhAKSiFJUXcFVyeSfYrCq5PJPsQaUHm8fZHwVirg83j7I+CsWkM2VtJ8jj6TT/jMWpzlZe0fyOPpNP8AjMWpzlUjrzwjm6Kvc08Z+1LhxDWlx3AXKjFFmAlkF3nUA/6fUFxP5tJ2T8FeNwWkRtYSIiK6oiL5y3ayY+EB7eMVJw9jQTBrybnKHHmy63t//wAWOLjU4Vtb4r0UTXez6MiytpcUnwfAJq2mjZJMx0bWte0uHKe1u4anytwXn37X4oaKmDKeEVMldLSPtTyvIDWF4PBA5wSANNdDda3Vs9qi8tX7RYlQ4pSxSwwQ0bmQ555IZMrnvdZzbi/BEaWzjUm1wu3RYhi821lZh0xouK00bJbsY8SOa8vDRcm1xk16bpcs3kXk8Z2nxLDcRxJ0UFLJQ4Y2B8rX5hLIJCQcpva4toCNV2cMx2vrtpa+jeyNlJSTPiBFPIb2Y03Ml8gPK3b0uWejReJpNvX1mB45WxR0zpaGPjFO1ryQ6I3Dc/Q7km49YXtQbgXSJuWcoiKUK5IWyajkvG5w3hRjcXsu4WcNCPWrl14t8nbKpMJgy8PK4O/y2aW9I+tdgAAWAAHqVNP/AMztlXK0QSIiKUCLOra4xziLJKGBwuQ0gv0vZqvr6t9Jg9TVtZy4YXShj+kNJsbLGjGpxKqqafgvVRNMRM/F2kXiKTbXEX4TUyz0tOKoCl4AFr4WkzuyguDrnID/AKhvsRouzLtRiVK6pw+WGkfiMdZBSMlbmbCeFbmDiLkiwvpfXTXVa3hWz1yLxlXtpV4XRPfWUsc8tLiBo5uLNc4SDgTICwbwfJBBvbVa1ZjNXRbDzYw4Us1SylNQBESYibXAB3kbtef1Jcs3UXjsU2wq8K2chq5OKyVc8zmsbJFJTNyNaXO0fyr2BA5iSF2MZ2oq6OWknpY4Rhk0DZ3VUsb3s5RFmuLL8GMuuYgjuKXgs9SiwG4ji52ydhZNFxQQipzBj+EyFxblve17i97LfUoFF7GyNs5ocPWpIgoZeOQxEki12k77dCsUJPOmdh3xCms7LMrFPlfBfpL/AMF61lk4p8r4L9Jf+C9aypR1quPKG+L1KOHORZ9b523sfmVoLPrfO29j8yrVZMIQCkohSVF3BVcnkn2KwquTyT7EGlB5vH2R8FYq4PN4+yPgrFpDNlbR/I4+k0/4zFqHeVl7R/I4+k0/4zFqHeVnHXnhHN0Ve5p4z9qVc/m0nZPwV43BUT+bSdk/BXjcFrS55ERFdAvISeDrD5K5lSa2szMbkbywcrb6gaadF/z1Xr0WdeFRidaLrU1TTk69dQ02JUb6SshbPBJbMx242Nx94C6DtmsDnpG0fEKd0UMhlDRvDyLFxIN7kaXKs2jrazD9nK2rw+Dh6qKMujZlzXPTbnsLm3qXz7ZLEpzjkNRRbQ0dXPiMrXYjSVMIgeDaxyekR0DevSwNCnHwqsW9rcePd3/HY4MfTIwcWnCtn+d/d8H0GXZ3CJqmCokoIXSwNa1jiOZvkg9Nua97LuspII6yWqbE0Tytax7wNXBt7A+zMe9eLwDaDGX7d4zR43NDBT0lNwoiZbJGLts7Nv8AJNzcrH/arHqzaTDa6GrkgwjEcRFPTwGNvLiaWguuRfUn4rWn0ZiTVNN42RE3+G2L2j+7MqvSOHFMTac5i3x2Ta/C76BUbP4TVYmMQqKCGWqGW0j23PJ8n1acyfs7hXHpqziUYqJw4SPFwX5hlN9ecaLy9TX45tJthieF4XiniqlwxjQXtiD3SSHpvzb+5auwmP1WP4A99eG8cpZnU8rmiwcRbW31rHE0KvDw/WTMfC8fGL7YbYemU4mJ6uIn42n4TbNqyYDhcsXBPoYSzi/FcuXTgtOR7NAr6DDqTC6YwUcIhiLi7KCTqfauyi4nYIiICoi3ydsq9URf8z/5Cq1JhzT/APM7ZVypp/8Amdsq5TGRIiIpQq4u01PDu5TwLNvuaOeylNFHPC+GVgfHI0tc07iCLEKa6ONVNVRYHWVNFBw9TFE58cdr5nAaac/sU0Yd6tWn4yiuu0a0/B16bZ3BIKWoooaCm4KZoZNHbNmaNwN9bDm6FNmzuER4ZJh7aCHisrs72EXzO9Ik6k6DXfoF842axWqfjUVfS7Q0c2JYhIxuIUVVAKc2AtZp5yNwtvW7tI/aeOfFcQmxlmCYbRtvSBoY/jBsdDzgkjd69y9Sv0ZNGLGHNcRs+N425Wta87ctm2NrzaPSMV4c4kUz3Wyzve9o2Z/3seup8Dw2kgghgo4o2U8pmjAHkvIILr85sTqelSbhGHtwp2GNpYxROa5pgA5FibkW6NV5KOs2tx/ZvA5KWVmHiqa59bVhrczGg8khp6QL6dI3BZ+F7YYnh+D7SSz1bcXhwtzWU1WWBokc42sbbwDY/nqFSPRtcxOrVEzE2t36vDP+722rT6QoiY1qZiJi9+6/HLx2PoclFTS1UVTJCx80LXMY8i5aHWuB7bDuXQk2XwSVtM1+GwObTNEcQtoGg3DfWL62Oi8ZJiu0uztPguM4hiwr6bEZGMqKYwtaIw8XGUjoH3hfSVz6Ros4FpvExN9sf1nnZ0YGkxjXi0xMW2T/AHlkp4nTiuNZwTeMGPgjJbXLe9vZc3VyIuV0iIiCmTzpnYd8QpqEnnTOw74hTVJzWZeKfK+C/SX/AIL1qrKxT5XwX6S/8F61VnRnVx5Q3xepRw5yLPrfO29j8ytBZ9b523sfmVarJhCAUlEKSou4Krk8k+xWFVyeSfYg0oPN4+yPgrFXB5vH2R8FYtIZsraP5HH0mn/GYtQ7ysvaP5IH0mn/ABmLV51SOvPCOboq9zTxn7Uqp/NpOyfgrxuCpqPNpOyfgrhuC1hzyIiKyBERB08Xop8QwmopaasloppG2ZPF5TD0rwVPs1jm0OMMhxh9NFHhNQw8aZSuZNVWF7h53jpPSvpK6MGLRTYiaPgZ43EPLHyMs2QNIDrc+hI3gX5rrswNMr0emaaIjblNtsOTH0SjHqiar7Phvefm2LfXbVY1W1kzeI4nStp8sbiJBbLfeLf6Vl4j4LWPqMNFBiVWKenkvKJ6glzGaf5VhZp3/cvc+MaLhZo+NwB8AzSt4QXYOcnoUDi+HCKKU19MI5jljdwos484C0o9JaRRMatWUW8LfZSv0fgVxOtTnN/G/wB3l6zZbG8N2hqcU2crKVvHYmxzx1gJ5TRYPBG86X9pK2NktnRs1ggpHTcYnkkdNNJawc877erQLSOJ0LZJmOrKcOgF5QZAMg9fQqhjeHOmpomVkT3VTnMiyOzBxbvFx0LLE0zExMP1dWWzjNsrz/TTD0TDw6/WU/3wi+duLvoiLkdQiIgKiL/mf/IVeqIf+b2yq1JhzT/8ztlXKmn/AOZ2yrlMZEiIilAutiNLJW4bPTQ1MlJJKwtbNH5TDzELsoppmaZiYRMRVFpfMzsxj20GIHC8XmphBhskbuPilcJqgWvyXnfbcT09K7eMbGbR4ltPLiT6rDKynY8mmgrOEcyJvNyALX717OsxWOkrYaXgZppZRmAZl0FwNbkdPNfcr6itpaR0baioihdKcrA94bmPquvT/VMWKr0xEWi2W/P5vO/TcKYtVMztvnuy+Txu0OzO1ePYXRUz8RoI8gdxqJheyKXlckaC9su8XXYotlcUn2ercDxQ4XBQzRBsLaCNzSx975jm36ge1en8Z0PCzRmsgD4Bmlbwguwc5PQuBiuHlkLhXU5bUHLEeEHLO6w6ddFl7fi6kURaIibxsym92nsOHrzXN5mYtO3OLWeMh2O2hrzhdFjdfRPwzC3tewQNdwk2UWbmvoNNP/5de+XQnxzDKeOpe+ug/wDCsL5WteHOYAbG4Gu/Rd2ORk0TZI3B7HgOa4biDzrHH0mvHtrW2btmebbA0ejAvq3279qSIi5nQIiIKZPOmdh3xCmoP86Z2HfEKyypOazKxT5XwX6S/wDBetVZWK/K+C/SX/gvWqs6OtVx5Q3xepRw5yLPrfO29j8ytBZ9b523sfmVarJhCAUlEKSou4Krk8k+xWFVyeSfYg0oPN4+yPgrFXB5vH2R8FYtIZsraP5IH0mn/GYtXnWVtH8kD6TT/jMWrzqkdeeEc3RV7mnjP2pV1Hm0nZPwVw3BQIBBBFwVWyTgQI5TYDRrzuI/VaRsc69FDh4utZ7wTh4usZ7wVroTRQ4eLrGe8E4eLrGe8EuOvU4bTVVQ2eQSCRosHMlcw26NCNFRSYbVQ4vU1s9TFOJeS0cEWujZzMBzEW5zpqfYF3+Hi6xnvBOHi6xnvBNiWDU7LyVdZPPLiDnB4kEYLCcuZ7Hi4LrEAsAsALjfrqr34JVvnbUccgE7mPjlPFgWFrnA6NzaHTeSb8+4LX4eLrGe8E4eLrGe8E2G15ms2UkNPXcBMyR04k4IPabs4SQPdclxaRpuDRfS60IcEmZXMrH1bHT8YdPJliytcDGI8oF7jRoN7nW61uHi6xnvBOHi6xnvBNhtTRQ4eLrGe8E4eLrGe8EuhNFDh4usZ7wTh4usZ7wS4mqIf+Z2yuXVDTyYrSP9W4e0qUbODjDb3O8npKiZS4p/+Z2yrVQSYZC8AljvKtqQelTFRCRcSs94JEkrEUOHi6xnvBOHi6xnvBTdCapqqSGtg4Gdpcy97BxGv1KfDxdYz3gnDxdYz3glxjYjs42sYyOOVjWZDG500fDSgE3uyQm4d7bjceZWY7gcuMtaxta6njyOY5uUkG5BvoRrpuNxruWrw8XWM94Jw8XWM94JsTtYz9npZIKinNXGIHvfLF/gAuY50gk5RvyhmG6wuN6qqtmH1tRHPUVUTpC0smaInNY5pfm0AeNfWc19/Mt7h4usZ7wTh4usZ7wTYbXno9mqiojqG1VSyNjzViNscYzN4ZztS6+uhvaw137l6GFr2wsbI5rnhoDnNFgTzkC5snDxdYz3gnDxdYz3gmwTRQ4eLrGe8E4eLrGe8EuhNFDh4usZ7wXBqIgP8xpPQDcn6kvA4f50zsO+IU1XGHOe6R4sToG9A/VWKqWVivyvgv0l/wCC9aqysV+V8F+kv/BetVZ0darjyh0YvUo4c5Fn1vnbex+ZWgs+t87b2PzKtVkwhAKSiFJUXcFVyeSfYrCq5PJPsQaUHm8fZHwVirg83j7I+CsWkM2VtH8kD6TT/jMWrzrK2j+SB9Jp/wAZi1edUjrzwjm6Kvc08Z+1Ii4JsCbE26FwH3cBlcLi97aK7nMjPQb3JkZ6De5ccJyM2R++1rarnNy8uV2697aIGRnoN7kyM9BvcuOE5GbI/fa1tVzm5eXK7de9tEDIz0G9yZGeg3uXHCcjNkfvta2q5zcvLlduve2iBkZ6De5MjPQb3LjhOQHZH77Wtquc3LLcrtBe9tEDIz0G9yZGeg3uXHCcgOyP1NrW1XOblluV2gve2iBkZ6De5MjPQb3LjhOQHZH6m1rarnNyi3K7QXvbQoGRnoN7kyM9BvcuOE5IdkfqbWtqFzm5RGV2gve2hQSGgsNAihwnJByP1NrW1C5zcojK7TntoUElwWtJuWg+0KPCclpyP1NrW1C5z8pwyu057aH2IGRnoN7kyM9BvcuOE5LTkfrzW3e1c5+U4ZXac9t/sQMjPQb3JkZ6De5cZ9GnI/lerd7Vzn1cMruT6t/sQMjPQb3JkZ6De5cZ9GnI/lerd7Vzn1cMruT6t/sQMjPQb3JkZ6De5cZ9GnI/lerd7Vzn1dyXcn1b/YgZGeg3uTIz0G9y4z6N5D+V6t3tXOfyuQ7k+rf7EDIz0G9yZGeg3uTP5PIfyvVu9qZ/K5DuT6t/sQMjPQb3LkADcAPYFxn8nkO5Xq3e1M/lch/J9W/2IJIoh1yBlcLi+oUkGVivyvgv0l/4L1qrKxX5XwX6S/8ABetVUo61XHlDoxepRw5yLPrfO29j8ytBZ9b523sfmVarJhCAUlEKSou4Krk8k+xWFVyeSfYg0oPN4+yPgrFXB5vH2R8FYtIZsraP5IH0mn/GYtXnWVtH8kD6TT/jMWrzqkdeeEc3RV7mnjP2pERcEgC5IAWjncooPljiidLI9rI2guc5xsABvJKppMRoq+nbPR1kFTC52USRSB7Sei450ReMnZRERIiIgIiICKJexr2sLmhzrkAnU23oyRj75HtdYlpsb2I3hBJEXDnBrS5xAAFyTuCDlFRTV1LV0TaunqI5adzcwka4Ftum6m+ohjmjifNGySW+RjnAF3sHOgsRVtqIXzvgbNG6WMAuYHAubfdcbwpB7XOcGuBLTYgHcd6CSKsTxGHhhKwx2vnzDL3qxAREQEUc7OE4PM3OBmy31t02UkBFQ6upGwOndUwiJrsheZBlBva172vdSp6qnq2F9PPFM0GxMbw4A/UgtREQERVCpgNrTRm4BHLGoJsO86ILURRa9r75XB1iQbG9j0IJIuLgc65QEREGVivyvgv0l/4L1qrKxX5XwX6S/wDBetVZ0darjyh0YvUo4c5Fn1vnbex+ZWgs+t87b2PzKtVkwhAKSiFJUXcFVyeSfYrCq5PJPsQaUHm8fZHwVirg83j7I+CsWkM2VtH8kD6TT/jMWrzrK2j+SB9Jp/xmLV51SOvPCOboq9zTxn7UoSucyF7mMMjw0kNBAzHouV5yowfHsSp3Q1tbSOp623GIHRB4pgNQIiRyjzXdz8oeivTLr1lfTYfEySqlETJJGQtJBN3uIa0adJIC0cddMVR0p2PP4hgFLhng8qcGFPV1tI1jmcFTf52RzyeTfeWg/Xb12XlIoK6plw2okZWcTpMWYRV09EaV07XREGR8Qbe4dZmewBBO5fU071N2VejxVMWm1uT580Y/FsyyvqK/Fi+ornR1TWMvJT0wlkF42Bt7kZLnU5dQqGHaWuihjNbi1PA2mrZIpRHkllDXt4DhOTo4i+lgSBu3r6QiXR7P/wC0vl0WN4xXbV4fT1mKy0LQKMysc8wsJdGHPjLQ3V7nkDVwtut0/UVnTYBhdRiQr5aKJ9SHNfnN9XN8lxG4kcxIuLLRUSvg4dVF9abiIiN2PtPTzPwd9XRgivorzUzmszHNaxFucEEghY88VdhE/EqOSsHAti4mxkWZlS4m8rpHWOpNybkWBuF7BFCXj6jFMWNPLTw8c41BBXF54A2zA/4NjaxNrEW3rYxKiaNmKmmqn1ta17LSOYA6UgkXIAABtvtbcLWO5bCIPGGEYvsXi7OLMqY2h7qeaGB0PGjwY5eTnN9Og23KG0FPNJj0snASmTLTCCNtO6TjGR+YgSD/AC7E2Oo01XtQAAABYDoXKF3kcLpnNx2lYKSVlVT1FW+qmMRaHse52Tl2s692EAE2y81lxK+sp9pq40765s0tdAY4mwXgljyRiRznZeYB2txYgW9fr0Qu+fVzsRkwKelm4/FmpCKeGClu2V5e/OHgN00y6aaG4uV7uoimkDeBqOBtv5AdfvVyIM1lFXtxaKd1eXQNYWvj4MDhCd3stvvz3srJpMTbW2ip6Z9MSBmMpDwN5JFrdIA9h59O8ilDyeCQYrHtbNUV9AGST0o4WZsudoIeS1o03AaAfWd6m6fE5MbdDw1Y2V1U6MxCO0LabKbPDrWzbje982lrL1KKEvP4JAzDthqUVNPLNwVOJHwvjzPLrXy5bb7rmGkmwbZKvnAZDXSRS1UpjAAbIWEgDms2waPU1b6hNFHPA+GVgfHI0sc07iCLEIPHwVWK1ETWUtbiMkUhpRJNLAGvY9z7SBt2gWyanQgdK7RmxODGWwCeufKypjjjjMeaKSns3O9zsts3lG9wbgC3T6hrQxga0Wa0WAHMFyg8/s1VVss9XFVvqZwwtcJpGFjSSTdoa5oLSABcAuG6xWDBDiBwmmip6R3CRRUjWiWItAkbVHMHG17C1z6tRvuvfIhd4iorseEVMwyVMMgje173RuINSH2IsxjrstYtGgLTvuNLZKvEMLiqZqZj85xCaAwllg90tuCeL7wHZdRzOPQvZKuWnindE6WNrzC/hGZhfK6xFx67EoXYWPUkwpsHL6iqfxaqj4WSIauGUjM4AHnt3qnCqrE5MYhbNJVOkc6YVkMkWWGFoJ4PI6w/6bWJuCSdy9OiAiIpQysV+V8F+kv/AAXrVWVivyvgv0l/4L1qrOjrVceUOjF6lHDnIs+t87b2PzK0Fn1vnbex+ZVqsmEIBSUQpKi7gquTyT7FYVXJ5J9iDSg83j7I+CsVcHm8fZHwVi0hmyto/kgfSaf8Zi1edZW0fyQPpNP+MxavOqR154RzdFXuaeM/alRWMnkoZ2UzxHO6NwjedzXWNj32Xz6PZyvqNnm0fijEKaYz0ZqXTVvCcM5kl5ZGco5dNc2hOmmi+kJotLuHEwYxJvL5piOzmONoZMPp6GeakbXVJgvOXOjjLW8FYGVvJzZtSSW8wUmbN4/NTSVtTHWOxKKLDjAeMkctuUTmwdYm1wb7+ZfSdFxopuy9love8vBw4NjbajFslLWR4pKyqDMSdWf4Dw4ngQGXO4WG4ZbE63Xf2DwzEcOgq+Ox1cDH8HkhntYOAOZzbSPOulySL2vZeu0TRLr04FNNUVXyES6XUOgRLpdBi7R4lJh8FM2Kc07ppC3hMrLCzSbFzyGj7ydw6Vm4btDVV8tC6oq4aEyxU72wOhuagv8ALtrcWOmm61zovV6FNL30UJeQO0VcMNqKkVkL6kD/ABKTgbGk/wAUMJcb8zSSc2+1xpdRO0FYW0LJsVpKSGd8441Zkgc1gaW3IOQG5IPMbdJXsdL36VTJSQS1UNQ5t5IGuaw30Ada+n1BB5zA66trMfhmrKh0RqMOjkFMW5Wk53AloOvQekZgDzL1S40vdc3UoES6XQES6ICIiAiIgIiICIiAiIgIiICIiAiIgysV+V8F+kv/AAXrVWVivyvgv0l/4L1qrOjrVceUOjF6lHDnIs+t87b2PzK0Fn1vnbex+ZVqsmEIBSUQpKi7gquTyT7FYVXJ5J9iDSg83j7I+CsVcHm8fZHwVi0hmyto/kgfSaf8Zi1edZO0vJwGWW3Jhkild2WyNcfuBWte+oVI688I5uir3NPGftS62I1L6LDKqqjiMr4InyNjG95DSQPrsvztP4Tdr6mZ0wxmWIP1DImMDW+oaL9JLzlT4P8AZSrqHzzYFSGSQ5nENLbn2A2WsTZ5Ol4GLi29XVZ8M/eNtf8APtT7rP6U/eNtf8+1Pus/pX2792+yHzDS/wC79U/dvsh8w0v+79VN4cPsOlfyeMviP7xtr/n2p91n9KfvG2v+fan3Wf0r7d+7fZD5hpf936p+7fZD5hpf936peD2HSv5PGXxH9421/wA+1Pus/pT9421/z7U+6z+lfbv3b7IfMNL/ALv1T92+yHzDS/7v1S8HsOlfyeMviP7xtr/n2p91n9KfvG2v+fan3Wf0r7d+7fZD5hpf936p+7fZD5hpf936peD2HSv5PGXxH9421/z7U+6z+lP3jbX/AD7U+6z+lfbv3b7IfMNL/u/VP3b7IfMNL/u/VLwew6V/J4y+I/vG2v8An2p91n9KfvG2v+fan3Wf0r7d+7fZD5hpf936p+7fZD5hpf8Ad+qXg9h0r+Txl8R/eNtf8+1Pus/pT9421/z7U+6z+lfbv3b7IfMNL/u/VP3b7IfMNL/u/VLwew6V/J4y+I/vG2v+fan3Wf0p+8ba/wCfan3Wf0r7d+7fZD5hpf8Ad+qfu32Q+YaX/d+qXg9h0r+Txl8R/eNtf8+1Pus/pX1DwdbWYvtBgM78QmMktNNwYmDQ3hBa+ttLj9Fvfu32Q+YaX/d+q2qLBsNw6kZS0dFDTwM8lkbbAKtW2Njq0XRsbCxNbErvHfP3dTjlR1rk45Uda5afE6fqmpxOn6pqz1Z3vVvDM45Uda5OOVHWuWnxOn6pqcTp+qamrO8vDM45Uda5OOVHWuWnxOn6pqcTp+qamrO8vDM45Uda5OOVHWuWnxOn6pqcTp+qamrO8vDM45Uda5OOVHWuWnxOn6pqcTp+qamrO8vDM45Uda5OOVHWuWnxOn6pqcTp+qamrO8vDM45Uda5OOVHWuWnxOn6pqcTp+qamrO8vCigqJJXOZIc1hcFd1QjiZELMaGg9CmrxFoVllYr8r4L9Jf+C9aqycSOfHsGiGrmySzH1NEZbfveFrKlHWq48ob4vUo4c5Fn1vnbex+ZWgs+t87b2PzKtVkwhAKSiFJUXcFVyeSfYrCq5PJPsQaUHm8fZHwVirg83j7I+CsWkM0JYmTQvikaHxvaWuadxB0IWLT1r8AaKPEi/ijOTBWkXbl5myH/AEuG650PtW6uCARY6gqtVN5vGbbDxIpiaaovE/mxTHXUkrA6Oqge087ZAR8VLjMHXxe+F1n4JhMjsz8Mo3uPOYGk/BR8QYN800P2dn6KOnuha2Dvn5R5u3xmDr4vfCcZg6+L3wup4gwb5pofs7P0TxBg3zTQ/Z2fol690fncWwd8/KPN2+MwdfF74TjMHXxe+F1PEGDfNND9nZ+ieIMG+aaH7Oz9EvXuj87i2Dvn5R5u3xmDr4vfCcZg6+L3wup4gwb5pofs7P0TxBg3zTQ/Z2fol690fncWwd8/KPN2+MwdfF74TjMHXxe+F1PEGDfNND9nZ+ieIMG+aaH7Oz9EvXuj87i2Dvn5R5u3xmDr4vfCcZg6+L3wup4gwb5pofs7P0TxBg3zTQ/Z2fol690fncWwd8/KPN2+MwdfF74TjMHXxe+F1PEGDfNND9nZ+ieIMG+aaH7Oz9EvXuj87i2Dvn5R5u3xmDr4vfCcZg6+L3wup4gwb5pofs7P0TxBg3zTQ/Z2fol690fncWwd8/KPN2+MwdfF74TjMHXxe+F1PEGDfNND9nZ+ieIMG+aaH7Oz9EvXuj87i2Dvn5R5u3xmDr4vfCcZg6+L3wup4gwb5pofs7P0TxBg3zTQ/Z2fol690fncWwd8/KPN2+MwdfF74TjMHXxe+F1PEGDfNND9nZ+ieIMG+aaH7Oz9EvXuj87i2Dvn5R5u3xmDr4vfCcZg6+L3wup4gwb5pofs7P0TxBg3zTQ/Z2fol690fncWwd8/KPN2+MwdfF74TjMHXxe+F1PEGDfNND9nZ+ieIMG+aaH7Oz9EvXuj87i2Dvn5R5u3xmDr4vfCcZg6+L3wup4gwb5pofs7P0TxBg3zTQ/Z2fol690fncWwd8/KPN2+MwdfF74TjMHXxe+F1PEGDfNND9nZ+ieIMG+aaH7Oz9EvXuj87i2Dvn5R5u3xmDr4vfCcZg6+L3wup4gwb5pofs7P0TxBg3zTQ/Z2fol690fncWwd8/KPN2+MwdfF74TjMHXxe+F1PEGDfNND9nZ+ieIMG+aaH7Oz9EvXuj87i2Dvn5R5u3xmDr4vfC6dVjuH0pDOMNnndo2CD/EkcfU0fE6LnxBg3zTQ/Z2fouzT0VLRgimpoYAd4jYG37k6c7oP+mNu2flHm6eGUlQ6qlxKvaGVUzQxkQNxBGDcNvzknUnpsOZaaIrU06sWZ4lc1zeRZ9b523sfmVoLPrfO29j8ylWSkIBSUQpKi7gquTyT7FYVXJ5J9iDSg83j7I+CsVcHm8fZHwVi0hmIupimJ0mC4XUYjXymGkpmGSWQMLsjRvJABNhvPqUIcaw+oxd+Fw1LZatkDalzGAuDY3Ehri4aC5BsL3Nidykd5ERARdShxOjxJ9Wykm4V1HOaabkkZJAAS3Xfo4bulUO2gw1mzsuOvnfHh0UT5nyvie0tY2+YlpGbSx5kGki4a4PYHNN2uFwVygIihHNFNn4ORr8jix2U3yuG8H1oJouHPa0tDnAFxsLm1z0LlARFESsMxiD28IGhxbfUA3ANujQ9yCSIiAi6wxGiN7VkBsbH/EGnKyf9wLfaLK6KaKePPDI2Rly3M03FwbEfUQQoE0RRa9r75XB1iQbG9iN4UiSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAs+t87b2PzK0Fn1vnbex+ZVaskwgFJRCkqLuCq5PJPsVhVcnkn2INKDzePsj4KxVwebx9kfBWLSGaEsUc8T4pWNkjeC1zXC4cDoQQvklNsDiGFYLTMkwmrxGkbilQ6soWVQE1RTNDo6TlFwDmsYGWYXDp3iy+vIpHyCo2e20ocBMTcPqsRqazAanDmtZXNJpZHSudEHvc4Zssbg3OLm7PXdet2O2WloMXxfFcTp5RWy1JbTPknLwIDDEDlbmLW3e119L6L2N29I70zN9Id6D5U3ZTG2beTVkGD1UEsmPCsbiYrWiIUeVgkYYw693WLbZdbgkiyxMS2I2oqdmzSVuCV2J1D8IfTUmTEWsFHUGWUuc+7wHZmuj15WjcpsCvuGZvpDvTM30h3pcdOSmq30sDIKrirmNAd/hh99B07lCCkxBk7HS4nwsYPKZxdrc3130XfzN9Id6Zm+kO9B5HGMP2lfiVY7Dp5BT3DoRw1r8IAx49XB2zj1nRBg+LUdVU1FI2cukqag5DU5WPjMNmE66EvDeVv+peuzN9Id6Zm+kO9Qm7xNNhOLyPppKyCskipsQjmjaZyHiMxFrjrI46PN7Fx0vbfZauKCudtRTUdLUvbFVx8LKA8/4Qide4HQ8ua0+oL0OZvpDvXF23vdt+lC7x9LSbQQwiTg67NEIHTskqWvdPI2QGQx8qwaW305IOgsLLsjC8SqqCGSVlTT1c1aeHLZ7SNpuFe5rcwO6zhu119S9Rmb6Q70zN9Id6F3msLocYh2lmfUy1HFQ6TKS7NG+PTgxq8kEdkG97k3XWxHD9pX4pUikqJRSGTJGeFtyJbcI7foY7Xb2jZeuzN9Id6Zm+kO9B4ufCMWLqhzqSWYuaC052kkMrHSBup3mMgj2W0VkmF488zSiSrY+NpdA1tRlaXmpe7UA2P+GW79LGy9hmb6Q70zN9Id6F3j9mK2Sr2mqzPWTueOH4OIuc5rmia2a17NIGVoFhpqoDCMRo2yxR02IPpzV1MjmU9XlfJnN4nhxd5Iubi411INl7FrY2uc5oYHO8oi1z7VLM30h3oXeYxfj8dDgNPUuqp53vyVTaObgnykQuLrG7dLi+8bl0xR7TcYwzhG1DjEIRK9tRcFuc8IHcsAuDCBfKbnUEWXsyWm1y3T1pmb6Q70GBstx2ZtTNV1D5o4HGjhcXkiRsbiDKf+px0J/6V6BcAtAsC0D1Jmb6Q70Q5RcZm+kO9MzfSHeg5RcZm+kO9MzfSHeg5RcZm+kO9MzfSHeg5RcZm+kO9MzfSHeg5RcZm+kO9MzfSHeg5RcZm+kO9MzfSHeg5RcZm+kO9cgg7jdSCIiAs+t87b2PzK0Fn1vnbex+ZVaskwgFJRCkqLuCq5PJPsVhVcnkn2INKDzePsj4KxVwebx9kfBWLSGbhzgxpc42AFyVnve6o5UhIadzL6fX0ldqt80cOkgfeF1lWpaEOBj6tvcnAx9W3uU0VVkOBj6tvcnAx9W3uU0QQ4GPq29ycDH1be5TRBDgY+rb3JwMfVt7lNEEOBj6tvcnAx9W3uU0QQ4GPq29ycDH1be5TRBDgY+rb3JwMfVt7lNEEOBj6tvcnAx9W3uU0QQ4GPq29ycDH1be5TRBDgY+rb3JwMfVt7lNEEOBj6tvcnAx9W3uU0QQ4GPq29ycDH1be5TRBDgY+rb3JwMfVt7lNEEOBj6tvcnAx9W3uU0QQ4GPq29ycDH1be5TRBDgY+rb3JwMfVt7lNEEOBj6tvcnAx9W3uU0QQ4GPq29yCJgN2jIeluhU0QX007nkxSG7wLg+kP1XZXQj0qofaR9y76vTKkiz63ztvY/MrQWfW+dt7H5lKsiEApKIUlRdwVXJ5J9isKrk8k+xBpQebx9kfBWKuDzePsj4KxaQzUVvmp7TfiF1l2a3zU9pvxC6ypVmvGQs6mx2iq8dq8HiMvHKNodK10ZDQDa3K594WV4QMQxHDNjqmowwvZNma10jByo2E6uHRzC/NdfPaGhw2qoYq3BdrKiHaB+UvZVS8CHu5xmO+3Nqb2UJfaFnY9j2HbM4LPi2LVAp6OC2d9i4kk2AAGpOu4Ls0Aq24dTivdG6rEbRM6LyS62pHqXxb/iE2LrK6n/AGtbXRNpMPp44HUzg4uc4ykZhzDyx3KYQ+s7M7VYRtfhLsTwaodPStldCXvjdHZzQCdHe0aryeLeHPYbCa19L4wqK18ZyudR05kYD2rgH6rryvggw+sxX/h+x7D8PfkrKqWrhhN7coxsAF+a+7614Hwdt2O2XxTFaPwj4NLHWNDBBHVUr5GxjXMMo3E6WO6w0Kmw/QuyfhD2Z21dJHg2I8JURtzvp5WGOUN6cp3j1i60No9qcF2Sw0V2N18dHC45WZrudI7oa0auPsX578FuAy4p4aRjezVDVU+zdFVSyNmkBDWxFpAjud5Nxpqbb9ylt8JNu/8AiLg2eqpnto4amKgaGnyGBofIR0EnNr7OhLbS76xhPhv2GxfEGUbMSmpJJHZWOq6d0THHmGbUD67L6Cvhfhv8HGzmEbCRYxguFwYdNRTRxPEIIEsb+Tyukg2N9+9e28CmNVGOeCrDZKqR0k1I6SkL3G5c1h5N/wD6kD6lExsvA98iIoSIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg5j86h7R+BXfXQj86h7R+BXfVqVZFn1vnbex+ZWgs+t87b2PzKmrJEIBSUQpKi7gquTyT7FYVXJ5J9iDSg83j7I+CsVcHm8fZHwVi0hmorfNT2m/ELrLs1vmp7TfiF1lSrNeMmNtXLjUOASyYDHHLWNIuxzA8lnPlB0J3aH1r5ji9dhePUD6KDY6phx+zQ8wR5Q12l3Fo5j0Ec+9fZ1nU2BUVJjtXi8QlFZWNDZXGQlpAtbk824KEqNk6Gsw3ZPD6TECTVRR2eC7MW6kht/ULD6l5fw4/+j2MdqD8Vq+gLpYvg+H49hcuHYrSR1lHNYvhkvldY3G71gJCHwrYOsxPD/wDhj2jqsIdIytjqZi18flsb/hB7h6w0uN+bevM+C3EfBtBQVw23pWzYg+XNFNUxyTRmOw0GW9nXuSTvuNV+lsD2ewnZvD3UGDUEVDSueZDFHfKXEAE6k9AXncR8EOwmKVTqifZynZK83cYHvhBPsaQPuVrj4NgOKUkXh6oX7Ax1NPhlTWRxNgJcBJEbCW7Sb5PKIvusNy1vCVHU7BeH6m2odTvko6iojroyP+YAA2VgPpDXvC+87PbE7N7KF7sEwemopHjK6VoLpHDoL3Em3quu/jGB4XtDh7qHF6CCvpXG/BzMzAHpHOD6wlyz4d4ZPCts7tJsRFguA1b6ySrmjlmdwTmCJjdQ05gOUTbQX3FfSvBDs9U7M+DHDaOtjdFVTF9VLG7QsMhuGn1huW67OD+C3YrAsQZXUGz9MypjOZkkjnSlh6Wh5IB9a9aomfhAIiKEiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOY/Ooe0fgV310I/Ooe0fgV31alWRZ9b523sfmVoLPrfO29j8ypqyRCAUlEKSou4Krk8k+xWFVyeSfYg0oPN4+yPgrFXB5vH2R8FYtIZqK3zRx6CD94XWXfc0OaWuFwRYhdB8b6fRwLmDc8C+nrVat60CKHDR9Y1OGi6xveqrJoocNF1je9OGi6xvegmihw0XWN704aLrG96CaKHDRdY3vThousb3oJoocNF1je9OGi6xvegmihw0XWN704aLrG96CaKHDRdY3vThousb3oJoocNF1je9OGi6xvegmihw0XWN704aLrG96CaKHDRdY3vThousb3oJoocNF1je9OGi6xvegmihw0XWN704aLrG96CaKHDRdY3vThousb3oJoocNF1je9OGi6xvegmihw0XWN704aLrG96CaKHDRdY3vThousb3oJoocNF1je9OGi6xvegmihw0XWN70EjXGzLvPQ0XQWR61UPtJ+5d9demgcwmSTyyLAeiF2FemFJFn1vnbex+ZWgs+t87b2PzKVZEIBSUQpKi7gquTyT7FYVXJ5J9iDSg83j7I+CsVcHm8fZHwVi0hmIqqlk0lO5tPK2GU+S9zM4H1XF+9eapsaxWKgoquofHV8arDTcDDBkcADILgl9rnIN9gNVI9Ui8+/bLDY2ROe2ZuZueQOytMQzlnKBdcnM12jb7iV2dosWnwujj4myOSrmfaNkhsC1oL3/7WkD1kKEtdFmUeKcdxZ0URa6ldRw1MbgNTnc8d1mhVDaSnMElRxWr4uNI5RGC2Y5wwBut7lxFr2vv3IhsIseTaOGKmke+lnZLFKIZIXujY5hLcwu4uDbEbrHVSptoaetkhFJT1NRHIyN7pGMGWISatzXN92psDYb1KWsiw8B2gdiTIIqmnkinlZJI1+UCOQMflOXUnS7d9r30UMS2oho5KylbG5lVFDK+IvLS1zmML7ZQ7MBYc4F7KBvosSPaaERWnpKqKpyxFkLmAOlzmzcutt4N7kWtqpftPRMZKZo54HQxyvkY9ou0x2zM0OrrOaRbQg6FBsoseDaainxUUAD2yF5iBJbbhA3MW2Ds2ljra1wRddiXGaaKeaJzZM0M8VO6wHlSZcvPu5QuiGgiwo9rKJ0XDzU9VTU7mSvZLIwZZODvmAsSb2BIuBfmUW7RyNqq3jFBPBHTxQuEcmRj7vc8XLi7Lbkjn01RLfReej2rimqYntp3igdSTVMk7i3kcG4NcLA62Nxpe+lrhc/tjQcWdLwcoc2RkZYXx6ZgS0l2bKL5SNSNdN5CD0CLOra+SGXDRG0NbVzFjw8agcE9/Tvu0Lq0e0cElHTmUSPnkZTkZY8vCcKOSWi5sNHX10yneg20WThW0lDjFSYKbPfIZWElpzsBtmFiSN40dY6hVzbUUVPXVFLNHM18LJH6ZXF4YLus0OLhpuuBdBtIs2PGoZMDkxQQycDG1zy1pY8kDeQWuIP1FVy7Q04qnU1PBPVzB/BtbEG8shge4gkgWAc25POQEGsiyG7S0LqSWpa2Z0cUMcx5NjZ7nNAtfeC03C7FfizKKoZA2mqKqZzHSmOBoJaxpALjcjnOgGp5giHfRYVNtCTidRS1FPKGCrNNFM1oy34MPDTre55Wtrbgox7XUcocG01Q6USRxiJpje4mQkN1a4gatN7m450S30WDUbW0dPRtnNNVOOSR74wGh0Yjfkde7rEh2mhPSr6faSiqcW8XtDxLndEHEtsXtBLm2BzaWOpFjY6oNdF5yv2jq6asroW0LslLLTMa7RxkEjwCAL77HT71Y7aeFj3yvjmjjhildLAYgXtcx7GnlB1rcr2WN7iyDfRZsmNwRYCcWfFLwIF8jMr3HlW0ykg69BUabHYKirZSugngndK+EskA5LmsD9SCRYtcCLdKIaiLA/a+kcGOjo62RjxCczWNsDL5A8reTp6r66KB2oea6MRUFTLFwEr5ImMaZY3xyBjgeVbTXcTfmRL0SLEbtXhr6+Klje54lMbRIC3Lme0OYLE5tQRqBYXC7mE4qzF6TjMVNPDC7yHSgDOOkAEm2nPZEO+iIpBZ9b523sfmVoLPrfO29j8yq1ZJhAKSiFJUXcFVyeSfYrCq5PJPsQaUHm8fZHwVirg83j7I+CsWkMxdCPB6SKCmhaH5Kad1RHd3+slxN+kcsrvopGQNm6JksckT6iFzScxZJbhAXl9nerM5262+y7VXhFFX1kdTVwMqHRMcxjJWhzG3IJOU6X0GvQu6iDPw7BaTC35qZr22jEIBdcNYHOcAPYXkD1WHMqRs3RCOaLPU8BJfLFwxDIiXB92AbjmAIPNzWC1kUDHOzVGWtcZak1DZTMagyXkc4tym5ta2UAbtLaWXNNs3RUbqfi0lTC2BkbMjJiBIGeRm6bffuN1rog6FJg9LRupnRB96Zkkcd3X0e4Odfp1aF1JdlcOmqJJXmezzK7gxJZrTI0teQPWHHfu5rLaRBjs2ZomxSNdJVSPcGBkr5iXxBhuwNPNYkn131upHZzD3U8MUjZJTFUcazveS58nS4843abtB0LWRBnwYNT0+JPrIpJmGRxe6IP8A8MuIsXW6T7bX1sq6nZ+kqsSFa99Q13CRyujZKQx72HkuI5yLAfUFqIpHnsO2Tp4aJsVc+SqOSWPIZCY2iQnNlHMSDb1c1lf+y9Gc75KislncY3CaSbM9pZmykXFv9bubW/TqtpFCWRFszh8UUUQEpjYyaNzXSEiRspzPa7p11Um4BE2idTCtrrOdfMZtbWtl3WIt0g9O9aqIh0XYRSmmoYGcJEygc10OR9iLNLbHpGUkFVw4DQwz4fM2N2fD4jDCS4+TYDXpIG7ouelaSIM/DcHp8Lc7i8k/BkZWRPfdkYvezR+t11hsxQtqjO2SpY4GVzA2UtEZk8sttrck3vfTmWyiDpUWGQ4dSzRQ5pXTPdJI6U3MjyLXNhbmA0Cz6HZiCmwWhpHSyR1FKC4TwPLXZneXYm+h6DzAdC3UQYs2yuHSxxxNNRDEyNkTmRykCRrXZm5ukgkm/Pc3uu3X4RBiErJXSTwSsa6PPBIWOLDa7SRzaD1jmIXfRBnSYFRSh4e17mvnNS4Zzq4syH6svMuvTbL0FLIyQOqJHsMWUvkvYR5sg3bhmPtWyikeYxTZeeWshqMOkiY6MSuaZTfJI+TOXWLXBwvzaH19GtS4NBSV76qOWYGQue6IP/w87vKdl9Z1321WiihLOnwSlqK2SpeZQ6UxOe0Ps0mN2Zpt083rCicBpBPNMx88UsvCXeyUtILy1xItu1Y37+laaIhmswKjZhL8P/xDDI8yPJdynOLsxNx6+hcVOA0tRM6cSTwzOm4fhIpMrg7IGED1FoAt9a00UjJp9nKCmgZDGJcjOAteQk/4Nsnw16VGfZmimlMjZqqF7uFDnRTFtxI/M8ewnu5lsIoGZFgNHT1zKmnM0AaG3ijfaNxa3K0keoADfzBX0OGQ4eyGOCSYRwx8E1jn3ba97kdPrXcRSCIiAs+t87b2PzK0Fn1vnbex+ZVaskwgFJRCkqLuCq5PJPsVhVcnkn2INKDzePsj4KxVwebx9kfBWLSGbp4rilLguE1OJVz3R0tKwySvawvLWjebAE2G8+pVwY5h9VjD8Lp6gTVUdOyqeIwXNbG8kMJcNNbGwvcgX3LvSRsljdHIxr2PGVzXC4IO8EL5JT+DyuwvBaaN2DyYlSsxWolq8O400PqacB0dLynOALY2BlmEjvCkfXUXyCo2V2yosBMEVBJiFRWYDU4ZlbXN/wDCvdK58Qc55GYNY4MzC5uzoN163Y7ZN2GYvi+LYjSEV89SRTyulzkQGGIWAuQ272Ovz6exB7JF81/YrFI9p343HSuFb+0XGBNxj/8AsTCGuFr2yl29tr89ty8vBsHthJTYlE7DDRtraKOOaOGoZG187aqN5c0iRznDg89nuIcRobaIPuSL5fRbAV2FbQNrsOo3Uxix1z4XiouI6F1OQ4BpdbLwpJyb76q/wZbK45gGIzS4vHUwycVEM7zJE6Krmz3MvJcXOdv5Tg02da2iD6SiIgIiICIiAiIgIiICIiDJxzaSh2fERrWVrhKHEGno5Zw0C18xY05d/PZZg8I+zLsK8YNrZXU5ggqBlpZS5zJpHRxENy3OZzSAAL8+4hdTwgwY9ibaLCqDCKmuweoc52JGmqIopJIxuhGdzbNefKI/0gjnWFjmyuOY/V1dTDhM2Fx1MGFxNibURNkg4Cre+TKWkgFrCHC3qA1FkH0DBMew7aGjkqcNndKyKQwyNfG6J8bxYlrmOAc02INiOcLRXnBsr4q2TxfD8Dqp48Qr2TPFbUzOkldO5mVsjnnXSzRpuAFgvFN2RxDxBDDBsjPSUsVXBJXYacTDziLWxva4jlZRZ5Y7UjhMvKtpcPqdVUxUdHNVTuLYYGOke6xNmgXJsPUFGirIMRw+nraZ/CU9TG2WN1iLtcAQbHdoV8hrNh9opMMpoqrBZcTpuK1sVLQDEQ04a+SQuhJeXDPljszMCS21hcaq+DYfaVm0mEz1EdRwcEGHsinp3xE0YiY0TRkucCAXB1wwODg63MEH15ERAREQEREBERAREQEREBERAWfW+dt7H5laCz63ztvY/MqtWSYQCkohSVF3BVcnkn2KwquTyT7EGlB5vH2R8FYq4PN4+yPgrFpDMXBIAuTYetRlkEUTnkXtzdJUWUrTypwJZDvvqB6gFInnZ6be8JwjPTb3hOLQdTH7oTi0HUx+6EtIcIz0294TOz0294Ti0HUx+6E4tB1MfuhLSHCM9NveE4Rnpt7wnFoOpj90JxaDqY/dCWkOEZ6be8JwjPTb3hOLQdTH7oTi0HUx+6EtIcIz0294ThGem3vCcWg6mP3QnFoOpj90JaQ4Rnpt7wnCM9NveE4tB1MfuhOLQdTH7oS0hwjPTb3hOEZ6be8JxaDqY/dCcWg6mP3QlpDhGem3vCcIz0294Ti0HUx+6E4tB1MfuhLSJIqJIRTtMsIyhurmDc4ezpVwIIBBuDqEHK4Lmt3kD2lVylzpGwsJaXC7nDeB+qk2lgaP8pp9bhcn6ymY54Rnpt7wmdnpt7wnFoOpj90JxaDqY/dCWkOEZ6be8JwjPTb3hOLQdTH7oTi0HUx+6EtIcIz0294ThGem3vCcWg6mP3QnFoOpj90JaQ4Rnpt7wnCM9NveE4tB1MfuhOLQdTH7oS0hwjPTb3hOEZ6be8JxaDqY/dCcWg6mP3QlpDhGem3vCcIz0294Ti0HUx+6E4tB1MfuhLSHCM9NveE4Rnpt7wnFoOpj90JxaDqY/dCWkOEZ6be8LkPaTYOB+tccWg6mP3QuDSwEWMMfuhLSJoqWgwTCIkuY8HJc3II5lcoBZ9b523sfmVoLPrfO29j8yoqyTCAUlEKSou4Krk8k+xWFVyeSfYg0oPN4+yPgrFXB5vH2R8FYtIZqar/JHbb/ANwXYXXqv8gdtv8A3BdhWgl16qupqLLxiUR5r2uDzK5j2yRtexwc1wBBHOF0cSxGCmZNBMXMc6Ilhto8m4sOk7tPWFmPkkp4hFU1E1M+KmjEDYyRmdl10HlG9hb9VZD0ag6WNsrYi4B7wS1vOQLX+IWPHx2Waslc+Xh4YmGOEOszOY7nTn1XWhnj43DLDU1NU5lLK54Ny4Os3QXGjv8Ap+5B6RF5XjtTwdQyCokLTAxwe2Uylrs4BsSBrY6gaLboRJFiNZTmWSSNgY9vCOzEE3vr9SDvoiICIiAiIgIiICIiCE3+S/sn4KEHm8fYHwU5v8l/ZPwUIPN4+wPgqTmlwPPz/wDGPir1QPPz/wDGPir1NJLrx4hSS1TqZlQx0zb3aD0b+5cQ4hST1DoYqiN8jb3aD0b/AG2WUKmGbEKIUwN43m9JweUxEg3eejfz6G6jxmCatpXU7DK2NjgaMR5XQ8k3J9f+mx6dFZDYpsQpKt7mQVDJHM1Iaebp9Y9amaqAMlcZmBsJtISdG6X1+ohZNLPDU4xE6ncJ4eBczg8mXi400Pttax10UoqBkseJU0IbA0VDXMszkghrCNOcXGqDTpqynrGudTytkDTY23j2hXLLwkTVM01fPkHCARxhgIBa0nla66km3qstRAREQEREBERAREQEREFE/wDn0/bP/aVaqp/8+n7Z/wC0q1UnNIs+t87b2PzK0Fn1vnbex+ZVaskwgFJRCkqLuCq5PJPsVhVcnkn2INKDzePsj4KxVwebx9kfBWLSGamq/wAj/wC7f+4LsKt7GyRuY7c4WKrbM+IZZmOdb/W0XB+rmUxNh2EVPG4+iT+W79E43H0Sfy3forXgtK5FTxuPok/lu/RONx9En8t36JeC0rkVPG4+iT+W79E43H0Sfy3fol4LSuRU8bj6JP5bv0TjcfRJ/Ld+iXgtK5FTxuPok/lu/RONx9En8t36JeC0rkVPG4+iT+W79E43H0Sfy3fol4LSuRU8bj6JP5bv0TjcfRJ/Ld+iXgtK5FTxuPok/lu/RONx9En8t36JeC0pzf5D+yfgow+bx9kfBVvL6kZAxzIj5RdoSOgBXqs7ZFQ8/wD/ANf5q9USscS2SO3CM3X3Ec4QVTR5ccrD0ZCfvCRNheip43H0Sfy3fonG4+iT+W79Fa8FpXIqeNx9En8t36JxuPok/lu/RLwWlcip43H0Sfy3fonG4+iT+W79EvBaVyKnjcfRJ/Ld+icbj6JP5bv0S8FpXIqeNx9En8t36JxuPok/lu/RLwWlcip43H0Sfy3fonG4+iT+W79EvBaVyKnjcfRJ/Ld+icbj6JP5bv0S8FpXIqeNx9En8t36LjjbOZkrj0CMpeCxP/n0/bP/AGlWqpjXvl4WQZSBZrb3t0k+tWqoLPrfO29j8ytBZ9b523sfmVWrJMIBSUQpKi7gquTyT7FMquTyT7EGnB5vH2R8FYq4PN4+yPgrFpDMREUgiIgIiICIiAiIgIiICIiAiLq4hilBhFMKjEa6mooS4MElRK2NpcdwuTvQdpFwCCAQbgrlAREQEREBERAREQEREBERAREQEREBERAREQEREBZ9b523sfmVoLPrfO29j8yq1ZJhAKSiFJUXRKrk8kqwquTyT7EQ04PN4+yPgrFXB5vH2R8FYtIUdLGMSZg2B12JyRSzMo4HzujiF3vDWk2aOk2WFg220VVs07G8ZhpcKoy5oimZWsqYpg4C2VzRfNc5ctr33XW/ilLUVuFVNNSV0mH1EsZbHUxsa90TuZ2V2h9hXz5/gsrqltVVzYlQ02IS1cFYyOhppKelzxte0uc1sgdneJDdzXA6N321kevqdttmqSCjnnxuiZFWtzwvMlw9t7Zr8wvoSbAHRczbabOU9bWUkuNUbJ6Frn1LHSWMIbluXdHlN9t9F43F/BViOIYBHhdPjkVJA+kngniYyfguEle57pWjhbuJLrESFw57albcuwT5MFxmkbXsZUV+JR4lDLwOZsb4xDka9pPLGaHXUaFBbW+ErZ6jmwt/HqeTD8QFR/4wScmJ0QaS0ttfNyt28WW7WbQYRh+ERYrV4lTQ0EuTJUukHBuz+TZ27W+iw4dk8SqMYwvFMUxCjlqaPjZe2npeCYeGa1oDeUTyQ3Um5N+ZcR7EvbsTs9gDqyNxweajkdIYuTKIHhxAbfS9vXZBpR7abOTVlHSsxilM9a1j4GF1i8P8jfuLuYGxPMsjF/CZg1DiTqChnpcQqI46p8wbUtY2EwRF5D3EEAEjKTuad/QuvtHsDiWO7UtxEY5ko21NLUsp5GyHgzC9rixoDwyzst7uaXAnQ23Z03gtxOWibhpxuk8X0kFfT0g4mRKBVMcLvfns4tLuYDNbXVB7hm0WFln+JXQRvbNFSvbnvlmka1zI79JD226bhSwnaDCcd4fxZXw1fAEB/Bm9r3sfWDY2I0NivJ1Xg/xOTG+Ghximjw+Svo8SlidTOdIZIGMYWh2awaRG07rg+paWxmyNZsxUVrpsQikppgxsVJTRvjgiLS4l7WPe7IXZhdrLNGUWCDs7fQYxPsPiTcCxFuG1zYi8VDm5srG6vA6CWggHmXwXDtp8cf4GdkMFpMVqqafaLF5aSat4VzpWRcIBYOJuPKHPuFudfpPEqQ1+FVdGHhhqIXxBxF8uZpF7fWvmEPgQYfBbQbMTYyW4jhlU6spMRhhLeDeXX8knd9fMDzIMujo6jwY+G7AMBw3FsRrMGx6B4lp6yczFkjQeWCd2oHefVb2HhK28rtia3ZwUtNFURYlWOp5mOaS9wyjKGG4sS4gXN966uzXg2xeLbWHaza/aFuOYnSQmCkbFTiGOEG4Lrc51Ped+ltPb/YOXbSu2dqIsQZRjB64Vjg6Iv4UAt5IsRbdv1QeOofCF4Q3bUYtsZU4ZgztpBGyoo3sc8U0cZF3l53usC0DdcnXRebx/wlz7S+BQ4jjmA4TXV9DjTKGaCpic6G4aSHgBwIdbTfbfzFfV4NhZYvDFU7bcfYYpqEUfFeCOYEW5Wa9ubdZeLm8BNVLsRiOA+PoQ+txgYoJuLOs0BpGS2bU677/UpH2OGwgjytDRlFgBYDRTUWNyRtbe+UAKSgEREBERAREQEREBERAREQEREBERAREQEREBERAWfW+dt7H5laCz63ztvY/MqtWSYQCkohSVF0Cq5DyT7FYVXJ5JRDUg83j7I+CsVcHm8fZHwVi0hQREUgiIgIiICIiAiIgIiICIiAiIgIiICXVT5LGwFyeZcOuy2eVjL7gSoWsuRUkvj1dqOkKxrrhEWSREUoEREBERAREQEREBERAREQEREBERAWfW+dt7H5laCz63ztvY/MqtWSYQCkohSVF0CqpPJKsKrkPJKIasHm8fZHwVirg83j7I+CsWkKISyNiic924Lp+NB1R95d17GyMLHC4O9dXxZF6b/uUTf4LRb4oeNB1R95PGg6o+8p+LIvTf9yeLIvTf9yr0k9FDxoOqPvJ40HVH3lPxZF6b/uTxZF6b/uTpHRQ8aDqj7yeNB1R95T8WRem/7k8WRem/7k6R0UPGg6o+8njQdUfeU/FkXpv+5PFkXpv+5OkdFDxoOqPvJ40HVH3lPxZF6b/uTxZF6b/uTpHRQ8aDqj7yeNB1R95T8WRem/7k8WRem/7k6R0UPGg6o+8njQdUfeU/FkXpv+5PFkXpv+5OkdFDxoOqPvKL8UAH+UfeVviyL03/AHKEmGRZTy3/AHJ0iNV0q7GfF+zlbi3BgviBDGk7zcAfeV8Zra6pxGqfUVk755XG5c837ugepfZ6jC4sQwWswd8haJ2ktceY7wfqIBXyPENn8VwyqdBU0M4cDYOYwua71gjevG9JRiTq2y5vsPQFWDTFcTbXv4f1zep8HO0NSMTGDVEjpqeZjjEHm/BuAvYeoi+i90MQ4GokhMd8jiL5l43YHZeqoq04ziMTqZsbCIWPFnEnQuI5hbQe1exiomVEz5nOeDI4utpouzQ4xIwYir8h5PpicGrSqpwsrRe29d40HVH3k8aDqj7yl4si9N/3LnxZF6b/ALl29J4vRQ8aDqj7yeNB1R95T8WRem/7k8WRem/7k6R0UPGg6o+8njQdUfeU/FkXpv8AuTxZF6b/ALk6R0UPGg6o+8njQdUfeU/FkXpv+5PFkXpv+5OkdFDxoOqPvJ40HVH3lPxZF6b/ALk8WRem/wC5OkdFDxoOqPvJ40HVH3lPxZF6b/uTxZF6b/uTpHRQ8aDqj7yeNB1R95T8WRem/wC5PFkXpv8AuTpHRQ8aDqj7yeNB1R95T8WRem/7k8WRem/7k6R0UqeubPJkLC0ndrddpdeCjjgfnBc53NfmXYVov8VZt8BZ9b523sfmVoLPrfO29j8ylWRCAUlEKSourKqk8k+xWFVyeSUQ1oPN4+yPgrFXB5vH2R8FYtIUEWbtFPNTbOV8tPOynmbC7JK82awnQOJsbW6bLEocdmo9k8UrA7jstDKWh7qnhY5TZp5MgaNOVY6aEFEvWovEVu1mIxwVsVRTwRcHw8TZKeYh2eINcTqNAQ71m49a9ugIiKUCIiAiIgIiICIiAiIgLgi4XKIOnUU+Y5mkgjcRzKsVFYwW5D/WRr9y83VYhXwccp6rFnxxDFY6eSpa1sfAxOha6wOobyiBc+ku1S41XjZfCJw2Kpq62cU4kmJY1wJflkNhzhoOm+6pbc1irZtbOSepcDM7Qf6RoF3Yowxtl4+j2pq66TD2zU8dPxl9PK3gJibseZGlrrjXVl9On1L2g3KYhFVV9giIrMxERAREQEREBERAREQERQla98L2xv4N5FmutfKem3Ogmi+fVmL4izAMPmlxZrXMFW+cuqBTvqMkha0NORwvb/T7Fu45tFV4ZTwPpaWOQGilrZG1DyxwbGGEt0B5RzewFRdNnpEXmqLG6up2ggoqljI5I3zxPEMhLHWjie02IudJLe0HpXpUQLPrfO29j8ytBZ9b523sfmVFWSYQCkohSVF1RKrkPJPsUyq5PJPsRVrwebx9kfBWKuDzePsj4KxaQq4IBFiLgqDYImQiFsTGxAWDA0Ze5WIpFZgide8TDe5N2jn3qxEQEREBERAREQEREBERAREQEREEHwxPY9r42Oa/ygWgh3t6VyWNIaC1pDdRpu9ikiCsQRC1omDLa3JGlt3xViIgIiICIiAiIgIiICIiAiIgIiIK3QQua1romFrXZmgtFgeketSdGx/lsa7QjUX0O8KSIIiNgfnDGh2+9hf/APmgUkRAWfW+dt7H5laCz63ztvY/MqtWSYQCkohSVF1BVcnklWFVvPJPsRVsQebx9kfBWKuDzePsj4KxaQq4c5rGFzjZrRck8y8piGNT1chbE90UPMGmxPrJW9jTi3B5yOcAd5C8euTSK5idWHq6Bg01RNcpcI/03d5TO/03d5UUXG9a0JZ3+m7vKZ3+m7vKiiFoSzv9N3eUzv8ATd3lRRC0JZ3+m7vKZ3+m7vKiiFoSzv8ATd3lM7/Td3lRRC0JZ3+m7vKZ3+m7vKiiFoSzv9N3eUzv9N3eVFELQlnf6bu8pnf6bu8qKIWhLO/03d5TO/03d5UUQtCWd/pu7ymd/pu7yoohaEs7/Td3lM7/AE3d5UUQtCWd/pu7ymd/pu7yoohaEs7/AE3d5TO/03d5UUQslnf6bu8pnf6bu8qKIWhLO/03d5TO/wBN3eVFELQlnf6bu8pnf6bu8qKIWhLO/wBN3eUzv9N3eVFELQlnf6bu8qcVVUQPzRTSMPqcqkS8wiaYnZL1mEYpx+NzJABMwa23OHStJeSwJxbjEQH+oOB7l61ejg1zVTteBpeFGHiWpykWfW+dt7H5laCz63ztvY/MrWrJywgFJRCkqLqCq5PJPsUyq5PJKKtmDzePsj4KxVwebx9kfBWLSFWfjnyNP/8AX4heRXrsc+Rp/wD6/ELyK4dJ672/R/u54+QiIuZ6IiIgIiICIiDQpaeJ1AXvbcvzuJG8NYAbDouT3BWtw4Uby+UtlLWZ8tuSQCA4a+3QrpQ1kkEBjb6WZrudptY94XFPVPp33tnbpdjjobbr+oHWy1iqnY5ZoxNtpRqoRT1k0INxG8tB9S1KakiOG0sgpIZnyFweZJMm482qx3vdI9z3m7nG5PSV3GV8XE4qeajZOIr5S55G8+pRRNMTN1sWmuaYiO/5cYXvw2CSrqxHI6GKDKeW06A7/XooCgpWxNmkqntileWxEMuSBznoUJMUklNSXRt/8QwM00ygblGCvaymZBPTtnZG7My7i0tP1bwrXouz1cWIz3bt3msbhjWVU8M0r80RADYoy5zr8/qUzhAjqahs05bDAwPLw25N9wsqzir5GVDZoWycM4P0cW2IFgNN49Sl43c6eR0kDHxyxiN7L2vbn9Sn/rLY/wCW/rLxXyUDKiDD4YC3/Ez3ky2JAN7ldKWmpP8AD4CszZn5HB7bEf8AV7FZ41ka+ndHEyPi5dlANwQeZBiUcUkboKOOIMfwhuS4k9FzuCiZokppxafHdvnPwWS4S1sTZI5n5TIIyZY8g1/1D1KNXhsNK4B00zeXlJdFa46WncVCTEg6OSNtMwMe8SWc4u1B5777pNiQfSOgigETXuDncsuAt0A7kmcP4cyIxrxfkYtTU9JWGKBziW+U0jdoOfnurmYQxz44+MESzRCSNuXfpexPMurXVgrpBIYGxyW5bmknMrW4o9tZTVHBNvBHwYF9+hF/vS9GtN8k2xdSIjO39ZpeLInxQyRVBeHzCF/JtlPq6QoOw8NjrncIf/CODRp5WtvqUIKwtp20x/w28MJTINS36l3a6tidSTtE8U0k9h/hRloABuSb7ybKYiiYuiZxaaoj8z8lFJDC/B53ykMAlbd+W7gLbgroqA09S8RytfG+mMrXOYDcdFuYrpU9aIKZ9O6Fssb3hzgSRfTcrnYs81DpBC1rOBMLWA6NCRVRaLlVGJebZTw/pdS4fDFNRGaW8s1niItu0t6CVn1YDa2drQABI4AD2rtMxXKynz07HzU4DWSEm9hzWXSmk4aeSQi2dxdbouVSqabWpXw6a9aZr/NqCIizdIiIgIiICIiDv4J8swfX8CvXryGCfLMH1/Ar1679G6jw/SHvI4Cz63ztvY/MrQWfW+dt7H5lb1ZOCEApKIUlRd1yq5DySrCq5BySijZg83j7I+CsVcHm8fZHwVi0hDqYpC6owyeNgu4tuB021XjF75Y2IYAyokdLTPET3alpHJJ/Jc2PhTVth6Oh6RTh3oryeaRav7O138L3/wCy4/Z6u/he/wD2XL6qvc9P2jC7UMtFqfs9Xfwvf/sn7PV38L3/AOyeqr3HtGF2oZaLU/Z6u/he/wD2T9nq7+F7/wDZPVV7j2jC7UMtFqfs9Xfwvf8A7J+z1d/C9/8Asnqq9x7RhdqGWi1P2erv4Xv/ANk/Z6u/he//AGT1Ve49owu1DLRan7PV38L3/wCyfs9Xfwvf/snqq9x7RhdqGWi1P2erv4Xv/wBk/Z6u/he//ZPVV7j2jC7UMtFqfs9Xfwvf/sn7PV38L3/7J6qvce0YXahlotT9nq7+F7/9k/Z6u/he/wD2T1Ve49owu1DLRan7PV38L3/7J+z1d/C9/wDsnqq9x7RhdqGWi1P2erv4Xv8A9k/Z6u/he/8A2T1Ve49owu1DLRan7PV38L3/AOyfs9Xfwvf/ALJ6qvce0YXahlotT9nq7+F7/wDZP2erv4Xv/wBk9VXuPaMLtQy0Wp+z1d/C9/8Asn7PV38L3/7J6qvce0YXahlotT9nq7+F7/8AZP2erv4Xv/2T1Ve49owu1DLRan7PV38L3/7J+z1d/C9/+yeqr3HtGF2oZaLU/Z6u/he//ZP2erv4Xv8A9k9VXuPaMLtQy0Wp+z1d/C9/+ysi2bqnOHCyRxt5yDmKeqr3E6ThR+5Xs/C6TExIByYmkk+3QL1S69HRxUMAiiGm8k73HpK7C78KjUps8TScb11etGQs+t87b2PzK0Fn1vnbex+ZV6snPCAUlEKSou6xVcnklWEquTyT7EUbUHm8fZHwVirg83j7I+CsWkIERFIIiICLx2FYzXQYAcWqxilS5tPwhZKIWQyEkDklozDfpfmWg7HMRfitJSNo4YnCsNPUAzZgRwJkBacvRrzai3PdQmz0KLzEe2Jlo31MeGyvYWtfDZxGcOkawBxLQGnlA2BOl9dFsVOIy0NFT1FVTtZnlZHNkku2IONs1yBcAkX0G/1IO+i867amR1NJUQ4c58MEBq5S6UNIhLnBpaLaktYXW00trquxJtGyONzxTOIbVPpvK35YnSZt3OG2shZtIsgY1MzZiXGKiiEeSAztgbKHFzcuYAmwAPf7V1pto6unm4rLhVqwyRNbGKgFpbJns4utpYxuBFvZdB6BFgDGqpmIz0cVMamqdLZsT5QxjA2GNzrOy3td4AuCSTzDdJ20hGLCiFDIcroo5SCXOY54B3AEEDMLnMPVeyFm6i6OK4g7DqNk0cHGHvmjhawPy3L3Bu/1XWPVbXmkonTSUTOEhM3DxcMSWiM2JbZpuDzE5RzEhB6ZF5920lU+u4vT4YJGuqXUsb3VAbmeI89yMps219dTcbudVx7XsmkgENDK9r44ZJALlzOENgAA0g2tc3I03XQs9Iixce2hGCamFkwbG6aQcIQ4NG8gBp9epsNN6rl2lMFbK2WiLaSKoNMZxJd2YRcJfJbdbTfe6DeRYGGYvXV2ORMnpxTU8tDxhjBIH3u8WJNhYgHUajXeVZT7Rtmx4YcYW5XmRscrJC65ZvB5IA59xNra2QbaLzM9diEG0UktQ6qbhoqY6eMwyRFly1o5TbF+ryQdQRppZdjEMfma2SGgopXzNppKh3DHgSxo0Fg4aknduGm9BvIvKQ7TvpaISTnhpJHxxh00jYo2k0zZTqG6X10N9TzBI9oMSnraURQZBUVELZIpngcG18Bkyts299Nb84tuOgs9Wiw9oXVZdBBh9dUw11RdkUcYYWD0pH3aTZoPSLmw3lZldiWIx4jxNtVWOa2t4AmmjjMrmila/wD1C3lEk+1Cz16Lz9XXYzQ7JwVEkcTsRzRMkDyGjlSBvMCL2IvbQEm25XRY/I+tja+iyUstS+jbMJQTwjb35NvJu1wBvfS9rFBtIsx+KTuxaSjpqPh2QcHw8hlDC3Pe1gRyrAXOo9Vys5+1jo6E1kmHuEMtNJVU1pQXStZbRwtySQQRv9dig9Ii85Nj2InEaakZRRRSCtbBODNmBY6IvBacu/TX1i3PdUQ7VTRUQfxSSqZFAKiaWSVrXBplezQBtiRlvzaetCz1SLDm2mip4RNLTvEeaqDiHXIEGa59d8v3rsYNi78UEokpHU7ow03u4tcHA7iWt1FtRbo11QaiIilAiIgLPrfO29j8ytBZ9b523sfmVWrJMIBSUQpKi7rFVv8AJPsREUbUHm8fZHwViItIQIiKQREQZMOzeEwRvjjpSI3MyGMyvLbXBtlJsNy7UuF0U03DPgBk4Zs+YEg5w3KHXB9HT2IiCpmBYbHwuWlaBI4OLczsoIdmFhezeUL6WVO1Iz7M1kR8mYNhdp/pe8NP3EoiSlfVYJhtY6Iz0jH8C3g2jUDKDo0gb26bjcKMuA4ZNXuq5KNjp3EuLrm1y3ITa9rlptffZERCraGCOPY/EIGNDYm0j2Bo3AZbW7ldT4HhtLYxUjWkSNlDiSTmAIBuTfQEgDcLoiCVVg2H1mcz0zXF8nCOcHFrs2UNvcG45IA9YUZMIoGTsqmUzWSwsAYWEtAyjk3aDY25rg2REEqXDaVmFUtKY88cOR7cxucwOYOPrvqq6nZ/CqrPw1Gx2cvz8pwz5jdwNjqCdbHREQdhmG0ccrZG07Q9spmB10eW5S725dFS3A8NZJA9lKGGANazK5wFgbgEA8qxJIveyIgliGDYfibr1lM2Y5DGbkjM0/6TY6j1FWHDaMuzGnYTw3D8/wDmZcub220REFVBgmHYbOZqSlbDIWcHmBJs298oudADuA0C5iwbD4a8VcdM1s7S5zXZjZpd5Vhewvz2GqIgOwbD3YmK80rDUgh2fXygLB1t2a2l7XXOIYRQYmWGspmzFjXNBJI5J3tNjqD0HREQeY23igwfDqSqpYGtc2oHJzOaCeCyA3aQ4ENaBoRu1utrCsMparBaKepYZ55GQzvme453Pa0AOuLa209m9EUJ+DtV2CYfX1YqqiBzpwzgw9sr2HLe9uSRzq2PC6KKZkrKdoka7OHEknNkDL6nflACIpQtrKSCupJKapjEkMgs5pJHPcajdqF14sGw+LEOOMpWiouTmuTqRYute2YjQneURBKowqhqa6Ormp2vnjy2dci9jdtwDY2Oovex3Kluz+FN4xaijtO1zHi5tlJuQBfkgnUgWREF02FUU8xlkp2mR0rJi8Eg52izTcHmGnsURguHCGSIUkfByRcC5uurMxdbvcT9aIgi3AcLFe+r4nGZnl5JJJHLFn6E2Gbn01V1Bh1Lh0bmUsZja4gm73O3Cw3k6epEQdtERAREQFn1vnbex+aIq1ZJhAKSIqLv/9k=",
  radar: "data:image/jpeg;base64,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DcJsDAEO4NwmwMAQ7g3CbAwBDuDcJsDAEO4NwmwMBEO4Z3CXAwBGomyibYM4AxgykMGcAEZAAAAAMAAYwMGQBjAwZAGMDBkAYwMGQBjAwZAGMDBkAYwMGQBjAwZAGMDBkAYwMGQBjAwZAGMDBkAYwMGQBjAwZAGMDBkAYwMGQBjAwZAGMDBkAYwMGQBjAwZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==",
  results: "data:image/jpeg;base64,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",
};
const HIW_STEPS = [
  { img: "home",    eyebrow: "Step 1", title: "Set your budget", sub: "Pick a service and name the price you want to pay." },
  { img: "bid",     eyebrow: "Step 2", title: "The AI Coach guides you", sub: "See the local average and your odds, live as you bid." },
  { img: "radar",   eyebrow: "Step 3", title: "Nearby pros get pinged", sub: "Your bid broadcasts to matching businesses around you." },
  { img: "results", eyebrow: "Step 4", title: "Pros compete — you pick", sub: "Compare who accepted by rating, then book & chat." },
];
function HowItWorks() {
  const { lang } = useLang(); const t = tFor(lang);
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setI(p => (p + 1) % HIW_STEPS.length), 2600);
    return () => clearTimeout(id);
  }, [i, paused]);
  const step = HIW_STEPS[i];
  return (
    <div className="lb-hiw" id="lb-how">
      <div className="lb-hiw-head">
        <div className="lb-hiw-eyebrow">{t("See how it works")}</div>
        <div className="lb-hiw-title">{t("Set Your Budget.")} <span className="hl">{t("Choose Your Business.")}</span></div>
      </div>
      <div className="lb-hiw-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="lb-hiw-phone">
          {HIW_STEPS.map((s, k) => (
            <img key={s.img} src={HIW_SHOTS[s.img]} alt="" className={"lb-hiw-img" + (k === i ? " on" : "")} />
          ))}
        </div>
        <div className="lb-hiw-cap" key={i}>
          <div className="lb-hiw-step">{t(step.eyebrow)}</div>
          <div className="lb-hiw-st">{t(step.title)}</div>
          <div className="lb-hiw-ss">{t(step.sub)}</div>
        </div>
        <div className="lb-hiw-dots">
          {HIW_STEPS.map((_, k) => (
            <button key={k} className={"lb-hiw-dot" + (k === i ? " on" : "")} onClick={() => { setI(k); setPaused(true); }} aria-label={"Step " + (k + 1)} />
          ))}
        </div>
      </div>
    </div>
  );
}
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
    case "massage": return (
      <svg {...S}>
        <defs><linearGradient id="lgMas" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9b87d6" /><stop offset="100%" stopColor="#6a55a8" /></linearGradient></defs>
        <g className="lgA an-bob">
          <circle cx="24" cy="15" r="5" fill="url(#lgMas)" />
          <path d="M12 38c0-7 5.4-12 12-12s12 5 12 12Z" fill="url(#lgMas)" />
          <path d="M9 25c2.5-1.6 4.5-1.6 7 0M32 25c2.5-1.6 4.5-1.6 7 0" stroke="#c9b8f0" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
        <g className="lgA an-rise"><circle cx="24" cy="9" r="1.8" fill="#c9b8f0" /></g>
      </svg>);
    case "towing": return (
      <svg {...S}>
        <defs><linearGradient id="lgTow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5a623" /><stop offset="100%" stopColor="#d2691e" /></linearGradient></defs>
        <g className="lgA an-bob">
          <path d="M6 30v-7h11l3-5h6v12Z" fill="url(#lgTow)" />
          <rect x="26" y="14" width="3" height="16" rx="1.5" fill="#6b5b3a" />
          <path d="M29 16h8l-2 6h-6Z" fill="#5b6b7a" />
        </g>
        <circle cx="12" cy="33" r="3.6" fill="#241d16" /><circle cx="23" cy="33" r="3.6" fill="#241d16" />
        <circle cx="12" cy="33" r="1.4" fill="#9aa7b0" /><circle cx="23" cy="33" r="1.4" fill="#9aa7b0" />
      </svg>);
    case "moving": return (
      <svg {...S}>
        <defs><linearGradient id="lgBox" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d6a25b" /><stop offset="100%" stopColor="#b5651d" /></linearGradient></defs>
        <g className="lgA an-bob">
          <path d="M10 18l14-5 14 5-14 5Z" fill="#e8c594" />
          <path d="M10 18v15l14 5V23Z" fill="url(#lgBox)" />
          <path d="M38 18v15l-14 5V23Z" fill="#9a5318" />
          <path d="M19 15.4v6l4 1.4v-6Z" fill="#8a4d18" />
        </g>
      </svg>);
    case "roofing": return (
      <svg {...S}>
        <defs><linearGradient id="lgRoof" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c0563a" /><stop offset="100%" stopColor="#8a3b22" /></linearGradient></defs>
        <g className="lgA an-bob">
          <path d="M24 9 6 23h6l12-9 12 9h6Z" fill="url(#lgRoof)" />
          <rect x="13" y="23" width="22" height="14" fill="#e0d6c4" />
          <rect x="20" y="28" width="8" height="9" fill="#9a5318" />
        </g>
      </svg>);
    case "windows": return (
      <svg {...S}>
        <defs><linearGradient id="lgWin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9fd6ef" /><stop offset="100%" stopColor="#4a9ed0" /></linearGradient></defs>
        <g className="lgA an-bob">
          <rect x="12" y="11" width="24" height="26" rx="2" fill="#6b7f8c" />
          <rect x="15" y="14" width="18" height="20" rx="1" fill="url(#lgWin)" />
          <line x1="24" y1="14" x2="24" y2="34" stroke="#fffdf8" strokeWidth="2" />
          <line x1="15" y1="24" x2="33" y2="24" stroke="#fffdf8" strokeWidth="2" />
        </g>
        <g className="lgA an-sweep"><rect x="16" y="14" width="4" height="20" fill="#fff" opacity=".45" /></g>
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

function predict(bid, service, radius, zip) {
  const n = bizCount(radius);
  const chance = perProChance(bid, service.typical * zipMultiplier(zip));
  const accepts = Math.max(0, Math.round(n * chance));
  let label, color;
  if (chance < 0.22) { label = "Low chance"; color = "var(--red)"; }
  else if (chance < 0.48) { label = "Fair chance"; color = "#cf8a00"; }
  else if (chance < 0.72) { label = "Strong chance"; color = "var(--green)"; }
  else { label = "Very strong"; color = "var(--green)"; }
  return { n, chance, accepts, label, color };
}

/* ----- National ZIP-based market multiplier -----
   Base service prices below are NATIONAL midpoints (US average = 1.00).
   The coach adjusts each price to the customer's location with a cascade:
     1) explicit metro factor by ZIP3 (first 3 digits identify a metro/region)
     2) else the state average (ZIP3 maps to state)
     3) else national baseline (1.00)
   This is the honest, scalable way to do location pricing — there is no
   public per-ZIP-per-service price data for 41,000 ZIPs, so (as Thumbtack/
   Angi do) we anchor a researched national base and shift it by a regional
   cost factor derived from cost-of-living indices. See pricing-research doc.

   ZIP3 = the first three digits of a 5-digit ZIP (the USPS sectional center).
   A few hundred ZIP3 prefixes cover the whole country, so every ZIP a
   customer types resolves to a real local factor. */

// Explicit metro factors keyed on ZIP3 (high- and low-cost areas worth pinning).
const METRO_MULT = {
  // — very high cost metros —
  "100": 1.32, "101": 1.32, "102": 1.32, "104": 1.28, "103": 1.24, // NYC / Bronx
  "070": 1.22, "071": 1.20, "072": 1.20, "073": 1.20, // northern NJ
  "112": 1.30, "111": 1.28, "113": 1.26, "114": 1.24, "116": 1.24, // Brooklyn/Queens
  "941": 1.40, "940": 1.34, "943": 1.42, "944": 1.34, "945": 1.30, "946": 1.30, "947": 1.32, // SF Bay
  "900": 1.26, "902": 1.26, "904": 1.26, "905": 1.22, "906": 1.20, "907": 1.22, "908": 1.22, // LA
  "981": 1.26, "980": 1.22, // Seattle
  "021": 1.28, "022": 1.28, "024": 1.24, "020": 1.22, // Boston
  "200": 1.30, "201": 1.22, "220": 1.18, "222": 1.18, // DC / N. Virginia
  "606": 1.18, "604": 1.12, "605": 1.12, // Chicago
  "330": 1.04, "331": 1.10, "332": 1.06, "333": 1.08, // Miami / Fort Lauderdale metro
  "088": 1.18, "089": 1.16, // central NJ
  // — above-average metros —
  "850": 1.06, "852": 1.04, // Phoenix
  "800": 1.10, "802": 1.10, "803": 1.08, // Denver
  // — below-average / rural anchors —
  "359": 0.86, "358": 0.86, // rural AL
  "388": 0.84, "387": 0.85, // rural MS
  "247": 0.85, "248": 0.85, // rural WV
  "716": 0.86, "717": 0.86, // rural AR
};

// State-average cost factor (cost-of-living anchored; US avg = 1.00).
const STATE_MULT = {
  AL:0.90, AK:1.18, AZ:1.02, AR:0.88, CA:1.30, CO:1.08, CT:1.14, DE:1.02,
  FL:1.00, GA:0.95, HI:1.40, ID:0.98, IL:1.02, IN:0.92, IA:0.92, KS:0.90,
  KY:0.92, LA:0.93, ME:1.06, MD:1.14, MA:1.26, MI:0.95, MN:1.02, MS:0.86,
  MO:0.92, MT:1.00, NE:0.92, NV:1.04, NH:1.12, NJ:1.18, NM:0.95, NY:1.24,
  NC:0.96, ND:0.96, OH:0.92, OK:0.89, OR:1.14, PA:1.00, RI:1.12, SC:0.96,
  SD:0.94, TN:0.92, TX:0.98, UT:1.02, VT:1.10, VA:1.04, WA:1.16, WV:0.90,
  WI:0.96, WY:0.98, DC:1.30,
};

// Map a ZIP3 prefix to its state (USPS ZIP-prefix → state ranges).
function stateForZip3(z3) {
  const n = parseInt(z3, 10);
  if (isNaN(n)) return null;
  const R = [
    [["005","005"],"NY"],[["006","009"],"PR"],[["010","027"],"MA"],[["028","029"],"RI"],
    [["030","038"],"NH"],[["039","049"],"ME"],[["050","059"],"VT"],[["060","069"],"CT"],
    [["070","089"],"NJ"],[["100","149"],"NY"],[["150","196"],"PA"],[["197","199"],"DE"],
    [["200","205"],"DC"],[["206","219"],"MD"],[["220","246"],"VA"],[["247","268"],"WV"],
    [["270","289"],"NC"],[["290","299"],"SC"],[["300","319"],"GA"],[["320","349"],"FL"],
    [["350","369"],"AL"],[["370","385"],"TN"],[["386","397"],"MS"],[["398","399"],"GA"],
    [["400","427"],"KY"],[["430","459"],"OH"],[["460","479"],"IN"],[["480","499"],"MI"],
    [["500","528"],"IA"],[["530","549"],"WI"],[["550","567"],"MN"],[["570","577"],"SD"],
    [["580","588"],"ND"],[["590","599"],"MT"],[["600","629"],"IL"],[["630","658"],"MO"],
    [["660","679"],"KS"],[["680","693"],"NE"],[["700","714"],"LA"],[["716","729"],"AR"],
    [["730","749"],"OK"],[["750","799"],"TX"],[["800","816"],"CO"],[["820","831"],"WY"],
    [["832","838"],"ID"],[["840","847"],"UT"],[["850","865"],"AZ"],[["870","884"],"NM"],
    [["889","898"],"NV"],[["900","961"],"CA"],[["967","968"],"HI"],[["970","979"],"OR"],
    [["980","994"],"WA"],[["995","999"],"AK"],
  ];
  for (const [[lo, hi], st] of R) {
    if (n >= parseInt(lo, 10) && n <= parseInt(hi, 10)) return st;
  }
  return null;
}

function zipMultiplier(zip) {
  if (!zip || zip.length < 3) return 1.00;          // national baseline
  const z3 = zip.slice(0, 3);
  if (METRO_MULT[z3] != null) return METRO_MULT[z3]; // 1) explicit metro
  const st = stateForZip3(z3);
  if (st && STATE_MULT[st] != null) return STATE_MULT[st]; // 2) state average
  return 1.00;                                       // 3) national baseline
}
function zipArea(zip) {
  // human label for the coach note
  if (!zip || zip.length < 3) return null;
  const z3 = zip.slice(0, 3);
  if (METRO_MULT[z3] != null) return zip;
  return stateForZip3(z3) || null;
}

function aiRecommend(service, radius, zip) {
  const mult = zipMultiplier(zip);
  const avg = Math.round(service.typical * mult);
  const n = bizCount(radius);
  // aim for ~half of reachable pros to accept: enough real choice, still a deal
  const target = Math.max(2, Math.round(n * 0.5));
  const chanceNeeded = Math.min(0.85, Math.max(0.12, target / n));
  const ratio = chanceNeeded + 0.35;
  return {
    avg, n, mult,
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
  const [locPref, setLocPref] = useState("business"); // home | business — only asked for "either" categories
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
    setPrice(String(aiRecommend(service, radius, zip).recommended));
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
    const locContext = cat.loc === "either" ? locPref : (cat.loc === "mobile" ? "home" : "business");
    const list = makeBusinesses(cat, Number(price), service.typical, radius, locContext);
    const jobId = Date.now();
    setActiveJobId(jobId);
    setMyJobs(prev => [{
      id: jobId, when: jobId, catId: cat.id, color: cat.color, Icon: cat.icon,
      serviceName: service.name, serviceId: service.id, price: Number(price),
      radius, zip, tags, locPref: locContext, status: "live", accepted: [], bookedBiz: null, messages: [],
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

  function reset() { clearTimers(); setScreen("home"); setCat(null); setService(null); setDetails({}); setPrice(""); setBusinesses([]); setSelected(null); setBooked(false); setMessages([]); setDots([]); setActiveJobId(null); setLocPref("business"); }

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
              <h1 className="lb-display">{t("Set Your Budget.")}<br /><span className="hl">{t("Choose Your Business.")}</span></h1>
              <p>{t("Choose a service, tell us exactly what you need, and name your price. We broadcast your bid to local businesses — they accept or pass, and you pick who you like best.")}</p>
              <div className="lb-steps">
                <span className="lb-chip"><b>1</b> {t("Choose service")}</span>
                <span className="lb-chip"><b>2</b> {t("Bid your price")}</span>
                <span className="lb-chip"><b>3</b> {t("Pros respond")}</span>
                <span className="lb-chip"><b>4</b> {t("Chat & book")}</span>
              </div>
              <button className="lb-hiw-nudge" onClick={() => { const el = document.getElementById("lb-how"); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" }); }}>
                {t("See how it works")} <span className="arr">↓</span>
              </button>
            </div>
            <div className="lb-sec-h">{t("Pick a category")}</div>
            <div className="lb-grid">
              {CATEGORIES.map(c => (
                <button key={c.id} className="lb-cat" onClick={() => { setCat(c); setService(null); setDetails({}); setLocPref(c.loc === "mobile" ? "home" : "business"); setScreen("service"); }}>
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

            <HowItWorks />

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

              <AICoach service={service} radius={radius} price={price} setPrice={setPrice} zip={zip} />

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

              {cat && cat.loc === "either" && (
                <div className="lb-field">
                  <label className="lb-label">{t("Where do you want the service?")}</label>
                  <div className="lb-multi">
                    <button className={`lb-mchip ${locPref === "home" ? "on" : ""}`} onClick={() => setLocPref("home")}>
                      <Home size={13} /> {t("At my home")}
                    </button>
                    <button className={`lb-mchip ${locPref === "business" ? "on" : ""}`} onClick={() => setLocPref("business")}>
                      <Building2 size={13} /> {t("At the business")}
                    </button>
                  </div>
                  <div className="lb-price-note" style={{ marginTop: 6 }}>
                    {locPref === "home" ? t("Only pros who travel to you will get this bid.") : t("Only pros at their own location will get this bid.")}
                  </div>
                </div>
              )}

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

function AICoach({ service, radius, price, setPrice, zip }) {
  const { lang } = useLang(); const t = tFor(lang);
  const ai = aiRecommend(service, radius, zip);
  const bid = Number(price);
  const pred = bid > 0 ? predict(bid, service, radius, zip) : null;
  return (
    <div className="lb-ai">
      <div className="lb-ai-head"><Wand2 size={15} /> {t("AI Bid Coach")}</div>
      <div className="lb-ai-sub">
        {t("From")} <b>{t(service.name)}</b> {t("jobs near you, the average price is about")} <b>${ai.avg.toLocaleString()}</b>{t(". Your radius of")} <b>{radius}</b> {t("miles reaches roughly")} <b>{ai.n}</b> {t("pros — the sweet spot for strong responses while still saving:")}
        {zip && zip.length >= 3 && ai.mult !== 1 && (
          <span style={{ display: "block", marginTop: 4, color: "var(--ink-soft)", fontSize: 12 }}>
            <MapPin size={11} style={{ verticalAlign: "-1px" }} /> {t("Adjusted for local prices in")} {zipArea(zip) || zip} ({ai.mult > 1 ? "+" : ""}{Math.round((ai.mult - 1) * 100)}%)
          </span>
        )}
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
          <div className="c-n">~{predict(ai.low, service, radius, zip).accepts} {t("accept")}</div>
        </button>
        <button className="lb-ai-chip" onClick={() => setPrice(String(ai.high))}>
          <div className="c-t">⚡ {t("Book fast")}</div>
          <div className="c-p">${ai.high.toLocaleString()}</div>
          <div className="c-n">~{predict(ai.high, service, radius, zip).accepts} {t("accept")}</div>
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
  const [serviceMode, setServiceMode] = useState("shop"); // shop | mobile | both — only matters for "either" categories
  const [logo, setLogo] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const set = (k, v) => setF(s => ({ ...s, [k]: v }));
  const back = () => onBack ? onBack() : setRole(null);
  const readImg = readImageFile;

  function open(r, t) { setRole(r); setTab(t); setCats([]); setServiceMode("shop"); setLogo(null); setPhotos([]); setAgreed(false); setShowPolicy(false); setF({ name: "", email: "", phone: "", zip: "", pw: "", bizName: "", bio: "", years: "", radius: 12 }); }

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
        ? { name: f.bizName, owner: f.name, email: f.email, phone: f.phone, cats, serviceMode, zip: f.zip, radius: Number(f.radius), bio: f.bio, years: f.years, logo, photos, plan: "free", rating: +(4.4 + Math.random() * 0.5).toFixed(1) }
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

        {isSignup && isBiz && cats.some(id => (CATEGORIES.find(c => c.id === id) || {}).loc === "either") && (
          <div className="lb-field">
            <label className="lb-label">{t("Where do you serve customers?")} <span className="lb-hint">{t("— for services that can be mobile or in-shop")}</span></label>
            <div className="lb-multi">
              {[["shop", t("At my shop / location")], ["mobile", t("I travel to the customer")], ["both", t("Both")]].map(([val, label]) => (
                <button key={val} className={`lb-mchip ${serviceMode === val ? "on" : ""}`} onClick={() => setServiceMode(val)}>
                  {serviceMode === val ? <Check size={13} /> : null} {label}
                </button>
              ))}
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
  const mode = (profile && profile.serviceMode) || "shop"; // shop | mobile | both
  const out = []; let id = 0;
  const total = cats.length ? 6 + Math.floor(Math.random() * 4) : 0;
  for (let i = 0; i < total; i++) {
    const catId = rand(cats);
    const cat = CATEGORIES.find(c => c.id === catId);
    if (!cat) continue;
    const service = rand(cat.services);
    // decide the location need of this incoming lead
    let need; // "home" (mobile), "business" (in-shop), or null (n/a)
    if (cat.loc === "mobile") need = "home";
    else if (cat.loc === "fixed" || cat.loc === "remote") need = "business";
    else { // "either" — generate a need this business can actually serve
      if (mode === "mobile") need = "home";
      else if (mode === "shop") need = "business";
      else need = Math.random() < 0.5 ? "home" : "business";
    }
    const avg = service.typical;
    const price = roundNice(avg * (0.62 + Math.random() * 0.55));
    out.push({
      id: id++, catName: cat.name, color: cat.color, Icon: cat.icon,
      serviceName: service.name, fields: fillFields(service), need,
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
                  {b.need === "home" && <span style={{ color: "var(--accent-deep)", fontWeight: 700 }}><Home size={12} /> {t("At customer's home")}</span>}
                  {b.need === "business" && <span style={{ color: "var(--ink-soft)", fontWeight: 700 }}><Building2 size={12} /> {t("At your location")}</span>}
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
