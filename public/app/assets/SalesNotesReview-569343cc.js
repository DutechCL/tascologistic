import{x as nl,_ as tl,D as ol,S as il,o as v,c as z,f as n,J as rl,I as t,P as al,Q as sl,W as ql,b as m,h as J,p as dl,i as R,w,a,u as s,q as Y,s as V,j as cl,g as N,l as pl,m as ul,X as bl,Y as I,r as L,t as O,F as K,n as Q,k as ml,v as fl}from"./index-48459986.js";import{s as f,b as j,a as E}from"./tag.esm-fef9b72a.js";import{s as A}from"./treeselect.esm-866694c3.js";import{g as hl,u as gl}from"./OrdersApiService-73b58d8f.js";import"./index.esm-79b0ffa5.js";var kl=`
/*!
 * Quill Editor v1.3.3
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`,wl={root:"p-editor-container",toolbar:"p-editor-toolbar",formats:"ql-formats",header:"ql-header",font:"ql-font",bold:"ql-bold",italic:"ql-italic",underline:"ql-underline",color:"ql-color",background:"ql-background",list:"ql-list",select:"ql-align",link:"ql-link",image:"ql-image",codeBlock:"ql-code-block",clean:"ql-clean",content:"p-editor-content"},vl=nl(kl,{name:"editor",manual:!0}),yl=vl.load,xl={name:"BaseEditor",extends:il,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},css:{classes:wl,loadStyle:yl},provide:function(){return{$parentInstance:this}}};function S(l){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(l)}function D(l,e){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);e&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(l,c).enumerable})),o.push.apply(o,i)}return o}function zl(l){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?D(Object(o),!0).forEach(function(i){Sl(l,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):D(Object(o)).forEach(function(i){Object.defineProperty(l,i,Object.getOwnPropertyDescriptor(o,i))})}return l}function Sl(l,e,o){return e=Cl(e),e in l?Object.defineProperty(l,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[e]=o,l}function Cl(l){var e=Pl(l,"string");return S(e)==="symbol"?e:String(e)}function Pl(l,e){if(S(l)!=="object"||l===null)return l;var o=l[Symbol.toPrimitive];if(o!==void 0){var i=o.call(l,e||"default");if(S(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(l)}var F=function(){try{return window.Quill}catch{return null}}(),G={name:"Editor",extends:xl,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(e,o){e!==o&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(e))}},mounted:function(){var e=this,o={modules:zl({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};F?(this.quill=new F(this.$refs.editorElement,o),this.initQuill(),this.handleLoad()):tl(()=>import("./quill-004ce045.js").then(i=>i.q),[]).then(function(i){i&&ol.isExist(e.$refs.editorElement)&&(i.default?e.quill=new i.default(e.$refs.editorElement,o):e.quill=new i(e.$refs.editorElement,o),e.initQuill())}).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){this.quill&&(e?this.quill.setContents(this.quill.clipboard.convert(e)):this.quill.setText(""))},initQuill:function(){var e=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(o,i,c){if(c==="user"){var d=e.$refs.editorElement.children[0].innerHTML,h=e.quill.getText().trim();d==="<p><br></p>"&&(d=""),e.$emit("update:modelValue",d),e.$emit("text-change",{htmlValue:d,textValue:h,delta:o,source:c,instance:e.quill})}}),this.quill.on("selection-change",function(o,i,c){var d=e.$refs.editorElement.children[0].innerHTML,h=e.quill.getText().trim();e.$emit("selection-change",{htmlValue:d,textValue:h,range:o,oldRange:i,source:c,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})}}};function Vl(l,e,o,i,c,d){return v(),z("div",t({class:l.cx("root")},l.ptm("root"),{"data-pc-name":"editor"}),[n("div",t({ref:"toolbarElement",class:l.cx("toolbar")},l.ptm("toolbar")),[rl(l.$slots,"toolbar",{},function(){return[n("span",t({class:l.cx("formats")},l.ptm("formats")),[n("select",t({class:l.cx("header"),defaultValue:"0"},l.ptm("header")),[n("option",t({value:"1"},l.ptm("option")),"Heading",16),n("option",t({value:"2"},l.ptm("option")),"Subheading",16),n("option",t({value:"0"},l.ptm("option")),"Normal",16)],16),n("select",t({class:l.cx("font")},l.ptm("font")),[n("option",al(sl(l.ptm("option"))),null,16),n("option",t({value:"serif"},l.ptm("option")),null,16),n("option",t({value:"monospace"},l.ptm("option")),null,16)],16)],16),n("span",t({class:l.cx("formats")},l.ptm("formats")),[n("button",t({class:l.cx("bold"),type:"button"},l.ptm("bold")),null,16),n("button",t({class:l.cx("italic"),type:"button"},l.ptm("italic")),null,16),n("button",t({class:l.cx("underline"),type:"button"},l.ptm("underline")),null,16)],16),(v(),z("span",t({key:c.reRenderColorKey,class:l.cx("formats")},l.ptm("formats")),[n("select",t({class:l.cx("color")},l.ptm("color")),null,16),n("select",t({class:l.cx("background")},l.ptm("background")),null,16)],16)),n("span",t({class:l.cx("formats")},l.ptm("formats")),[n("button",t({class:l.cx("list"),value:"ordered",type:"button"},l.ptm("list")),null,16),n("button",t({class:l.cx("list"),value:"bullet",type:"button"},l.ptm("list")),null,16),n("select",t({class:l.cx("select")},l.ptm("select")),[n("option",t({defaultValue:""},l.ptm("option")),null,16),n("option",t({value:"center"},l.ptm("option")),null,16),n("option",t({value:"right"},l.ptm("option")),null,16),n("option",t({value:"justify"},l.ptm("option")),null,16)],16)],16),n("span",t({class:l.cx("formats")},l.ptm("formats")),[n("button",t({class:l.cx("link"),type:"button"},l.ptm("link")),null,16),n("button",t({class:l.cx("image"),type:"button"},l.ptm("image")),null,16),n("button",t({class:l.cx("codeBlock"),type:"button"},l.ptm("codeBlock")),null,16)],16),n("span",t({class:l.cx("formats")},l.ptm("formats")),[n("button",t({class:l.cx("clean"),type:"button"},l.ptm("clean")),null,16)],16)]})],16),n("div",t({ref:"editorElement",class:l.cx("content"),style:l.editorStyle},l.ptm("content")),null,16)],16)}G.render=Vl;const $l=ql("problems",{state:()=>({listProblems:[]}),getters:{problems:l=>l.listProblems},actions:{async getProblems(){const l=await hl("api/v1/problems");return this.listProblems=l,l}}}),Ol=n("h1",{class:"mb-3 text-primary-900 font-inter font-semibold text-xl"},[n("i",{class:"pi pi-info-circle !text-xl rotate-180"}),N(" Reportar problema ")],-1),El=n("p",{class:"mb-3"},"Por favor indique uno o más problemas detectados",-1),Rl={key:0,class:"mt-4"},Nl=n("p",{class:"mb-3"},"Por favor indique el problema detectado",-1),jl={__name:"DialogReportProblem",props:{product:Object},setup(l,{emit:e}){const o=l,i=$l(),c=m([]);J(async()=>{c.value=await i.getProblems()});const d=m([]),h=m(!1),y=()=>{e("visible-report",{visibleReport:!1})};return dl(d,k=>{h.value=k.some(u=>u.problemDetected==="Otros");let p=o.product;p.problems=k,console.log(p),e("selection-change",{product:p})}),(k,p)=>(v(),R(s(cl),{modal:"",header:" ",style:{width:"70vw"}},{default:w(()=>[n("div",null,[Ol,El,a(s(j),{selection:d.value,"onUpdate:selection":p[0]||(p[0]=u=>d.value=u),value:c.value,dataKey:"id",tableStyle:"min-width: 50rem"},{default:w(()=>[a(s(f),{headerClass:"!bg-primary-900",header:"Seleccionar",selectionMode:"multiple",headerStyle:"width: 3rem"}),a(s(f),{headerClass:"!bg-primary-900",field:"title",header:"Problema detectado"})]),_:1},8,["selection","value"]),h.value?(v(),z("div",Rl,[Nl,a(s(G),{modelValue:k.value,"onUpdate:modelValue":p[1]||(p[1]=u=>k.value=u),editorStyle:"height: 80px"},null,8,["modelValue"])])):Y("",!0)]),a(s(V),{label:"Cerrar",onClick:y,class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},Tl={class:"px-8"},Hl={class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},Ml=n("i",{class:"pi pi-inbox !text-xl"},null,-1),Ul=n("div",{class:"flex align-center mb-2"},null,-1),Bl={class:"flex"},Il={class:"card flex justify-content-center"},Ll={class:"card flex justify-content-center"},Kl={class:"mini-table mt-8"},Ql={class:"mt-8 flex float-right"},Al=n("div",{class:"space"},null,-1),Wl={__name:"SalesNotesReview",setup(l){const e=pl(),o=ul(),i=gl(),c=bl(),d=I(()=>c.params.id),h=I(()=>c.params.responsible),y=m([]),k=m([]),p=m([]),u=m({}),x=m({}),C=m(!1),P=m([]),T=m([]),H=new Set,W=new Set;J(async()=>{y.value=await i.showOrder(d.value),p.value=y.value.order_items;let r={update_status:!0,responsible:h.value};await i.updateOrder(d.value,r)});const M=(r,b)=>{if(r.id){let g;b=="complete"?(g=H.add(r),u.value[r.id]=!u.value[r.id],x.value[r.id]=!1):(g=H.delete(r),x.value[r.id]=!x.value[r.id],u.value[r.id]=!1,C.value=!0,k.value=r),T.value=Array.from(g)}},X=r=>{C.value=r.visibleReport},_=r=>{let b=W.add(r.product);P.value=Array.from(b)},Z=async()=>{e.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let r=T.value.length==p.value.length,b={orderId:d.value,isSuccessOrder:r,responsible:h.value,orderItemsProblem:P.value??[]},g=await i.processOrderPickerAndReviewer(b);g.status=="success"&&(o.add({severity:g.status,summary:"",detail:g.message,life:3e3}),setTimeout(()=>{window.location.href="/app/autorizador/pickeo-revision"},1e3))},reject:()=>{}})};return(r,b)=>{var U,B;const g=L("router-link"),ll=L("Toast");return v(),z(K,null,[n("div",Tl,[n("h1",Hl,[Ml,N(" Nota de venta N° "+O(y.value.DocNum)+" ",1),a(s(E),{icon:"pi pi-shopping-cart",value:(U=y.value.method_shipping)==null?void 0:U.name,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),Ul,a(s(E),{icon:"pi pi-user",value:(B=y.value.customer)==null?void 0:B.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),n("div",Bl,[n("div",Il,[a(s(A),{modelValue:r.selectedValue,"onUpdate:modelValue":b[0]||(b[0]=q=>r.selectedValue=q),options:r.nodes,selectionMode:"checkbox",placeholder:"Cantidad",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),n("div",Ll,[a(s(A),{modelValue:r.selectedValue,"onUpdate:modelValue":b[1]||(b[1]=q=>r.selectedValue=q),options:r.nodes,selectionMode:"checkbox",placeholder:"SKU",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),a(s(j),{tableStyle:"min-width: 50rem",filters:"filters",value:p.value},{default:w(()=>[a(s(f),{headerClass:"!bg-primary-900",field:"date",header:"Cantidad"},{body:w(q=>[n("p",null,O(q.data.qty)+" "+O(q.data.Quantity),1)]),_:1}),a(s(f),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(s(f),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),a(s(f),{headerClass:"!bg-primary-900",field:"ubication",header:"Ubicación"}),a(s(f),{headerClass:"!bg-primary-900",field:"id",header:""},{body:w(q=>[a(s(V),{icon:"pi pi-check-circle",onClick:$=>M(q.data,"complete"),label:"Completado",class:Q({"!py-2.5 !bg-green-300 !border-green-300 !text-white !mr-5":u.value[q.data.id],"!py-2.5 !border-primary-900 !text-primary-900 mr-5":!u.value[q.data.id]}),outlined:!u.value[q.data.id]},null,8,["onClick","class","outlined"]),a(s(V),{icon:"pi pi-info-circle rotate-180",onClick:$=>M(q.data,"problem"),label:"Problema",class:Q({"!py-2.5 !bg-red-300 !border-red-300 !text-white !mr-5":x.value[q.data.id],"!py-2.5 !border-primary-900 !text-primary-900 mr-5":!x.value[q.data.id]}),outlined:!x.value[q.data.id]},null,8,["onClick","class","outlined"])]),_:1})]),_:1},8,["value"]),n("div",Kl,[P.value.length>0?(v(),R(s(j),{key:0,tableStyle:"min-width: 50rem",filters:"filters",value:P.value},{default:w(()=>[a(s(f),{headerClass:"!bg-secundary-300",field:"ItemCode",header:"SKU"}),a(s(f),{headerClass:"!bg-secundary-300",field:"ItemDescription",header:"Producto"}),a(s(f),{headerClass:"!bg-secundary-300",field:"problems",header:"Problema"},{body:w(q=>[(v(!0),z(K,null,ml(q.data.problems,($,el)=>(v(),R(s(E),{key:el,value:$.title,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"])):Y("",!0)]),n("div",Ql,[a(g,{to:{name:"pickup-review"},class:"mr-3 p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:w(()=>[N("Cancelar")]),_:1}),a(s(V),{onClick:Z,label:"Finalizar pedido",class:"!py-1.5 !border-none !px-10 !bg-primary-900 float-right"})])]),Al,a(jl,{visible:C.value,"onUpdate:visible":b[2]||(b[2]=q=>C.value=q),product:k.value,onSelectionChange:_,onVisibleReport:X},null,8,["visible","product"]),a(ll),a(s(fl))],64)}}};export{Wl as default};
