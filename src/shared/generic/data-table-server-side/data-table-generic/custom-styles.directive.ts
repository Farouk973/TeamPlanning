import { Directive,HostBinding ,Input } from '@angular/core';

@Directive({
  selector: '[appCustomStyles]'
})
export class CustomStylesDirective {

  constructor() { }
@Input() data: any;

  @HostBinding('style.--header-row-background-color')
  get headerRowBackgroundColor() {
    return this.data?.headerRowBackgroundColor;
  }

  @HostBinding('style.--header-row-border-radius')
  get headerRowBorderRadius() {
    return this.data?.headerRowBorderRadius;
  }

  @HostBinding('style.--mat-select-background-color')
  get matSelectBackgroundColor() {
    return this.data?.matSelectBackgroundColor;
  }

  @HostBinding('style.--mat-select-border-color')
  get matSelectBorderColor() {
    return this.data?.matSelectBorderColor;
  }

  @HostBinding('style.--mat-select-arrow-color')
  get matSelectArrowColor() {
    return this.data?.matSelectArrowColor;
  }

  @HostBinding('style.--mat-select-arrow-active-color')
  get matSelectArrowActiveColor() {
    return this.data?.matSelectArrowActiveColor;
  }

  @HostBinding('style.--mat-form-field-underline-display')
  get matFormFieldUnderlineDisplay() {
    return this.data?.matFormFieldUnderlineDisplay;
  }

  @HostBinding('style.--mat-form-field-underline-display-none')
  get matFormFieldUnderlineDisplayNone() {
    return this.data?.matFormFieldUnderlineDisplayNone;
  }

  @HostBinding('style.--mat-header-row-background-color')
  get matHeaderRowBackgroundColor() {
    return this.data?.matHeaderRowBackgroundColor;
  }

  @HostBinding('style.--mat-header-row-border-radius')
  get matHeaderRowBorderRadius() {
    return this.data?.matHeaderRowBorderRadius;
  }
    @HostBinding('style.--mat-table-border-radius')
  get matTableBorderRadius() {
    return this.data.matTableBorderRadius;
  }

  @HostBinding('style.--mat-header-cell-color')
  get matHeaderCellColor() {
    return this.data.matHeaderCellColor;
  }

  @HostBinding('style.--mat-header-cell-font-family')
  get matHeaderCellFontFamily() {
    return this.data.matHeaderCellFontFamily;
  }

  @HostBinding('style.--mat-header-cell-font-style')
  get matHeaderCellFontStyle() {
    return this.data.matHeaderCellFontStyle;
  }

  @HostBinding('style.--mat-header-cell-font-weight')
  get matHeaderCellFontWeight() {
    return this.data.matHeaderCellFontWeight;
  }

  @HostBinding('style.--mat-header-cell-font-size')
  get matHeaderCellFontSize() {
    return this.data.matHeaderCellFontSize;
  }

  @HostBinding('style.--mat-header-cell-line-height')
  get matHeaderCellLineHeight() {
    return this.data.matHeaderCellLineHeight;
  }

  @HostBinding('style.--mat-header-row-height')
  get matHeaderRowHeight() {
    return this.data.matHeaderRowHeight;
  }

  @HostBinding('style.--mat-row-border-bottom')
  get matRowBorderBottom() {
    return this.data.matRowBorderBottom;
  }

  @HostBinding('style.--mat-cell-color')
  get matCellColor() {
    return this.data.matCellColor;
  }

  @HostBinding('style.--mat-cell-font-family')
  get matCellFontFamily() {
    return this.data.matCellFontFamily;
  }

  @HostBinding('style.--mat-cell-font-style')
  get matCellFontStyle() {
    return this.data.matCellFontStyle;
  }

  @HostBinding('style.--mat-cell-font-weight')
  get matCellFontWeight() {
    return this.data.matCellFontWeight;
  }

  @HostBinding('style.--mat-cell-font-size')
  get matCellFontSize() {
    return this.data.matCellFontSize;
  }

  @HostBinding('style.--mat-cell-line-height')
  get matCellLineHeight() {
    return this.data.matCellLineHeight;
  }
  @HostBinding('style.--mat-paginator-range-label-padding-right')
get matPaginatorRangeLabelPaddingRight(): string {
  return this.data.matPaginatorRangeLabelPaddingRight;
}

@HostBinding('style.--mat-paginator-page-size-label-display')
get matPaginatorPageSizeLabelDisplay(): string {
  return this.data.matPaginatorPageSizeLabelDisplay;
}

@HostBinding('style.--mat-paginator-container-flex-wrap')
get matPaginatorContainerFlexWrap(): string {
  return this.data.matPaginatorContainerFlexWrap;
}

@HostBinding('style.--mat-paginator-disabled-button-color')
get matPaginatorDisabledButtonColor(): string {
  return this.data.matPaginatorDisabledButtonColor;
}

@HostBinding('style.--mat-paginator-disabled-button-font-size')
get matPaginatorDisabledButtonFontSize(): string {
  return this.data.matPaginatorDisabledButtonFontSize;
}

@HostBinding('style.--mat-paginator-arrow-button-color')
get matPaginatorArrowButtonColor(): string {
  return this.data.matPaginatorArrowButtonColor;
}

@HostBinding('style.--mat-paginator-arrow-button-font-size')
get matPaginatorArrowButtonFontSize(): string {
  return this.data.matPaginatorArrowButtonFontSize;
}
@HostBinding('style.border') 
get matFormFieldWrapperBorder() {
  return this.data.matFormFieldWrapperBorder;
}

@HostBinding('style.border-radius') 
get matFormFieldWrapperBorderRadius() {
  return this.data.matFormFieldWrapperBorderRadius;
}

@HostBinding('style.padding-bottom') 
get matFormFieldWrapperPaddingBottom() {
  return this.data.matFormFieldWrapperPaddingBottom;
}

@HostBinding('style.border-top') 
get matFormFieldInfixBorderTop() {
  return this.data.matFormFieldInfixBorderTop;
}

}
