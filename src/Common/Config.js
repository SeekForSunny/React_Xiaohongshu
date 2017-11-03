/**
 * Created by SMART on 2017/4/22.
 */

//屏幕尺寸相关
import Dimensions from 'Dimensions';
export const SCREEN_WIDTH = Dimensions.get("window").width
export const SCREEN_HEIGHT = Dimensions.get("window").height
export const SCREEN_SCALE = SCREEN_WIDTH/375

//导航栏红色
export const NAV_BAR_COLOR = "#F53D4F"

//间隙
export  const NORMAL_MARGIN = 10*SCREEN_SCALE