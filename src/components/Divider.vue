<template>
    <div class="divider line one-line w-180 myCenter <md:invisible">      

        <img src="https://i.ibb.co/FxHjyzh/Tech.png" alt="Tech" width="30"/> 
    
    </div>
</template>
<style>
/* // Base Divider class */
.divider {
  display: flex;

  &:before,
  &:after {
    content: "";
    flex: 1;
  }
}

// Base line
.line {
  align-items: center;
  margin: 1em -1em;
  
  &:before,
  &:after {
    height: 1px;
    margin: 0 1em;
  }
}


  .one-line {
    &:before,
    &:after {
      background: black;
    }
  }
.myCenter{
    margin-left:auto;
    margin-right:auto;
}
</style>