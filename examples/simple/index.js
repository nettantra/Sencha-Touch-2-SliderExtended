Ext.setup({
  onReady: function(options) {
    Ext.create('Ext.form.Panel', {
      fullscreen : true,
      items: [
        {
          docked: 'top',
          xtype: 'titlebar',
          title: 'SliderExtended'
        },
        {
          xtype : 'fieldset',
          title: 'Standard Slider Input',
          items : [
            {
              xtype: 'sliderfieldextended',
              name: 'slider_decimal',
              labelText: 'Decimal',
              label: 'Decimal',
              value: 3,
              minValue: 0,
              maxValue: 100,
              increment: 0.25
            },
            {
              xtype: 'sliderfieldextended',
              name: 'slider_integer',
              labelText: 'Integer',
              label: 'Integer',
              value: 9,
              minValue: 0,
              maxValue: 100
            }
          ]
        },
        {
          xtype : 'fieldset',
          title: 'Top Aligned Labels',
          items : [
            {
              xtype: 'sliderfieldextended',
              name: 'slider_decimal',
              labelAlign: 'top',
              labelText: 'Slider (Decimal)',
              label: 'Slider (Decimal)',
              value: 3,
              minValue: 0,
              maxValue: 100,
              increment: 0.25
            },
            {
              xtype: 'sliderfieldextended',
              name: 'slider_integer',
              labelAlign: 'top',
              labelText: 'Slider (Integer)',
              label: 'Slider (Integer)',
              value: 9,
              minValue: 0,
              maxValue: 100
            }
          ]
        },
        {
          xtype : 'fieldset',
          title: 'Left Aligned Helpers',
          defaults: {
            helperPosition: 'left'
          },
          items : [
            {
              xtype: 'sliderfieldextended',
              name: 'slider_decimal',
              labelAlign: 'top',
              labelText: 'Slider (Decimal)',
              label: 'Slider (Decimal)',
              value: 3,
              minValue: 0,
              maxValue: 100,
              increment: 0.25
            },
            {
              xtype: 'sliderfieldextended',
              name: 'slider_integer',
              labelAlign: 'top',
              labelText: 'Slider (Integer)',
              label: 'Slider (Integer)',
              value: 9,
              minValue: 0,
              maxValue: 100
            }
          ]
        }
      ]
    });
  }
});
